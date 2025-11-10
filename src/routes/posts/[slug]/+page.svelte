<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<article>
	<h1>{data.title}</h1>
	<time>{data.date}</time>
	<svelte:component this={data.content} />
</article>
