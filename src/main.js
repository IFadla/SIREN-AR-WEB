import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faCloudArrowDown, faBook, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faHouse, faCloudArrowDown, faBook, faChevronLeft);

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
