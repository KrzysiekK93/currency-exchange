<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.add-money variant="success"
          >Add money</b-button
        >
      </b-card-header>
      <b-collapse id="add-money" visible accordion="money" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <div v-if="error" class="alert alert-danger">{{ error }}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label
                  for="amount"
                  class="col-md-3 col-form-label text-md-right"
                  >Amount <span>(in Euro)</span></label
                >
                <div class="col-md-6 mb-2">
                  <input
                    id="amount"
                    type="number"
                    class="form-control"
                    name="amount"
                    value
                    required
                    autofocus
                    v-model="form.amount"
                  />
                </div>
                <div class="col-md-3 text-md-left">
                  <button type="submit" class="btn btn-primary">Add</button>
                </div>
              </div>
            </form>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";

export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user",
      wallet: "wallet"
    })
  },
  data() {
    return {
      form: {
        amount: 0
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .firestore()
        .collection("users")
        .doc(this.user.data.email)
        .update({
          EUR: parseFloat(this.wallet) + parseFloat(this.form.amount)
        });
    }
  }
};
</script>
<style scoped>
.col-form-label span {
  font-size: 14px;
  color: #dadada;
}
</style>
