<script>
	import InfoItem from './InfoItem/InfoItem.svelte';
</script>

<div class="px-2 py-1 shrink-0">
	<div class="mt-2 ml-1">
		<p class="text-white text-sm font-semibold">현재 시장 정보</p>
		<p class="text-[#888] text-[0.625rem] font-semibold">코인에 대한 현재 시장 정보를 알려줘요.</p>
	</div>
	<div>
		<div class="flex">
			<InfoItem label="시가총액" value={132245500} />
			<InfoItem label="시가총액" value={132245500} />
			<InfoItem label="시가총액" value={132245500} />
			<InfoItem label="시가총액" value={132245500} />
			<InfoItem label="시가총액" value={132245500} />
		</div>
		<div class="flex">
			<InfoItem label="시가총액" value={132245500} />
			<InfoItem label="시가총액" value={132245500} />
			<InfoItem label="시가총액" value={132245500} />
			<InfoItem label="시가총액" value={132245500} />
			<InfoItem label="시가총액" value={132245500} />
		</div>
		<div class="flex">
			<InfoItem label="시가총액" value={132245500} />
			<InfoItem label="시가총액" value={132245500} />
			<InfoItem label="시가총액" value={132245500} />
		</div>
	</div>
</div>
