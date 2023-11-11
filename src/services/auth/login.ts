import { axiosInstance } from '@/apis';

export const getTokenByGoogle = async (code: string) => {
	const { data } = await axiosInstance.post(`/login/google?code=${code}`);

	return data;
};
