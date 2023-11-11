<script>
	import '@/app.scss';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import Aside from '../components/Aside/Aside.svelte';

	const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
	<div class="h-screen flex">
		<Aside />
		<div class="h-screen overflow-auto flex-1 bg-[#1E2227]">
			<slot />
		</div>
	</div>
</QueryClientProvider>

<style>
	:global(p) {
		font-family: Pretendard;
	}
	:global(button) {
		font-family: Pretendard;
	}
</style>
