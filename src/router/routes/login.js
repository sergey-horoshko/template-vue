const login = [
	{
		path: '/auth',
		name: 'auth',
		component: () => import('@/views/login/AuthView.vue'),
		meta: {
			redirectIsLoggedIn: true,
		},
	},
	{
		path: '/registration',
		name: 'registration',
		component: () => import('@/views/login/RegistrationView.vue'),
		meta: {
			redirectIsLoggedIn: true,
		},
	},
];

export default login;
