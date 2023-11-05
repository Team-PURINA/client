<script lang="ts">
	import { goto } from '$app/navigation';
	import HomeIcon from '@/assets/HomeIcon.svelte';
	import NoticeIcon from '@/assets/NoticeIcon.svelte';
	import TradeIcon from '@/assets/TradeIcon.svelte';
	import TradeRecordIcon from '@/assets/TradeRecordIcon.svelte';
	import WalletIcon from '@/assets/WalletIcon.svelte';
	import classNames from 'classnames';
	import AsideCoinList from './AsideCoinList.svelte';

	const pages = [
		{ name: '홈', icon: HomeIcon },
		{ name: '공지사항', icon: NoticeIcon },
		{ name: '거래', icon: TradeIcon },
		{ name: '거래내역', icon: TradeRecordIcon },
		{ name: '지갑', icon: WalletIcon }
	];

	const pagesMap: Record<string, string> = {
		홈: '/',
		공지사항: '/notice',
		거래: '/trade',
		거래내역: '/trade/history',
		지갑: '/wallet'
	};

	let currentPage = '홈';

	const handlePageButtonClick = (pagename: string) => {
		goto(pagesMap[pagename]);
		currentPage = pagename;
	};
</script>

<div class="w-full flex flex-col items-center justify-center py-2">
	{#if currentPage === '거래'}
		<AsideCoinList />
	{/if}
	<div class="flex flex-col items-center justify-center py-4">
		{#each pages as page (page)}
			<button
				on:click={() => handlePageButtonClick(page.name)}
				id={page.name}
				class={classNames(
					'w-52 flex items-center px-5 py-4 gap-4 rounded-md',
					page.name === currentPage ? 'bg-[#2C2C2C]' : 'hover:bg-[#242424]'
				)}
			>
				<svelte:component this={page.icon} />
				<span class=" text-[#018FC6] text-sm font-semibold">{page.name}</span>
			</button>
		{/each}
	</div>
</div>
