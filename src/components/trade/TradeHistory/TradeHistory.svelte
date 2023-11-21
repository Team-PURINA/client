<script lang="ts">
	import useGetAllBlockQuery from '@/hooks/trade/useGetAllBlockQuery.hook';
	import type { CoinName } from '@/types';
	import TradeBlock from './TradeBlock/TradeBlock.svelte';

	export let coinName: CoinName;

	const bgGradientDirections = [
		'bg-gradient-to-br',
		'bg-gradient-to-bl',
		'bg-gradient-to-tr',
		'bg-gradient-to-tl'
	];

	const query = useGetAllBlockQuery(coinName);
</script>

{#if $query.isSuccess}
	<div class="pt-3 px-2.5 pb-1 mb-4 shrink-0">
		<p class="text-white text-sm font-semibold">SLT 거래 내역</p>
		<p class="text-[#888] text-[0.625rem] font-semibold mb-4">
			블록체인의 각 블록들을 클릭하여 거래 내역을 확인할 수 있어요.
		</p>
		<div class="flex items-center overflow-auto scrollbar-hide">
			{#each $query.data as { blockNumber } (blockNumber)}
				<TradeBlock
					id={blockNumber}
					classnames={bgGradientDirections[Math.floor(Math.random() * 4)]}
				/>
			{/each}
		</div>
	</div>
{/if}
