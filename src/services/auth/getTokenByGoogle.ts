import { axiosInstance } from '@/apis';

const getTokenByGoogle = async (code: string) => {
	const { data } = await axiosInstance.post(`/login/google?code=${code}`);
	return data;
};

export default getTokenByGoogle;
