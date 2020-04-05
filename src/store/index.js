import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { fcsapiKey } from "../config";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    },
    historicalQuotationsData: {
      USD: [],
      CHF: [],
      GBP: []
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    historicalQuotationsData(state) {
      return state.historicalQuotationsData;
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    SET_HISTORICAL_QUOTATIONS(state, { key, data }) {
      state.historicalQuotationsData[key] = data;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    },
    setHistoricalQuotations({ commit }, value) {
      axios
        .get(
          `https://fcsapi.com/api-v2/forex/history?symbol=${value}/EUR&period=1w&from=2015-01-01&&access_key=${fcsapiKey}`
        )
        .then(response => {
          if (response.data.response) {
            commit("SET_HISTORICAL_QUOTATIONS", {
              key: value,
              data: response.data.response
            });
          } else {
            commit("SET_HISTORICAL_QUOTATIONS", { key: value, data: [] });
          }
        })
        .catch(() => {
          commit("SET_HISTORICAL_QUOTATIONS", { key: value, data: [] });
        });
    }
  },
  modules: {}
});
