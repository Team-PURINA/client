<script>
	import LogoutIcon from '@/assets/LogoutIcon.svelte';
	import LoginModal from '../Modal/LoginModal.svelte';
	import Modal from '../Modal/Modal.svelte';
	import AsideHead from './AsideHead.svelte';
	import AsideList from './AsideList.svelte';

	let showModal = false;
</script>

<div
	class="bg-[#212121] w-64 h-full py-2 flex flex-col items-center gap-3 overflow-scroll shrink-0"
>
	<div class="flex flex-col gap-8 py-6 border-b-[1px] border-b-solid border-b-[#2C2C2C]">
		<AsideHead />
		<button
			class=" flex items-center justify-center text-base text-white font-normal py-[10px] px-20 bg-[#2C2C2C] rounded-md"
			on:click={() => {
				showModal = true;
			}}
		>
			로그인
		</button>
	</div>
	<Modal bind:showModal>
		<LoginModal />
	</Modal>
	<AsideList />
	<button
		class=" mt-auto mb-6 hover:bg-[#242424] w-52 flex items-center px-5 py-4 gap-4 rounded-md"
	>
		<LogoutIcon />
		<span class=" text-[#018FC6] text-sm font-semibold">로그아웃</span>
	</button>
</div>
