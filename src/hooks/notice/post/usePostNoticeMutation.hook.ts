import { goto } from '$app/navigation';
import { ROUTER } from '@/constants';
import { postNotice } from '@/services';
import { createMutation } from '@tanstack/svelte-query';

const usePostNoticeMutation = () => {
	return createMutation({
		mutationFn: postNotice,
		onSuccess: (noticeId) => {
			goto(`${ROUTER.NOTICE}/${noticeId}`);
		}
	});
};

export default usePostNoticeMutation;
