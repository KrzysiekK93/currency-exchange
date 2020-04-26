<style scoped>
.exchangeInfo {
  padding-top: 20px;
}
</style>

<template>
  <div id="calc">
    <form id="exForm" onsubmit="return false" class="centered">
      <div class="row justify-content-center">
        <div class="form-group col-md-6">
          <label for="inputEUR">EUR to be exchanged</label>
          <input
            type="number"
            step="0.01"
            class="form-control"
            id="inputEUR"
            name="amount"
            v-model="form.amount"
            @blur="calculateProp()"
          />
        </div>
        <div class="form-group col-md-4">
          <label for="inputTarget">Target</label>
          <select
            class="form-control"
            id="inputTarget"
            name="target"
            v-model="form.target"
            @blur="calculateProp()"
          >
            <option selected>...</option>
            <option
              v-for="rate in rates"
              :key="rate.number"
              :value="rate.name"
              >{{ rate.name }}</option
            >
          </select>
        </div>
      </div>
      <button @click="exchange()" class="btn btn-primary">Exchange</button>
    </form>
    <div class="exchangeInfo">
      <div class="row justify-content-center">
        <div class="mx-auto">
          <div
            id="exInfo"
            class="alert alert-primary"
            role="alert"
            style="display:none"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import store from "../store";
import firebase from "firebase";

export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      rates: "rates",
      wallet: "wallet",
      user: "user"
    })
  },
  data() {
    return {
      form: {
        amount: "",
        target: "..."
      }
    };
  },
  methods: {
    exchange() {
      let target = this.form.target;
      let amount = parseFloat(this.form.amount);

      if (!this.ValidateInput(amount, target, true)) {
        return;
      }
      this.CalculateAndUpdateCalc(amount, target);
      this.updateBase();
    },
    CalculateAndUpdateCalc(amount, target) {
      let rate = this.rates.find(el => el.name === target).value;
      let targetAmount = (amount * rate).toFixed(2);
      this.wallet["EUR"] = parseFloat((this.wallet["EUR"] - amount).toFixed(2));
      this.wallet[target] = parseFloat(targetAmount);
      store.dispatch("fetchWallet", this.wallet);
      this.UpdateCalc(parseFloat(targetAmount), parseFloat(target));
    },
    UpdateCalc(amount, target) {
      //show successfull exchange info
      let div = document.getElementById("exInfo");
      div.style.display = "block";
      div.innerHTML = `You have ${amount} ${target}`;
    },
    ValidateInput(amount, target, shouldShowAlert) {
      let isValid = true;
      let errorMessage = "";

      if (amount === null || isNaN(amount) || target === "...") {
        if (shouldShowAlert) {
          window.alert("Inapropriate values entered!");
        }
        return false;
      }
      if (amount > this.wallet["EUR"]) {
        isValid = false;
        errorMessage = "Not enough money in the wallet.\n";
      }
      if (amount <= 0) {
        isValid = false;
        errorMessage += "Incorrect value entered.\n";
      }

      if (!isValid && shouldShowAlert) {
        window.alert(errorMessage);
      }
      return isValid;
    },
    calculateProp() {
      let target = this.form.target;
      let amount = parseFloat(this.form.amount);

      if (!this.ValidateInput(amount, target, false)) {
        return;
      }

      let rate = this.rates.find(el => el.name === target).value;
      let proposal = (amount * rate).toFixed(2);

      let div = document.getElementById("exInfo");
      div.style.display = "block";
      div.innerHTML = `You would get ${proposal} ${target}`;
    },
    updateBase() {
      const email = this.user.data.email;
      firebase
        .firestore()
        .collection("users")
        .doc(email)
        .update(this.wallet);
    }
  }
};
</script>
