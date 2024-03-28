import request from '@/utils/request';

export function getProfile(id) {
	return request({
		url: `/users/${id}`,
		method: 'get',
	});
}

export function logOut() {
	return request({
		url: '/logout',
		method: 'post',
	});
}
