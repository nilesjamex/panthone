import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createMetaManager } from "vue-meta";
// import styles
import "../src/styles/_export.scss";

const metaManager = createMetaManager();

createApp(App).use(metaManager).use(router).mount("#app");
