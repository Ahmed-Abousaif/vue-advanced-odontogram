import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

const rootEl = document.getElementById("app");
if (rootEl) {
  createApp(App, { enableNotes: true }).mount(rootEl);
}
