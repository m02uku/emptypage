<script lang="ts">
	import { base } from '$app/paths';
	let { children } = $props();
</script>

<a href="{base}/">TOP</a>

{@render children()}
