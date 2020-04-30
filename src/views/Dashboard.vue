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
            <div class="rest-currency">
              <h4 v-if="this.hasChildren">Otther currencies in your wallet:</h4>
              <div v-for="(value, name) in wallet" v-bind:key="name">
                <span
                  v-if="
                    value !== user.data.email && value !== 0 && name !== 'EUR'
                  "
                >
                  {{ name }}: <span class="value">{{ value }}</span>
                </span>
              </div>
            </div>
            <div class="calculator">
              <Calculator :btnClickHandler="this.handleHasChildren" />
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
  data() {
    return {
      hasChildren: false,
      currency: []
    };
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
    },
    handleHasChildren() {
      for (const item in this.wallet) {
        if (
          this.wallet[item] !== this.user.data.email &&
          this.wallet[item] == 0 &&
          item !== "EUR"
        ) {
          this.currency.push(item);
        }
      }
      if (this.currency.length === 32 || this.currency.length === 0) {
        this.hasChildren = false;
      } else {
        this.hasChildren = true;
      }
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
    this.handleHasChildren();
  }
};
</script>

<style scoped>
.rest-currency {
  text-align: left;
  margin-bottom: 1rem;
}

.rest-currency div {
  font-size: 1.125rem;
}

.rest-currency .value {
  text-decoration: underline;
  color: #333;
  font-size: 1rem;
  margin-left: 0.5rem;
}
</style>
