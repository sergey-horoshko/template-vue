import { createApp } from 'vue';
import dayjs from 'dayjs';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import App from './App.vue';
import router from './router';
import store from './stores';
import 'dayjs/locale/ru';
import localePrimeVue from '@/utils/localePrimeVue';

// global css
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/aura-light-blue/theme.css';
import './styles/index.scss';

// global components
import globalComponents from './components/globalComponents';

export const app = createApp(App);

dayjs.locale('ru');

globalComponents.forEach((c) => {
	app.component(c.name, c);
});

app
	.provide('dayjs', dayjs)
	.use(PrimeVue, {
		locale: localePrimeVue,
		ripple: true,
	})
	.use(ToastService)
	.use(router)
	.use(store)
	.mount('#app');
