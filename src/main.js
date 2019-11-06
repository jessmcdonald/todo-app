import Vue from "vue";
import App from "./App.vue";

import {
  MdField,
  MdCheckbox,
  MdList,
  MdButton,
  MdIcon
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default-dark.css";

import draggable from "vuedraggable";

Vue.use(MdField);
Vue.use(MdCheckbox);
Vue.use(MdList);
Vue.use(MdButton);
Vue.use(MdIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
