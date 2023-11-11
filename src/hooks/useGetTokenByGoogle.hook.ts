import { goto } from '$app/navigation';
import { ROUTER } from '@/constants';
import TOKEN from '@/constants/storage.constant';
import getTokenByGoogle from '@/services/auth/getTokenByGoogle';
import { createMutation } from '@tanstack/svelte-query';

const useGetTokenByGoogleMutation = () => {
	const mutation = createMutation({
		mutationFn: getTokenByGoogle,
		onSuccess: (data) => {
			localStorage.setItem(TOKEN.ACCESS_TOKEN, data.accessToken);
			localStorage.setItem(TOKEN.REFRESH_TOKEN, data.refreshToken);
			goto(ROUTER.HOME);
		}
	});

	return mutation;
};

export default useGetTokenByGoogleMutation;
