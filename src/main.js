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


/*
//dodaje baze dla nowego użytkownika ale wali błędami i nie wyświetla strony 
//trzeba to wrzucić gdzieś koło buttona do tworzenia konta, żeby tworzyło tylko kiedy tworzy się nowe konto
name = "nowy"; // nazwa użytkownika, to powinien być mail, który wczytujemy prz rejerstracji
// Creating datastore for new user
const firestore = firebase.firestore();
// get the data from 'Template'
firestore.collection("users").doc("Template").get().then(function (doc) {
    if (doc && doc.exists) {
        var data = doc.data();
        // saves the data to 'new_user'
        firestore.collection("users").doc(name).set(data);
    }
});*/

/*
//nadpisuje nazwe użytkownika
//to tez przy buttonie, ale pod tworzeniem bazy podmienia "DUPA" z bazy na mail XD
const firestore = firebase.firestore();
name = "nowy"; nazwa użytkownika, to powinien być mail, który wczytujemy prz rejerstracji
// Update Username
firestore.collection("users").doc(name).update({ Username: name});
*/
//niestety muszą być dwa osobne zapytania, w jednym nie chciało działać :/