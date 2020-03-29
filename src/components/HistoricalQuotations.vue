<template>
  <div class="historicalQuotations">
    <h2>Historical data</h2>
    <div class="form-group">
        <label for="currency">Pick currency</label>
        <select class="form-control" id="currency">
            <option>USD</option>
            <option>EUR</option>
        </select>
    </div>
   <div class="charsWrapper">
     <VueApexCharts type="line" :options="chartOptions" :series="series"></VueApexCharts>
   </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

export default {
  name: "historicalQuotations",
  components: {
     VueApexCharts
  },
  data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }]
      }
    },
};
</script>

<style lang="scss">
h2 {
  margin: 48px 0;
}

.form-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
        margin-bottom: 24px;
    }
    .form-control {
        max-width: 300px;
        width: 100%;
        margin-bottom: 24px;
    }
}
</style>

