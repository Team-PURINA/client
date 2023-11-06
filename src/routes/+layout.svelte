<script>
	import '@/app.scss';
	import Aside from '../components/Aside/Aside.svelte';
</script>

<div class="h-screen flex">
	<Aside />
	<div class="h-screen overflow-auto flex-1 bg-[#1E2227]">
		<slot />
	</div>
</div>

<style>
	:global(p) {
		font-family: Pretendard;
	}
	:global(button) {
		font-family: Pretendard;
	}
</style>
