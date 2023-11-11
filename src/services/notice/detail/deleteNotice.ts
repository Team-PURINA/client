import { axiosInstance } from '@/apis';

const deleteNotice = async (id: string) => {
	const { data } = await axiosInstance.delete(`/notice/${id}`);
	return data;
};

export default deleteNotice;
