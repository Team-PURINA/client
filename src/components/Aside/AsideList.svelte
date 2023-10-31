<script lang="ts">
	import HomeIcon from '../../assets/HomeIcon.svelte';
	import NoticeIcon from '../../assets/NoticeIcon.svelte';
	import TradeIcon from '../../assets/TradeIcon.svelte';
	import TradeRecordIcon from '../../assets/TradeRecordIcon.svelte';
	import WalletIcon from '../../assets/WalletIcon.svelte';
	import classNames from 'classnames';
	import AsideCoinList from './AsideCoinList.svelte';

	const pages = [
		{ name: '홈', component: HomeIcon },
		{ name: '공지사항', component: NoticeIcon },
		{ name: '거래', component: TradeIcon },
		{ name: '거래내역', component: TradeRecordIcon },
		{ name: '지갑', component: WalletIcon }
	];

	let currentPage = '홈';

	const handlePageButtonClick = (pagename: string) => {
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
					' hover:bg-[#242424] w-52 flex items-center px-5 py-4 gap-4 rounded-md',
					page.name === currentPage && 'bg-[#2C2C2C]'
				)}
			>
				<svelte:component this={page.component} />
				<span class=" text-[#018FC6] text-sm font-semibold">{page.name}</span>
			</button>
		{/each}
	</div>
</div>
