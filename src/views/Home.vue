<template>
  <div class="home">
    <LastQuotations />
  </div>
</template>

<script>
// @ is an alias to /src
import LastQuotations from "@/components/LastQuotations.vue";

export default {
  name: "Home",
  components: {
    LastQuotations
  }
};
</script>
