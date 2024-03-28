import { acceptHMRUpdate, defineStore } from 'pinia';
import { getProfile, logOut } from '@/api/me';
import { setToken, removeToken } from '@/utils/auth';

export const useMeStore = defineStore('me', {
	state: () => ({
		user: null,
	}),

	actions: {
		setUser(user) {
			this.user = user;
		},

		setToken(token) {
			setToken(token);
		},

		removeToken() {
			removeToken();
		},

		async getProfile(id) {
			const data = await getProfile(id);

			if (data) {
				this.setUser(data);
			}
		},

		async logOut(local) {
			if (!local) {
				const spinner = document.getElementById('spinner');

				spinner?.classList.remove('-hide');

				await logOut();

				spinner?.classList.add('-hide');
			}

			this.setUser(null);

			this.removeToken();

			this.$reset();

			window.location.reload();
		},
	},

	persist: true,
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useMeStore, import.meta.hot));
}
