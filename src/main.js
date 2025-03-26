// main.js or main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Your router configuration

const app = createApp(App);
app.use(router); // Important: Use the router instance
app.mount('#app');