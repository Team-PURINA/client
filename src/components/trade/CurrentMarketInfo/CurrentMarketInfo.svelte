<script lang="ts">
	import InfoItem from './InfoItem/InfoItem.svelte';

	const infos = [
		{
			label: '시가총액',
			value: 123123123
		},
		{
			label: '시가총액1',
			value: 1324500
		},
		{
			label: '시가총액2',
			value: 123123123
		},
		{
			label: '시가총액3',
			value: 1324500
		},
		{
			label: '시가총액4',
			value: 123123123
		},
		{
			label: '시가총액5',
			value: 1324500
		},
		{
			label: '시가총액6',
			value: 123123123
		},
		{
			label: '시가총액7',
			value: 1324500
		},
		{
			label: '시가총액8',
			value: 123123123
		},
		{
			label: '시가총액9',
			value: 1324500
		},
		{
			label: '시가총액10',
			value: 123123123
		},
		{
			label: '시가총액11',
			value: 1324500
		},
		{
			label: '시가총액12',
			value: 123123123
		},
		{
			label: '시가총액13',
			value: 1324500
		}
	] as const;

	export let coinName: string;
</script>

<div class="px-2 py-1 shrink-0">
	<div class="mt-2 ml-1">
		<p class="text-white text-sm font-semibold">현재 시장 정보</p>
		<p class="text-[#888] text-[0.625rem] font-semibold">코인에 대한 현재 시장 정보를 알려줘요.</p>
	</div>
	<div class="flex flex-wrap">
		{#each infos as { label, value } (label)}
			<InfoItem {label} {value} />
		{/each}
	</div>
</div>
