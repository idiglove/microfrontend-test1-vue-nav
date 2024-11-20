import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// @ts-ignore
window.renderVueNav = (containerId, history) => {
  createApp(App).mount(containerId);
};
