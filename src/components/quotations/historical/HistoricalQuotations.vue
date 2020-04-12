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
        @change="getRates($event)"
      >
        <template v-slot:first>
          <b-form-select-option :value="null" disabled
            >-- Please select an option --</b-form-select-option
          >
        </template>
      </b-form-select>
    </div>
    <div class="charsWrapper">
      <Char v-if="results.length > 0" :results="results" />
      <div class="defaultChart" v-if="this.selected === null">
        Please select value
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import Char from "./Chart";

export default {
  name: "historicalQuotations",
  components: {
    Char
  },
  data: function() {
    return {
      selected: null,
      selectOptions: [
        { value: "usd", text: "USD/PLN" },
        { value: "chf", text: "CHF/PLN" },
        { value: "gbp", text: "GBP/PLN" },
        { value: "eur", text: "EUR/PLN" }
      ],
      results: [],
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
  methods: {
    getRates(value) {
      const year = new Date().getFullYear();
      const month = new Date().getMonth() + 1;
      const day = new Date().getDate();
      let currentDate, pastDate;
      if (month < 10 && day < 10) {
        currentDate = `${year}-0${month}-0${day}`;
        pastDate = `${year - 1}-0${month}-0${day}`;
      } else if (month > 9 && day < 10) {
        currentDate = `${year}-${month}-0${day}`;
        pastDate = `${year - 1}-${month}-0${day}`;
      } else if (month < 10 && day > 9) {
        currentDate = `${year}-0${month}-${day}`;
        pastDate = `${year - 1}-0${month}-${day}`;
      } else {
        currentDate = `${year}-${month}-${day}`;
        pastDate = `${year - 1}-${month}-${day}`;
      }
      axios
        .get(
          `http://api.nbp.pl/api/exchangerates/rates/a/${value}/${pastDate}/${currentDate}/`
        )
        .then(response => {
          this.results = response.data.rates;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      historicalQuotationsData: "historicalQuotationsData"
    }),
    processData() {
      debugger;
      let rates = this.results;
      let newOptions = this.options;

      if (rates.length > 0) {
        rates.map(item => {
          newOptions.xaxis.categories = [
            ...newOptions.xaxis.categories,
            item.effectiveDate
          ];
          newOptions.series.data = [...newOptions.series.data, item.mid];
        });
      }
      return newOptions;
    }
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

.defaultChart {
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
