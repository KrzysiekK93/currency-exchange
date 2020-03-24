import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import * as firebase from "firebase";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyBtbcpvBdM5K-rseBZyi4QQd6FogmvUUaY",
  authDomain: "currency-exchange-31bf5.firebaseapp.com",
  databaseURL: "https://currency-exchange-31bf5.firebaseio.com",
  projectId: "currency-exchange-31bf5",
  storageBucket: "currency-exchange-31bf5.appspot.com",
  messagingSenderId: "101210870332",
  appId: "1:101210870332:web:2e427fe503f5887c922939",
  measurementId: "G-41P6KFLFLZ"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
