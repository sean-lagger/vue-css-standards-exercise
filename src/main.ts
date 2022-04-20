import { createApp } from 'vue';
import App from './app.vue';
import { initPlugins } from './plugins';

const app = createApp(App);

initPlugins(app);

app.mount('#app');
