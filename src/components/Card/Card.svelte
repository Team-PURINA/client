<script lang="ts">
	import classnames from 'classnames';
	import DecreaseArrowIcon from 'src/assets/DecreaseArrowIcon.svelte';
	import IncreaseArrowIcon from 'src/assets/IncreaseArrowIcon.svelte';

	export let classname: string;

	export let coinName: string;

	export let price: number;
	export let variancePrice: number;
	export let varianceRate: number;
</script>

<div
	class={classnames(
		'rounded-2xl w-[26.875rem] h-[16.25rem] pt-[1.375rem] pb-[2.625rem] px-7 bg-gradient-to-br flex flex-col justify-between relative overflow-hidden',
		classname
	)}
>
	<div>
		<p class="text-[#CCC] text-[1.375rem] leading-normal font-medium">{coinName}</p>
		<p class="mb-2 text-white text-[1.75rem] leading-normal font-extrabold">
			${price.toLocaleString('ru-RU')}
		</p>
		<div class="flex items-center">
			{#if varianceRate > 0}
				<IncreaseArrowIcon />
			{:else}
				<DecreaseArrowIcon />
			{/if}
			<p
				class={classnames(
					'ml-1 text-xs leading-normal font-semibold',
					varianceRate > 0 ? 'text-[#00F919]' : 'text-[#FF5454]'
				)}
			>
				{varianceRate}%
			</p>
			<p class="ml-2 text-[#888] text-[0.625rem] leading-normal font-semibold">
				{variancePrice}
				{varianceRate > 0 ? '증가' : '감소'}
			</p>
		</div>
	</div>
	<p class="text-white text-lg leading-normal font-normal font-['BCcardB']">9440-3232-1780-2341</p>
	<img
		class="absolute bottom-[-52px] right-[-50px] w-[14.625rem] h-[14.625rem]"
		src="/preact-bg.png"
		alt="Preact background"
	/>
</div>
