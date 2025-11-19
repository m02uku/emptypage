import type { PageLoad } from './$types';
import type { Component } from 'svelte';

type PostModule = { default: Component };

export const load: PageLoad = async ({ params }) => {
	// Component loaders
	const loaders = import.meta.glob('/src/lib/posts/*.{svx,svelte}') as Record<
		string,
		() => Promise<unknown>
	>;
	// Raw source loaders (returns file content as string) using modern glob options
	const rawLoaders = import.meta.glob('/src/lib/posts/*.{svx,svelte}', {
		query: '?raw',
		import: 'default'
	}) as Record<string, () => Promise<string>>;

	const base = `/src/lib/posts/${params.slug}`;
	const pathSvx = `${base}.svx`;
	const pathSvelte = `${base}.svelte`;
	const componentLoader = (loaders[pathSvx] ?? loaders[pathSvelte])!;
	const rawLoader = (rawLoaders[pathSvx] ?? rawLoaders[pathSvelte])!;

	const module = (await componentLoader()) as PostModule;
	const source = await rawLoader();

	// Determine file type and extract title accordingly
	let title = '';
	const isSvx = Boolean(rawLoaders[pathSvx]);
	if (isSvx) {
		// First markdown ATX H1: line starting with '# '
		const mdMatch = source.match(/^# +(.*)$/m);
		if (mdMatch) title = mdMatch[1].trim();
	} else {
		// First <h1> tag for .svelte
		const h1Match = source.match(/<h1[^>]*>(.*?)<\/h1>/i);
		if (h1Match) title = h1Match[1].trim();
	}

	return { content: module.default, title };
};
