<script lang="ts">
	import TradeBlock from './TradeBlock/TradeBlock.svelte';

	const TRADE_LIST = [
		{
			id: 428,
			classnames: 'bg-gradient-to-br'
		},
		{
			id: 429,
			classnames: 'bg-gradient-to-tl'
		},
		{
			id: 430,
			classnames: 'bg-gradient-to-tr'
		},
		{
			id: 431,
			classnames: 'bg-gradient-to-bl'
		},
		{
			id: 432,
			classnames: 'bg-gradient-to-bl'
		},
		{
			id: 433,
			classnames: 'bg-gradient-to-tr'
		},
		{
			id: 434,
			classnames: 'bg-gradient-to-tl'
		},
		{
			id: 435,
			classnames: 'bg-gradient-to-br'
		},
		{
			id: 436,
			classnames: 'bg-gradient-to-tl'
		},
		{
			id: 437,
			classnames: 'bg-gradient-to-tr'
		},
		{
			id: 438,
			classnames: 'bg-gradient-to-bl'
		},
		{
			id: 439,
			classnames: 'bg-gradient-to-bl'
		},
		{
			id: 440,
			classnames: 'bg-gradient-to-tr'
		},
		{
			id: 441,
			classnames: 'bg-gradient-to-tl'
		},
		{
			id: 442,
			classnames: 'bg-gradient-to-tl'
		},
		{
			id: 443,
			classnames: 'bg-gradient-to-tl'
		},
		{
			id: 444,
			classnames: 'bg-gradient-to-tl'
		},
		{
			id: 445,
			classnames: 'bg-gradient-to-tl'
		},
		{
			id: 446,
			classnames: 'bg-gradient-to-tl'
		},
		{
			id: 447,
			classnames: 'bg-gradient-to-tl'
		},
		{
			id: 448,
			classnames: 'bg-gradient-to-tl'
		}
	] as const;

	export let coinName: string;
</script>

<div class="pt-3 px-2.5 pb-1 mb-4 shrink-0">
	<p class="text-white text-sm font-semibold">SLT 거래 내역</p>
	<p class="text-[#888] text-[0.625rem] font-semibold mb-4">
		블록체인의 각 블록들을 클릭하여 거래 내역을 확인할 수 있어요.
	</p>
	<div class="flex items-center overflow-auto scrollbar-hide">
		{#each TRADE_LIST as { id, classnames } (id)}
			<TradeBlock {id} {classnames} />
		{/each}
	</div>
</div>
