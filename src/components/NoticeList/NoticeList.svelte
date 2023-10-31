<script lang="ts">
	import NoticeItem from '../NoticeItem/NoticeItem.svelte';

	const NOTICE_LIST = [
		{
			id: 1,
			title: '2023년 10월자 부마코인 업데이트 내역 - 거래 내역 UI 개선',
			date: '2023-10-17'
		},
		{
			id: 2,
			title: '2023년 10월자 부마코인 업데이트 내역 - 거래 내역 UI 개선',
			date: '2023-10-18'
		},
		{
			id: 3,
			title: '2023년 10월자 부마코인 업데이트 내역 - 거래 내역 UI 개선',
			date: '2023-10-19'
		},
		{
			id: 4,
			title: '2023년 10월자 부마코인 업데이트 내역 - 거래 내역 UI 개선',
			date: '2023-10-20'
		},
		{
			id: 5,
			title: '2023년 10월자 부마코인 업데이트 내역 - 거래 내역 UI 개선',
			date: '2023-10-21'
		}
	];
</script>

{#each NOTICE_LIST as { id, title, date } (id)}
	<NoticeItem {id} {title} {date} />
{/each}
