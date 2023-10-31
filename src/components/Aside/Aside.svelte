<script>
	import LogoutIcon from '../../assets/LogoutIcon.svelte';
	import { ROUTER } from '../../constants';
	import AsideHead from './AsideHead.svelte';
	import AsideList from './AsideList.svelte';
</script>

<div class=" bg-[#212121] w-64 h-full py-2 flex flex-col items-center gap-3">
	<div class=" flex flex-col gap-8 py-6 border-b-[1px] border-b-solid border-b-[#2C2C2C]">
		<AsideHead />
		<a
			href={ROUTER.LOGIN}
			class=" flex items-center justify-center text-base text-white font-normal py-[10px] px-20 bg-[#2C2C2C] rounded-md"
		>
			로그인
		</a>
	</div>
	<AsideList />
	<button
		class=" mt-auto mb-6 hover:bg-[#242424] w-52 flex items-center px-5 py-4 gap-4 rounded-md"
	>
		<LogoutIcon />
		<span class=" text-[#018FC6] text-sm font-semibold">로그아웃</span>
	</button>
</div>
