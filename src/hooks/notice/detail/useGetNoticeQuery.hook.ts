import KEY from '@/constants/queryKey.constant';
import getNotice from '@/services/notice/detail/getNotice';
import { createQuery } from '@tanstack/svelte-query';

const useGetNoticeQuery = (id: string) => {
	return createQuery({
		queryKey: [KEY.NOTICE, id],
		queryFn: () => getNotice(id)
	});
};

export default useGetNoticeQuery;
