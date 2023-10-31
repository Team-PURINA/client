<script>
	const infomations = [
		{ key: 'Hash', value: '00000-bb941' },
		{ key: 'Hash', value: '00000-bb941' },
		{ key: 'Hash', value: '00000-bb941' },
		{ key: 'Hash', value: '00000-bb941' },
		{ key: 'Hash', value: '00000-bb941' },
		{ key: 'Hash', value: '00000-bb941' },
		{ key: 'Hash', value: '00000-bb941' },
		{ key: 'Hash', value: '00000-bb941' },
		{ key: 'Hash', value: '00000-bb941' },
		{ key: 'Hash', value: '00000-bb941' },
		{ key: 'Hash', value: '00000-bb941' },
		{ key: 'Hash', value: '00000-bb941' },
		{ key: 'Hash', value: '00000-bb941' },
		{ key: 'Hash', value: '00000-bb941' },
		{ key: 'Hash', value: '00000-bb941' },
		{ key: 'Hash', value: '00000-bb941' },
		{ key: 'Hash', value: '00000-bb941' },
		{ key: 'Hash', value: '00000-bb941' },
		{ key: 'Hash', value: '00000-bb941' },
		{ key: 'Hash', value: '00000-bb941' },
		{ key: 'Hash', value: '00000-bb941' },
		{ key: 'Hash', value: '00000-bb941' }
	];
</script>

<div class=" w-[44rem] p-10 h-96 bg-black flex flex-col gap-2">
	<div class="w-fit h-fit">
		<div class="custom-background w-20 h-20 rounded-md relative" />
		<img src="svelte.png" alt="svelte" class=" absolute w-9 mt-[-36px] ml-[54px]" />
	</div>
	<div class=" border-b-2 border-b-solid py-2 border-[#888888]">
		<span class=" font-semibold text-2xl text-white">SLT Block #821</span>
	</div>
	<div class=" flex flex-wrap overflow-y-scroll">
		{#each infomations as infomation (infomation)}
			<div class=" flex items-center w-1/2 py-1">
				<span class=" font-medium text-sm text-white">{infomation.key}</span>
				<span class=" ml-16 font-normal text-sm text-[#888888]">{infomation.value}</span>
			</div>
		{/each}
	</div>
</div>

<style>
	.custom-background {
		background: linear-gradient(135deg, #fff5f2 0%, #ff460a 100%);
	}
</style>
