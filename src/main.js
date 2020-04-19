import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import configOptions from "./config";
import * as firebase from "firebase";

Vue.config.productionTip = false;

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
