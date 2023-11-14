import { doTrade } from '@/services';
import { createMutation } from '@tanstack/svelte-query';

const useDoTradeMutation = () => {
	return createMutation({
		mutationFn: doTrade
	});
};

export default useDoTradeMutation;
