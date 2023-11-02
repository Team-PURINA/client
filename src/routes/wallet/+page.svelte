<script lang="ts">
	import Card from '@/components/Card/Card.svelte';
	import CoinInfoDisplay from '@/components/CoinInfoDisplay/CoinInfoDisplay.svelte';

	const WALLETS = [
		{
			id: 1,
			name: 'Nest.JS',
			currencyNmae: 'NST',
			totalPrice: 693_014_400,
			coinCount: 300,
			totalProfitPercent: 3.8,
			totalProfit: 200_288_000,
			averagePrice: 90210,
			totalPurchaseQuantity: 3210,
			latestTradingDate: '2023-10-30T12:58:21'
		},
		{
			id: 1,
			name: 'Spring Boot',
			currencyNmae: 'SBT',
			totalPrice: 693_014_400,
			coinCount: 300,
			totalProfitPercent: 3.8,
			totalProfit: 200_288_000,
			averagePrice: 90210,
			totalPurchaseQuantity: 3210,
			latestTradingDate: '2023-10-30T12:58:21'
		},
		{
			id: 1,
			name: 'Azure',
			currencyNmae: 'AZR',
			totalPrice: 693_014_400,
			coinCount: 300,
			totalProfitPercent: 3.8,
			totalProfit: 200_288_000,
			averagePrice: 90210,
			totalPurchaseQuantity: 3210,
			latestTradingDate: '2023-10-30T12:58:21'
		},
		{
			id: 1,
			name: 'Svelte',
			currencyNmae: 'SLT',
			totalPrice: 693_014_400,
			coinCount: 300,
			totalProfitPercent: 3.8,
			totalProfit: 200_288_000,
			averagePrice: 90210,
			totalPurchaseQuantity: 3210,
			latestTradingDate: '2023-10-30T12:58:21'
		},
		{
			id: 1,
			name: 'Preact',
			currencyNmae: 'PRT',
			totalPrice: 693_014_400,
			coinCount: 300,
			totalProfitPercent: 3.8,
			totalProfit: 200_288_000,
			averagePrice: 90210,
			totalPurchaseQuantity: 3210,
			latestTradingDate: '2023-10-30T12:58:21'
		},
		{
			id: 1,
			name: 'Qwik',
			currencyNmae: 'QWK',
			totalPrice: 693_014_400,
			coinCount: 300,
			totalProfitPercent: 3.8,
			totalProfit: 200_288_000,
			averagePrice: 90210,
			totalPurchaseQuantity: 3210,
			latestTradingDate: '2023-10-30T12:58:21'
		}
	] as const;
</script>

<div class="w-full h-full px-11 py-9 flex gap-[5.375rem] justify-center">
	<div class="shrink-0">
		<CoinInfoDisplay />
	</div>
	<div class="w-[30.375rem] h-full shrink-0">
		<Card
			classname="from-[#673AB8] to-[#DBC7FF]"
			coinName="Preact"
			price={340_281_000}
			variancePrice={80_500_000}
			varianceRate={1.9}
		/>
	</div>
</div>
