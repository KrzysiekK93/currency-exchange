<template>
  <div id="chart"></div>
</template>

<script>
import ApexCharts from "apexcharts";

export default {
  name: "Char",
  props: {
    results: Array,
    isLoading: Boolean
  },
  data: function() {
    return {
      chart: null,
      options: {
        chart: {
          id: "historicalQuotations",
          type: "line"
        },
        xaxis: {
          categories: []
        },
        series: [
          {
            name: "series-1",
            data: []
          }
        ]
      }
    };
  },
  mounted() {
    this.chart = new ApexCharts(
      document.querySelector("#chart"),
      this.updatedData
    );
    this.chart.render();
  },
  watch: {
    results: function() {
      this.options.xaxis.categories = [];
      this.options.series[0].data = [];
      this.results.map(item => {
        this.options.xaxis.categories.push(item.effectiveDate);
        this.options.series[0].data.push(item.mid);
      });

      this.chart.updateOptions(this.options);
      this.chart.update();
    }
  },
  computed: {
    updatedData() {
      this.results.map(item => {
        this.options.xaxis.categories.push(item.effectiveDate);
        this.options.series[0].data.push(item.mid);
      });
      return this.options;
    }
  }
};
</script>

<style lang="scss">
.content {
  margin-bottom: 24px;
}
</style>
