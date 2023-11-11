<script lang="ts">
	import useGetNoticeListQuery from '@/hooks/useGetNoticeList.hook';
	import NoticeItem from './NoticeItem.svelte';

	const query = useGetNoticeListQuery();
</script>

{#if $query.isSuccess}
	{#each $query.data as notice (notice.id)}
		<NoticeItem
			id={notice.id}
			title={notice.title}
			createdAt={notice.createdAt}
			author={notice.user.name}
		/>
	{/each}
{/if}
