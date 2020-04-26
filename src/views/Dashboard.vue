<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Dashboard</div>
          <div class="card-body">
            <div v-if="user" class="alert alert-success" role="alert">
              You are logged in! <br />
              You have {{ wallet["EUR"] }} EUR in your wallet.
            </div>
            <div class="calculator">
              <Calculator />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Calculator from "@/components/Calculator.vue";
import firebase from "firebase";
import store from "../store";

export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user",
      rates: "rates",
      wallet: "wallet"
    })
  },
  name: "calculator",
  components: {
    Calculator
  },
  methods: {
    async getMarker() {
      const snapshot = await firebase
        .firestore()
        .collection("users")
        .get();
      return snapshot.docs.map(doc => doc.data());
    }
  },
  mounted() {
    const email = this.user.data.email;
    this.getMarker().then(data => {
      data.map(item => {
        if (item.Username === email) {
          store.dispatch("fetchWallet", item);
        }
      });
    });
  }
};
</script>
