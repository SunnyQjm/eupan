import axios from 'axios';
import {
    url as ROUTE
} from './API';


export async function getForumFiles(data) {
	let url = ROUTE.forumFiles + `?page=${data.page}&size=${data.size}&time=${data.time}&hot=${data.hot}`;
	return axios.get(url)
		.then(function (data) {
			return data;
		})
		.catch(function (err) {
			console.log(err);
		});
}


export async function getFileDetail(identifyCode) {
	return await axios.get(ROUTE.getFileDetail, {
		params: {
			identifycode: identifyCode
		}
	})
		.then(function (response) {
			return response.data.data;
		})
		.catch(function () {

		});
}

export async function getComments(fileId, page, size) {
	return await axios.get(ROUTE.getComments, {
		params: {
			fileId: fileId,
			page: page,
			size: size
		}
	}).then(function (response) {
		return response.data.data;
	})
		.catch(function () {

		});
}

export async function getFollowUserShareFiles(requestData) {
	return await axios.get(ROUTE.getFollowUserShareFiles, {
		params: {
			page: requestData.page,
			size: requestData.size
		}
	}).then(function (response) {
		return response.data;
	}).catch(function () {

	});
}