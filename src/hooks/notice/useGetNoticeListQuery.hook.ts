import { KEY } from '@/constants';
import { getNoticeList } from '@/services/';
import { createQuery } from '@tanstack/svelte-query';

const useGetNoticeListQuery = () => {
	return createQuery({
		queryKey: [KEY.NOTICE],
		queryFn: getNoticeList
	});
};

export default useGetNoticeListQuery;
