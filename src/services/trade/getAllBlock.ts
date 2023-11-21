import { axiosInstance } from '@/apis';
import type { CoinName } from '@/types';

const getAllBlock = async (coinName: CoinName) => {
	const { data } = await axiosInstance.get(`/trade/${coinName}`);
	return data;
};

export default getAllBlock;
