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
			latestTradingDate: '2023-10-30T12:58:21',
			bgSrc: '/nest.js_bg.png'
		},
		{
			id: 2,
			name: 'Azure',
			currencyNmae: 'AZR',
			totalPrice: 693_014_400,
			coinCount: 300,
			totalProfitPercent: 3.8,
			totalProfit: 200_288_000,
			averagePrice: 90210,
			totalPurchaseQuantity: 3210,
			latestTradingDate: '2023-10-30T12:58:21',
			bgSrc: '/azure_bg.png'
		},
		{
			id: 3,
			name: 'Preact',
			currencyNmae: 'PRT',
			totalPrice: 693_014_400,
			coinCount: 300,
			totalProfitPercent: 3.8,
			totalProfit: 200_288_000,
			averagePrice: 90210,
			totalPurchaseQuantity: 3210,
			latestTradingDate: '2023-10-30T12:58:21',
			bgSrc: '/preact_bg.png'
		},
		{
			id: 4,
			name: 'Svelte',
			currencyNmae: 'SLT',
			totalPrice: 693_014_400,
			coinCount: 300,
			totalProfitPercent: 3.8,
			totalProfit: 200_288_000,
			averagePrice: 90210,
			totalPurchaseQuantity: 3210,
			latestTradingDate: '2023-10-30T12:58:21',
			bgSrc: '/svelte_bg.png'
		},
		{
			id: 5,
			name: 'Spring Boot',
			currencyNmae: 'SBT',
			totalPrice: 693_014_400,
			coinCount: 300,
			totalProfitPercent: 3.8,
			totalProfit: 200_288_000,
			averagePrice: 90210,
			totalPurchaseQuantity: 3210,
			latestTradingDate: '2023-10-30T12:58:21',
			bgSrc: '/spring_boot_bg.png'
		},
		{
			id: 6,
			name: 'Qwik',
			currencyNmae: 'QWK',
			totalPrice: 693_014_400,
			coinCount: 300,
			totalProfitPercent: 3.8,
			totalProfit: 200_288_000,
			averagePrice: 90210,
			totalPurchaseQuantity: 3210,
			latestTradingDate: '2023-10-30T12:58:21',
			bgSrc: '/qwik_bg.png'
		}
	] as const;

	const cardClassnames = {
		'Nest.JS': 'from-[#CE1942] to-[#FF96AE]',
		Azure: 'from-[#0A5FAC] to-[#35B7ED]',
		Preact: 'from-[#673AB8] to-[#DBC7FF]',
		Svelte: 'from-[#FF3E00] to-[#FFF]',
		'Spring Boot': 'from-[#8BC34A] to-[#E5FFC7]',
		Qwik: 'from-[#18B6F6] to-[#9C62F8]'
	};
</script>

<div class="w-full h-full px-11 py-9 flex gap-[5.375rem] justify-center">
	<div class="shrink-0">
		<CoinInfoDisplay />
	</div>
	<div class="w-[30.375rem] h-full shrink-0">
		{#each WALLETS as wallet (wallet.id)}
			<Card
				classname={cardClassnames[wallet.name]}
				coinName={wallet.name}
				price={wallet.totalPrice}
				variancePrice={wallet.totalProfit}
				varianceRate={wallet.totalProfitPercent}
				src={wallet.bgSrc}
			/>
		{/each}
	</div>
</div>
