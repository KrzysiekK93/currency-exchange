<template>
  <div class="historicalQuotations">
    <h2>Historical data</h2>
    <div class="form-group custom">
      <label for="currency">Pick currency</label>
      <b-form-select
        v-model="selected"
        :options="selectOptions"
        class="form-control"
        id="currency"
        @change="onChange($event)"
      >
        <template v-slot:first>
          <b-form-select-option :value="null" disabled
            >-- Please select an option --</b-form-select-option
          >
        </template>
      </b-form-select>
    </div>
    <div class="charsWrapper">
      <div id="chart" :class="{ 'hidden' : selected === null}"></div>
      <div class="defaultChart" v-if="this.selected === null">Please select value</div>
    </div>
  </div>
</template>

<script>
import ApexCharts from "apexcharts";
import { mapGetters } from "vuex";
// import store from "../store";

export default {
  name: "historicalQuotations",
  data: function() {
    return {
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
      },
      chart: null,
      selected: null,
      selectOptions: [
        { value: "USD", text: "USD/EUR" },
        { value: "CHF", text: "CHF/EUR" },
        { value: "GBP", text: "GBP/EUR" }
      ]
    };
  },
  methods: {
    onChange(value) {
      const newData = {
        data: [],
        categories: []
      };

    if (this.historicalQuotationsData[value] &&
        this.historicalQuotationsData[value].length === 0) {
            debugger;
        // store.dispatch("setHistoricalQuotations", value);
    }

    if (
        this.historicalQuotationsData[value] &&
        this.historicalQuotationsData[value].length > 0
    ) {
        this.historicalQuotationsData[value].map(item => {
        newData.categories.push(item.tm.split(" ")[0]);
        newData.data.push(item.o);
        });
    }

      this.chart.update();
      this.chart.updateOptions({
        chart: {
          id: "historicalQuotations",
          type: "line"
        },
        xaxis: {
          categories: newData.categories
        },
        series: [
          {
            name: "series-1",
            data: newData.data
          }
        ]
      });
    }
  },

  mounted() {
    this.chart = new ApexCharts(document.querySelector("#chart"), this.options);
    this.chart.render();
  },

  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      historicalQuotationsData: "historicalQuotationsData"
    })
  }
};
</script>

<style lang="scss">
h2 {
  margin: 48px 0;
}

.form-group.custom {
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

.defaultChart{
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;
    color: #dadada;
}

.hidden {
    display: none;
}
</style>
