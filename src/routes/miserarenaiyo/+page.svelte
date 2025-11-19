<script lang="ts">
	import { base } from '$app/paths';
	const posts = `${base}/posts`;
	import miserarenaiyo from '$lib/assets/images/miserarenaiyo.png';
</script>

<svelte:head>
	<title>xxx</title>
</svelte:head>

<img id="miserarenaiyo" alt="miserarenaiyo" src={miserarenaiyo} />

<ul>
	<li><a href="{posts}/doctoral_thesis_summary">Doctoral Thesis Summary</a></li>
	<li><a href="{posts}/doctoral_thesis_summary_v2">Doctoral Thesis Summary v2</a></li>
	<li><a href="{posts}/doctoral_thesis_log">Doctoral Thesis Log</a></li>
	<li>
		<a href="{posts}/comments_from_hayashi-sensei_and_hirayama-sensei"
			>Comments from Hayashi-sensei / Hirayama-sensei</a
		>
	</li>
	<li><a href="{posts}/20251120_Ridge-i_座談会">20251120_Ridge-i 座談会</a></li>
</ul>

<style>
	#miserarenaiyo {
		width: 100%;
		height: 200px;
	}
</style>
