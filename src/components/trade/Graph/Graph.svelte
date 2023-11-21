<script lang="ts">
	import type { CoinName } from '@/types';
	import classNames from 'classnames';

	const periodList = ['1H', '1D', '1W', '1M', '1Y'] as const;

	type Period = '1H' | '1D' | '1W' | '1M' | '1Y';
	let period: Period = '1H';
	export let coinName: CoinName;

	const coinImagesMap: Record<CoinName, string> = {
		Svelte: '/svelte.png',
		Qwik: '/qwik.png',
		SpringBoot: '/spring_boot.png',
		Azure: '/azure.png',
		Nestjs: '/nestjs.png',
		Preact: '/preact.png'
	};
</script>

<div class="flex-1 h-fit bg-black shrink-0">
	<div class="w-full flex justify-between mb-3.5 px-4 pr-7 py-2">
		<div class="flex items-end gap-8">
			<img src={coinImagesMap[coinName]} alt="{coinName} logo" />
			<div>
				<p class="text-[1.625rem] text-white font-normal leading-tight">$28,396.61</p>
				<p class="text-[0.625rem] text-white font-normal leading-tight">Vol 30,446,762,805 BTC</p>
			</div>
		</div>
		<div class="flex gap-4">
			{#each periodList as periodItem (periodItem)}
				<button
					on:click={() => {
						period = periodItem;
					}}
					class={classNames('text-[#999] font-medium text-base', {
						'text-white': periodItem === period
					})}
				>
					{periodItem}
				</button>
			{/each}
		</div>
	</div>
	<div class="h-[18.625rem]" />
</div>
