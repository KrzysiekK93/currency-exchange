<template>
  <div class="quotations">
    <LastQuotationsTable
      v-bind:quotations="quotations.data"
      v-bind:loader="loader"
    />
  </div>
</template>

<script>
import axios from "axios";
import LastQuotationsTable from "@/components/LastQuotationsTable.vue";

export default {
  name: "quotations",
  components: {
    LastQuotationsTable
  },
  data() {
    return {
      quotations: {},
      loader: true
    };
  },
  mounted() {
    axios
      .get("https://api.exchangeratesapi.io/latest")
      .then(response => (this.quotations = response))
      .then(() => (this.loader = false));
  }
};
</script>
