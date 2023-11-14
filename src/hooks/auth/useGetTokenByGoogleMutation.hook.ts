import { goto } from '$app/navigation';
import { ROUTER, TOKEN } from '@/constants';
import { getTokenByGoogle } from '@/services';
import { createMutation } from '@tanstack/svelte-query';

const useGetTokenByGoogleMutation = () => {
	return createMutation({
		mutationFn: getTokenByGoogle,
		onSuccess: (data) => {
			localStorage.setItem(TOKEN.ACCESS_TOKEN, data.accessToken);
			localStorage.setItem(TOKEN.REFRESH_TOKEN, data.refreshToken);
			goto(ROUTER.HOME);
		}
	});
};

export default useGetTokenByGoogleMutation;
