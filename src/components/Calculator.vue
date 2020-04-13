<template>
<div id="calc">
  <form onsubmit="return false">
    <div class="row">
      <div class="form-group col-md-6">
        <label for="inputEUR">EUR to be exchanged</label>
        <input type="number" class="form-control" id="inputEUR" name="amount" v-model="form.amount">
      </div>
      <div class="form-group col-md-4">
        <label for="inputTarget">Target</label>
        <select class="form-control" id="inputTarget" name="target" v-model="form.target">
          <option selected>...</option>
          <option v-for="rate in rates" :key="rate.number" :value="rate.name" >{{rate.name}}</option>
        </select>
      </div>
    </div>
    <button @click="exchange()" class="btn btn-primary">Exchange</button>
  </form>
</div>

</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      rates: "rates",
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
    exchange(){
      var target = this.form.target;
      var amount = this.form.amount;
      var rate = this.rates.find(el => el.name === target).value;
      var targetAmount = amount * rate;
      this.createDiv(targetAmount, target);
    },
    createDiv(amount, target) {
      var div = document.createElement('div');
      div.innerHTML = `You have ${amount} ${target}`;
      document.getElementById('calc').appendChild(div);
    }
  }
};
</script>