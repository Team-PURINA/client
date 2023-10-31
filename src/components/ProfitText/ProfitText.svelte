<script lang="ts">
	import LossIcon from '@/assets/LossIcon.svelte';
	import ProfitIcon from '@/assets/ProfitIcon.svelte';

	export let isProfit: Boolean;
	export let percentage: number;
</script>

<div class=" flex items-center gap-[4px]">
	{#if percentage === 0}
		<span class=" text-2xl text-gray-600">-</span>
	{:else if isProfit}
		<ProfitIcon />
		<span class=" font-medium text-sm text-[#00F919]">{percentage}%</span>
	{:else}
		<LossIcon />
		<span class=" font-medium text-sm text-[#FF5454]">{percentage}%</span>
	{/if}
</div>
