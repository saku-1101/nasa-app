import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'; // BalmJS Team Material Components
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const BalmUI = require("balm-ui");
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const BalmUIPlus = require("balm-ui/dist/balm-ui-plus");
import "balm-ui/dist/balm-ui.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(BalmUI); // Mandatory
app.use(BalmUIPlus);
app.mount('#app');