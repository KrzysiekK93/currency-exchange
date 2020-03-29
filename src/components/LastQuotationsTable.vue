<template>
  <div class="quotationsTable">
    <div class="content">
      <h1>Current quotations</h1>
      <h3>Date: {{ this.quotations.date }}</h3>
      <h3>Base currency: {{ this.quotations.base }}</h3>
    </div>
    <div class="text-center" v-if="this.loader === true">
        <b-spinner variant="success" label="Spinning"></b-spinner>
    </div>
    <b-table  v-if="this.loader === false" sticky-header striped hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: "quotationsTable",
  props: {
    msg: String,
    quotations: Object,
    loader: Boolean
  },
  data() {
    return {
      items: []
    };
  },
  mounted() {
    let i = 1;
    for (let element in this.quotations.rates) {
      let item = {
        number: i,
        name: element,
        value: this.quotations.rates[element]
      };
      i++;
      this.items.push(item);
    }
  }
};
</script>

<style lang="scss">
.content {
  margin-bottom: 24px;
}
</style>
