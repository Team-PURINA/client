import { axiosInstance } from '@/apis';
import TOKEN from '@/constants/storage.constant';

const getNoticeList = async () => {
	const accessToken = localStorage.getItem(TOKEN.ACCESS_TOKEN);
	const { data } = await axiosInstance.get('/notice', {
		headers: {
			Authorization: accessToken
		}
	});

	return data;
};

export default getNoticeList;
