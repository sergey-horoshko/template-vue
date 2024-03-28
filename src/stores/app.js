import { defineStore, acceptHMRUpdate } from 'pinia';

export const useAppStore = defineStore('app', {
	state: () => (
		{
			mobileNav: false,
		}
	),

	actions: {
		showMobileNav(value) {
			this.mobileNav = value;
		},
	},
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot));
}

export default useAppStore;
