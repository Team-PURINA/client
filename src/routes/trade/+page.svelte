<script lang="ts">
	import BuySellForm from '@/components/trade/BuySellForm/BuySellForm.svelte';
	import CurrentMarketInfo from '@/components/trade/CurrentMarketInfo/CurrentMarketInfo.svelte';
	import Graph from '@/components/trade/Graph/Graph.svelte';
	import TradeHistory from '@/components/trade/TradeHistory/TradeHistory.svelte';
	import { useDoTradeMutation } from '@/hooks';
	import tradeCoinPageStore from '@/stores/tradeCoinPage.store';
	import type { TradeData } from '@/types/trade';

	let tradeData: TradeData = {
		tradeType: 'BUY',
		amount: '',
		coinName: 'Svelte'
	};

	$: console.log(tradeData);

	const mutation = useDoTradeMutation();

	tradeCoinPageStore.subscribe((coinName) => {
		tradeData.coinName = coinName;
	});
</script>

<div class="h-full py-8 px-5 flex flex-col mx-auto">
	<div class="flex gap-[0.5625rem] justify-center mb-4">
		<Graph coinName={tradeData.coinName} />
		<BuySellForm bind:tradeData buySellMutation={mutation} />
	</div>
	<TradeHistory coinName={tradeData.coinName} />
	<CurrentMarketInfo coinName={tradeData.coinName} />
</div>
