import Vue from "vue";
import Vuex from "vuex";

const axios = require("axios");
axios.defaults.baseURL = "http://localhost:2814/api/v1";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    responseData: [],
    tornadoes: [],
  },
  getters: {
    getTornadoes: (state) => state.tornadoes,
  },
  mutations: {
    setTornadoes(state, payload) {
      state.tornadoes = payload;
      console.log(payload);
    },
    setResponseData(state, payload) {
      state.responseData = payload;
    },
    parseData(state) {
      state.tornadoes = JSON.parse(state.responseData);
    },
    fixCoordinates(state) {
      console.log("fix called");
      state.tornadoes.forEach((tornado, i) => {
        console.log("Test");
        tornado.geometry = JSON.parse(state.responseData[i].geometry);
        tornado.geometry.coordinates.forEach((c) => c.reverse());
      });
    },
  },
  actions: {
    fetchTornadoesByRange({ commit }, req) {
      console.log(req);
      var q = "?ys=" + req.ys + "&ye=" + req.ye + "&mag=";
      req.mag.forEach((m) => {
        q += m + ",";
      });
      q = q.slice(0, -1);
      q += "&st=" + req.st;
      axios.get("/tornadoesByRange" + q).then((response) => {
        commit("setTornadoes", response.data);
      });
    },
    fetchTornadoesByDate({ commit }, req) {
      console.log(req);
      var q =
        "?month=" +
        req.month +
        "&day=" +
        req.day +
        "&year=" +
        req.year +
        "&st=" +
        req.st +
        "&mag=";
      req.mag.forEach((m) => {
        q += m + ",";
      });
      q = q.slice(0, -1);
      axios.get("/tornadoesByDate" + q).then((response) => {
        commit("setTornadoes", response.data);
      });
    },
  },
  modules: {},
});
