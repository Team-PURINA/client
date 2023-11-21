import { doTrade } from '@/services';
import { createMutation } from '@tanstack/svelte-query';

const useDoTradeMutation = () => {
	return createMutation({
		mutationFn: doTrade,
		onSuccess: (data) => {
			console.log(data);
		}
	});
};

export default useDoTradeMutation;
