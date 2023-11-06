<script lang="ts">
	import BuySellForm from '@/components/trade/BuySellForm/BuySellForm.svelte';
	import CurrentMarketInfo from '@/components/trade/CurrentMarketInfo/CurrentMarketInfo.svelte';
	import Graph from '@/components/trade/Graph/Graph.svelte';
	import TradeHistory from '@/components/trade/TradeHistory/TradeHistory.svelte';
</script>

<div class="h-full py-8 px-5 flex flex-col mx-auto">
	<div class="flex gap-[0.5625rem] justify-center mb-4">
		<Graph />
		<BuySellForm />
	</div>
	<TradeHistory />
	<CurrentMarketInfo />
</div>
