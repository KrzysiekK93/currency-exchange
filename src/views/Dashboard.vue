<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Dashboard</div>
          <div class="card-body">
            <div v-if="user" class="alert alert-success" role="alert">
              You are logged in! <br />
              You have {{ wallet }} EUR in your wallet.
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
  }
};
</script>
