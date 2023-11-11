<script lang="ts">
	import { goto } from '$app/navigation';
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
		on:click={() =>
			goto(
				`https://accounts.google.com/o/oauth2/auth?client_id=880279836007-g0gv89nvu9tkoc91fjqjibi3i65m3hvc.apps.googleusercontent.com&redirect_uri=http://localhost:5173/oauth2/callback/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile`
			)}
	>
		<GoogleLogo />
		구글로 시작하기
	</button>
</div>
