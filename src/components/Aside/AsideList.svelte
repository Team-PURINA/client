<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import HomeIcon from '@/assets/HomeIcon.svelte';
	import NoticeIcon from '@/assets/NoticeIcon.svelte';
	import TradeIcon from '@/assets/TradeIcon.svelte';
	import TradeRecordIcon from '@/assets/TradeRecordIcon.svelte';
	import WalletIcon from '@/assets/WalletIcon.svelte';
	import classNames from 'classnames';
	import AsideCoinList from './AsideCoinList.svelte';

	const pages = [
		{ name: '홈', icon: HomeIcon, href: '/' },
		{ name: '공지사항', icon: NoticeIcon, href: '/notice' },
		{ name: '거래', icon: TradeIcon, href: '/trade' },
		{ name: '거래내역', icon: TradeRecordIcon, href: '/trade/history' },
		{ name: '지갑', icon: WalletIcon, href: '/wallet' }
	];

	$: currentPageHref = $page.route.id;

	const handlePageButtonClick = (pageHref: string) => {
		goto(pageHref);
		currentPageHref = pageHref;
	};
</script>

<div class="w-full flex flex-col items-center justify-center py-2">
	{#if currentPageHref === '/trade'}
		<AsideCoinList />
	{/if}
	<div class="flex flex-col items-center justify-center py-4">
		{#each pages as page (page)}
			<button
				on:click={() => handlePageButtonClick(page.href)}
				id={page.name}
				class={classNames(
					'w-52 flex items-center px-5 py-4 gap-4 rounded-md',
					page.href === currentPageHref ? 'bg-[#2C2C2C]' : 'hover:bg-[#242424]'
				)}
			>
				<svelte:component this={page.icon} />
				<span class=" text-[#018FC6] text-sm font-semibold">{page.name}</span>
			</button>
		{/each}
	</div>
</div>
