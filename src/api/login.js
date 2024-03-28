import request from '@/utils/request';

export function AuthRequest(data) {
	return request({
		url: '/auth/login',
		method: 'post',
		data,
	});
}

// export function signUp(data) {
//   return request({
//     url: '/user/register',
//     method: 'post',
//     data,
//   });
// }
