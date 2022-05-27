import { createApp } from "vue";
import App from "./App.vue"; 
import router from "./router";
import './css/reset.css';
import './css/common.scss';
createApp(App).use(router).mount("#app");