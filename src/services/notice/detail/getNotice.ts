import { axiosInstance } from '@/apis';
import TOKEN from '@/constants/storage.constant';

const getNotice = async (id: string) => {
	const accessToken = localStorage.getItem(TOKEN.ACCESS_TOKEN);
	const { data } = await axiosInstance.get(`/notice/${id}`, {
		headers: {
			Authorization: accessToken
		}
	});

	return data;
};

export default getNotice;
