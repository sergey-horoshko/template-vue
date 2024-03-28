import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const index = createPinia();

index.use(piniaPluginPersistedstate);

export default index;
