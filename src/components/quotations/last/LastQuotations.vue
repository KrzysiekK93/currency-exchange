<template>
  <div class="quotations">
    <LastQuotationsTable
      v-bind:quotationsArray="quotationsArray"
      v-bind:date="date"
      v-bind:baseCurrency="baseCurrency"
    />
  </div>
</template>

<script>
import LastQuotationsTable from "./LastQuotationsTable.vue";
import store from "../../../store";

export default {
  name: "quotations",
  components: {
    LastQuotationsTable
  },
  computed: {
    quotationsArray: function(){
    return store.getters.rates;
    },
    date: function() {
      return new Date().toISOString().slice(0, 10);
    },
    baseCurrency: function() {
      return "EUR";
    }
  }
};
</script>
