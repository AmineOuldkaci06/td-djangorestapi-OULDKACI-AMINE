import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Assurez-vous d'importer correctement le routeur

const app = createApp(App);
app.use(router); // Assurez-vous que le routeur est utilisé par l'application Vue

app.mount('#app');
