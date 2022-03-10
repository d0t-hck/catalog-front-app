import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App);

app.directive("inline", (element) => {
    element.replaceWith(...element.children);
});

app.mount('#app');
