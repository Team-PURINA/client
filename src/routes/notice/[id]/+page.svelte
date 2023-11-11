<script>
	import { page } from '$app/stores';
	import useDeleteNoticeMutation from '@/hooks/notice/detail/useDeleteNoticeMutation.hook';
	import useGetNoticeQuery from '@/hooks/notice/detail/useGetNoticeQuery.hook';
	import { format } from 'date-fns';
	import NoticeLogoIcon from '../../../assets/NoticeLogoIcon.svelte';

	const { id } = $page.params;

	const query = useGetNoticeQuery(id);
	const mutation = useDeleteNoticeMutation();

	$: notice = $query.data;
	$: isAdmin = notice?.user.authority === 'ADMIN';
</script>

{#if notice}
	<div class="flex flex-col items-center px-24 py-20 gap-16">
		<div class="w-full flex flex-col gap-2">
			<span class=" font-semibold text-4xl text-white">{notice.title}</span>
			<div class="flex items-center mt-1">
				<span class=" font-medium text-[#888888] text-base">
					{format(new Date(notice.createdAt), 'yyyy.dd.MM.')} · {notice.user.name}
				</span>
				{#if isAdmin}
					<button
						class="rounded-sm ml-auto py-1 px-3 bg-[#FF5454] text-white text-sm font-medium w-fit"
						on:click={() => {
							$mutation.mutate(id);
						}}
					>
						공지 삭제
					</button>
				{/if}
			</div>
		</div>
		<div class=" w-full h-fit flex items-center justify-center gap-10">
			<NoticeLogoIcon />
			<span
				class="bg-gradient-to-r from-[#31BCF2] to-[#0A759E] text-transparent bg-clip-text text-7xl font-bold"
			>
				BUMACOIN
			</span>
		</div>
		<div class=" w-10/12 text-white text-lg whitespace-pre-wrap">
			{notice.content}
		</div>
	</div>
{/if}
