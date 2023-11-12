import KEY from '@/constants/queryKey.constant';
import getNoticeList from '@/services/notice/getNoticeList';
import { createQuery } from '@tanstack/svelte-query';

const useGetNoticeListQuery = () => {
	return createQuery({
		queryKey: [KEY.NOTICE],
		queryFn: getNoticeList
	});
};

export default useGetNoticeListQuery;