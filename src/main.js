import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import configOptions from "./config";
import * as firebase from "firebase";
import axios from "axios";

Vue.config.productionTip = false;

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

axios
  .get("https://api.exchangeratesapi.io/latest")
  .then(response => {
    let i = 1;
    const quotationsArray = [];
    for (let element in response.data.rates) {
      let item = {
        number: i,
        name: element,
        value: response.data.rates[element]
      };
      i++;
      quotationsArray.push(item);
    }
    store.dispatch("fetchData", quotationsArray);
  });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
