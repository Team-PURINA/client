<script lang="ts">
	import classNames from 'classnames';
	import { slide } from 'svelte/transition';
	import ProfitText from '../ProfitText/ProfitText.svelte';

	const coins = [
		{ src: 'svelte.png', name: 'SLT', isProfit: false, percentage: 4.2 },
		{ src: 'azure.png', name: 'AZR', isProfit: true, percentage: 8.1 },
		{ src: 'spring_boot.png', name: 'SBT', isProfit: false, percentage: 37.9 },
		{ src: 'qwik.png', name: 'QWK', isProfit: false, percentage: 0 },
		{ src: 'nestjs.png', name: 'NST', isProfit: true, percentage: 0.1 },
		{ src: 'preact.png', name: 'PRT', isProfit: false, percentage: 1.3 }
	];

	let currentCoin = 'SLT';

	const handleCoinButtonClick = (coinname: string) => {
		currentCoin = coinname;
	};
</script>

<div transition:slide={{ duration: 1000, axis: 'y' }} class=" w-full h-fit mb-4">
	{#each coins as coin (coin)}
		<button
			on:click={() => handleCoinButtonClick(coin.name)}
			class={classNames(
				'hover:bg-[#2C2C2C] cursor-pointer w-full h-14 border-b-[1px] border-b-solid border-b-[#2C2C2C] px-8 flex items-center gap-4',
				currentCoin === coin.name && 'bg-[#2C2C2C]'
			)}
		>
			<img src={coin.src} alt={coin.src} class=" w-6" />
			<span class=" font-medium text-lg text-white">{coin.name}</span>
			<div class="ml-auto">
				<ProfitText isProfit={coin.isProfit} percentage={coin.percentage} />
			</div>
		</button>
	{/each}
</div>
