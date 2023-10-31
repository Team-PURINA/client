<script>
	import '../app.scss';
	import Aside from '../components/Aside/Aside.svelte';
</script>

<div class="w-full h-fit bg-[#1E2227] flex">
	<Aside />
	<div class="ml-64 w-full">
		<slot />
	</div>
</div>

<style>
	:global(p) {
		font-family: Pretendard;
	}
</style>
