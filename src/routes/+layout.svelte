<script lang="ts">
	import '../app.scss';
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	let { children } = $props();

	// 現在のルートID（例: '/', '/contents/研究/最適性理論'）
	const currentRouteId: string = $derived($page.route.id ?? '/');
</script>

{#if currentRouteId !== '/'}
	<a href="{base}/">TOP</a>
{/if}

{@render children()}
