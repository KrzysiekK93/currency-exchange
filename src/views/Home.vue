<template>
  <div class="home">
    <LastQuotations />
    <historicalQuotations />
  </div>
</template>

<script>
// @ is an alias to /src
import LastQuotations from "@/components/quotations/last/LastQuotations.vue";
import HistoricalQuotations from "@/components/quotations/historical/HistoricalQuotations.vue";

export default {
  name: "Home",
  components: {
    LastQuotations,
    HistoricalQuotations
  }
};
</script>
