import { axiosInstance } from '@/apis';

const postNotice = async (postData: { title: string; content: string }) => {
	const { data } = await axiosInstance.post('/notice', postData);
	return data;
};

export default postNotice;
