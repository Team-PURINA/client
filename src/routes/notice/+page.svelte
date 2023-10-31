<script>
	import NoticeList from '@/components/NoticeList/NoticeList.svelte';
</script>

<div class="w-full h-full py-9 px-10">
	<div class="flex items-center justify-between w-full">
		<p class="text-white text-xl leading-normal not-italic font-semibold">현재 화폐 거래량</p>
		<a
			href="/notice/post"
			class="w-20 h-10 rounded bg-[#30BAEF] flex items-center justify-center text-xs font-semibold font-['Pretendard'] leading-normal not-italic text-white shrink-0"
		>
			공지 작성
		</a>
	</div>
	<NoticeList />
</div>
