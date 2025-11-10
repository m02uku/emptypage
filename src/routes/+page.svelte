<script lang="ts">
	import { base } from '$app/paths';
	const filePaths = Object.keys(import.meta.glob('./contents/*/*/+page.svx'));
	const byCategory = filePaths.reduce<Record<string, string[]>>((acc, path) => {
		const [, , category, title] = path.split('/');
		(acc[category] ??= []).push(title);
		return acc;
	}, {});
	const entries = Object.entries(byCategory).map(([category, titles]) => [category, titles.sort()]);
</script>

<h1>emptypage</h1>
{#each entries as [category, titles]}
	<h2>{category}</h2>
	<ul>
		{#each titles as title}
			<li><a href={`${base}/contents/${category}/${title}`}>{title}</a></li>
		{/each}
	</ul>
{/each}
