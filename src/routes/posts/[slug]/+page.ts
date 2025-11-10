import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`$lib/posts/${params.slug}.svx`);

		return {
			...post.metadata,
			content: post.default
		};
	} catch (e) {
		throw error(404, 'Not found');
	}
};
