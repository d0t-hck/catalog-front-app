import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App);

app.directive("inline", (element) => {
    element.replaceWith(...element.children);
});

app.use(router);

app.mount('#app');
