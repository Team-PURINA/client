import { axiosInstance } from '@/apis';

const getNotice = async (id: string) => {
	const { data } = await axiosInstance.get(`/notice/${id}`);
	return data;
};

export default getNotice;
