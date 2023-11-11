<script>
	import { axiosInstance } from '@/apis';
	import '@/app.scss';
	import TOKEN from '@/constants/storage.constant';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { onMount } from 'svelte';
	import Aside from '../components/Aside/Aside.svelte';

	const queryClient = new QueryClient();

	onMount(() => {
		const accessToken = localStorage.getItem(TOKEN.ACCESS_TOKEN);
		if (accessToken) axiosInstance.defaults.headers.common['Authorization'] = accessToken;
	});
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
