<script lang="ts">
	import { goto } from '$app/navigation';
	import { env } from '$env/dynamic/public';
	import GoogleLogo from '@/assets/GoogleLogo.svelte';
	import Logo from '@/assets/Logo.svelte';
</script>

<div class="bg-[#1E2227] rounded-lg px-[1.875rem] py-6">
	<div class=" flex items-center justify-center gap-4 mb-8">
		<Logo />
		<h1
			class="bg-gradient-to-r from-[#31BCF2] to-[#0A759E] text-transparent bg-clip-text text-2xl font-bold"
		>
			BUMACOIN
		</h1>
	</div>
	<button
		class="flex gap-3 justify-center items-center border-[#414449] border-2 border-solid rounded px-[3.75rem] py-3 text-sm font-semibold"
		on:click={() => goto(env.PUBLIC_GOOGLE_AUTH_LINK)}
	>
		<GoogleLogo />
		구글로 시작하기
	</button>
</div>
