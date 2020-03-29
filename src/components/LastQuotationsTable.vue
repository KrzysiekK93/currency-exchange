<template>
  <div class="quotationsTable">
    <div class="content">
      <h1>Current quotations</h1>
      <h3>Date: {{ date }}</h3>
      <h3>Base currency: {{ baseCurrency }}</h3>
    </div>
    <div class="text-center" v-if="this.loader === true">
        <b-spinner variant="success" label="Spinning"></b-spinner>
    </div>
    <b-table  v-if="this.loader === false" sticky-header striped hover :items="quotationsArray"></b-table>
  </div>
</template>

<script>
export default {
  name: "quotationsTable",
  props: {
    quotationsArray: Array,
    date: String,
    baseCurrency: String,
    loader: Boolean
  },
};
</script>

<style lang="scss">
.content {
  margin-bottom: 24px;
}
</style>
