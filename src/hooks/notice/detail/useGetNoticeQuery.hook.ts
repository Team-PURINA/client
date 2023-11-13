import { KEY } from '@/constants';
import { getNotice } from '@/services/';
import { createQuery } from '@tanstack/svelte-query';

const useGetNoticeQuery = (id: string) => {
	return createQuery({
		queryKey: [KEY.NOTICE, id],
		queryFn: () => getNotice(id)
	});
};

export default useGetNoticeQuery;
