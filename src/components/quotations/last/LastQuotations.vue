<template>
  <div class="quotations">
    <LastQuotationsTable
      v-bind:quotationsArray="quotationsArray"
      v-bind:date="date"
      v-bind:baseCurrency="baseCurrency"
      v-bind:loader="loader"
    />
  </div>
</template>

<script>
import axios from "axios";
import LastQuotationsTable from "./LastQuotationsTable.vue";

export default {
  name: "quotations",
  components: {
    LastQuotationsTable
  },
  data() {
    return {
      quotationsArray: [],
      date: "",
      baseCurrency: "",
      loader: true
    };
  },
  mounted() {
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
        this.quotationsArray = quotationsArray;
        this.baseCurrency = response.data.base;
        this.date = response.data.date;
      })
      .then(() => (this.loader = false));
  }
};
</script>
