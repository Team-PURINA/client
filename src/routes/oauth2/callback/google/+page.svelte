<script>
	import { useGetTokenByGoogleMutation } from '@/hooks';
	import { onMount } from 'svelte';

	const mutation = useGetTokenByGoogleMutation();

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const code = urlParams.get('code');

		if (code) $mutation.mutate(code);
	});
</script>

<div class="text-white">로그인 중...</div>
