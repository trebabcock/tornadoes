<template>
  <div class="h-screen flex">
    <!-- Navbar -->
    <div
      class="
        w-64
        py-2
        px-6
        flex flex-col
        max-h-screen
        dark:bg-menu-bg-dark
        no-scrollbar
        overflow-y-auto
        antialiased
      "
    >
      <div class="flex-shrink-0 px-2 text-green-300 py-4 text-center">
        <router-link
          to="/"
          class="
            text-2xl text-green-500
            font-bold
            tracking-widest
            uppercase
            rounded-lg
          "
        >
          Tornadoes
        </router-link>
      </div>
      <div class="flex flex-row mt-3">
        <label class="inline-flex items-center mr-auto">
          <input
            type="checkbox"
            class="
              form-checkbox
              rounded
              h-5
              w-5
              text-blue-400
              focus:ring-0
              active:ring-0
            "
            id="f0"
            checked
          /><span class="ml-2 text-gray-700">F0/EF0</span>
        </label>
        <label class="inline-flex items-center ml-auto">
          <input
            type="checkbox"
            class="
              form-checkbox
              rounded
              h-5
              w-5
              text-green-400
              focus:ring-0
              active:ring-0
            "
            id="f1"
            checked
          /><span class="ml-2 text-gray-700">F1/EF1</span>
        </label>
      </div>
      <div class="flex flex-row mt-3">
        <label class="inline-flex items-center mr-auto">
          <input
            type="checkbox"
            class="
              form-checkbox
              rounded
              h-5
              w-5
              text-yellow-300
              focus:ring-0
              active:ring-0
            "
            id="f2"
            checked
          /><span class="ml-2 text-gray-700">F2/EF2</span>
        </label>
        <label class="inline-flex items-center ml-auto">
          <input
            type="checkbox"
            class="
              form-checkbox
              rounded
              h-5
              w-5
              text-yellow-600
              focus:ring-0
              active:ring-0
            "
            id="f3"
            checked
          /><span class="ml-2 text-gray-700">F3/EF3</span>
        </label>
      </div>
      <div class="flex flex-row mt-3">
        <label class="inline-flex items-center mr-auto">
          <input
            type="checkbox"
            class="
              form-checkbox
              rounded
              h-5
              w-5
              text-red-600
              focus:ring-0
              active:ring-0
            "
            id="f4"
            checked
          /><span class="ml-2 text-gray-700">F4/EF4</span>
        </label>
        <label class="inline-flex items-center ml-auto">
          <input
            type="checkbox"
            class="
              form-checkbox
              rounded
              h-5
              w-5
              text-black
              focus:ring-0
              active:ring-0
            "
            id="f5"
            checked
          /><span class="ml-2 text-gray-700">F5/EF5</span>
        </label>
      </div>
      <div class="flex flex-col mt-6 mb-4 w-full">
        <label class="inline-flex items-center mb-2">
          <input
            type="radio"
            class="form-radio h-5 w-5 text-green-600 focus:ring-0 active:ring-0"
            id="range"
            value="range"
            v-model="dateOption"
          /><span class="ml-2 text-gray-700">Range</span>
        </label>
        <div v-if="dateOption == 'range'" class="flex flex-row">
          <div class="flex flex-col mr-auto">
            <p class="mb-1">Year Start</p>
            <select
              id="ys"
              class="
                px-4
                py-1
                w-24
                rounded-lg
                ring-0
                outline-none
                focus:outline-none
                active:outline-none
                focus:ring-0 focus:ring-green-500
              "
              v-model="ysdefault"
            >
              <option v-for="y in 70" :key="y" :value="y + 1949">
                {{ y + 1949 }}
              </option>
            </select>
          </div>
          <div class="flex flex-col ml-auto">
            <p class="mb-1">Year End</p>
            <select
              id="ye"
              class="
                px-4
                py-1
                w-24
                rounded-lg
                ring-0
                outline-none
                focus:outline-none
                active:outline-none
                focus:ring-0 focus:ring-green-500
              "
              v-model="yedefault"
            >
              <option v-for="y in 70" :key="y" :value="y + 1949">
                {{ y + 1949 }}
              </option>
            </select>
          </div>
        </div>
        <div v-else class="flex flex-row">
          <div class="flex flex-col mr-auto">
            <p class="mb-1 text-gray-400">Year Start</p>
            <select
              id="ys"
              class="px-4 py-1 w-24 rounded-lg text-gray-400 border-gray-400"
              v-model="ysdefault"
              disabled
            >
              <option v-for="y in 70" :key="y" :value="y + 1949">
                {{ y + 1949 }}
              </option>
            </select>
          </div>
          <div class="flex flex-col ml-auto">
            <p class="mb-1 text-gray-400">Year End</p>
            <select
              id="ye"
              class="px-4 py-1 w-24 rounded-lg text-gray-400 border-gray-400"
              v-model="yedefault"
              disabled
            >
              <option v-for="y in 70" :key="y" :value="y + 1949">
                {{ y + 1949 }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="flex flex-col mb-4 w-full">
        <label class="inline-flex items-center mb-2">
          <input
            type="radio"
            class="form-radio h-5 w-5 text-green-600 focus:ring-0 active:ring-0"
            id="date"
            value="date"
            v-model="dateOption"
          /><span class="ml-2 text-gray-700">Date</span>
        </label>
        <div v-if="dateOption == 'date'" class="flex flex-col">
          <div class="flex flex-row">
            <div class="flex flex-col mr-auto">
              <p class="mb-1">Month</p>
              <select
                id="month"
                class="
                  px-2
                  py-1
                  w-24
                  rounded-lg
                  ring-0
                  outline-none
                  focus:outline-none
                  active:outline-none
                  focus:ring-0 focus:ring-green-500
                "
                v-model="monthDefault"
              >
                <option v-for="m in monthArr" :key="m" :value="m">
                  {{ m }}
                </option>
              </select>
            </div>
            <div class="flex flex-col ml-auto">
              <p class="mb-1">Day</p>
              <select
                id="day"
                class="
                  px-2
                  py-1
                  w-24
                  rounded-lg
                  ring-0
                  outline-none
                  focus:outline-none
                  active:outline-none
                  focus:ring-0 focus:ring-green-500
                "
                v-model="dayDefault"
              >
                <option v-for="d in monthMap[monthDefault]" :key="d" :value="d">
                  {{ d }}
                </option>
              </select>
            </div>
          </div>
          <div class="flex flex-col">
            <p class="mb-1">Year</p>
            <select
              id="year"
              class="
                px-2
                py-1
                w-full
                rounded-lg
                ring-0
                outline-none
                focus:outline-none
                active:outline-none
                focus:ring-0 focus:ring-green-500
              "
              v-model="yearDefault"
            >
              <option v-for="y in 70" :key="y" :value="y + 1949">
                {{ y + 1949 }}
              </option>
            </select>
          </div>
        </div>
        <div v-else class="flex flex-col">
          <div class="flex flex-row">
            <div class="flex flex-col mr-auto">
              <p class="mb-1 text-gray-400">Month</p>
              <select
                id="ys"
                class="px-2 py-1 w-24 rounded-lg text-gray-400 border-gray-400"
                v-model="monthDefault"
              >
                <option v-for="m in monthArr" :key="m" :value="m">
                  {{ m }}
                </option>
              </select>
            </div>
            <div class="flex flex-col ml-auto">
              <p class="mb-1 text-gray-400">Day</p>
              <select
                id="ye"
                class="px-2 py-1 w-24 rounded-lg text-gray-400 border-gray-400"
                v-model="dayDefault"
              >
                <option v-for="d in monthMap[monthDefault]" :key="d" :value="d">
                  {{ d }}
                </option>
              </select>
            </div>
          </div>
          <div class="flex flex-col">
            <p class="mb-1 text-gray-400">Year</p>
            <select
              id="ye"
              class="px-2 py-1 w-full rounded-lg text-gray-400 border-gray-400"
              v-model="yearDefault"
            >
              <option v-for="y in 70" :key="y" :value="y + 1949">
                {{ y + 1949 }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <p class="mb-1">State</p>
        <select
          id="st"
          class="
            px-4
            py-1
            w-full
            rounded-lg
            ring-0
            outline-none
            focus:outline-none
            active:outline-none
            focus:ring-0 focus:ring-green-500
          "
        >
          <option value="ALL" selected>All</option>
          <option v-for="s in 50" :key="s - 1" :value="abbr[s - 1]">
            {{ states[s - 1] }}
          </option>
        </select>
      </div>
      <div v-if="validform" class="w-full mt-4">
        <input
          id="go"
          type="button"
          class="
            rounded-lg
            px-4
            py-1
            w-full
            bg-green-500
            text-white
            hover:bg-green-400
            cursor-pointer
          "
          value="Go"
          v-on:click="fetchTornadoes"
        />
      </div>
      <div v-else class="w-full mt-4">
        <input
          id="go"
          type="button"
          class="
            rounded-lg
            px-4
            py-1
            w-full
            bg-red-500
            text-white
            cursor-not-allowed
          "
          value="Go"
        />
      </div>
      <div class="text-center mt-2">
        <p>{{ tornadoes.length }} Tornadoes</p>
      </div>
      <div class="mt-auto px-4">
        <a
          href="http://www.spc.noaa.gov/gis/svrgis"
          class="
            text-green-600 text-sm
            italic
            hover:text-green-500 hover:underline
          "
        >
          Tornado data from the National Weather Service Storm Prediction Center
        </a>
      </div>
    </div>
    <!-- Map -->
    <div class="flex-1 flex overflow-hidden">
      <div class="antialiased flex-1 overflow-y-auto">
        <div class="w-full h-screen bg-gray-800">
          <l-map class="w-96 h-96" :zoom="zoom" :center="center">
            <l-tile-layer :url="url"></l-tile-layer>
            <div v-for="tornado in tornadoes" :key="tornado.id">
              <l-polyline
                :lat-lngs="getCoords(tornado.geometry)"
                :color="colors[tornado.mag]"
                weight="5"
              >
                <l-popup>
                  {{ getDate(tornado.date) }}<br />
                  Injuries: {{ tornado.inj }}<br />Fatalities:
                  {{ tornado.fat }}</l-popup
                >
              </l-polyline>
            </div>
            <l-control-attribution
              position="bottomleft"
              prefix="Data from NOAA"
            ></l-control-attribution>
          </l-map>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import moment from "moment";
export default {
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 5,
      center: [39.8283, -98.5795],
      polyline: {
        latlngs: [
          [35.485, -98.096],
          [35.501999999999995, -97.848],
        ],
        color: "red",
      },
      colors: {
        5: "black",
        4: "red",
        3: "orange",
        2: "yellow",
        1: "green",
        0: "blue",
      },
      ysdefault: 1999,
      yedefault: 2019,
      yearDefault: 2011,
      monthDefault: "Apr",
      dayDefault: 27,
      states: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
      abbr: [
        "AL",
        "AK",
        "AZ",
        "AR",
        "CA",
        "CO",
        "CT",
        "DE",
        "FL",
        "GA",
        "HI",
        "ID",
        "IL",
        "IN",
        "IA",
        "KS",
        "KY",
        "LA",
        "ME",
        "MD",
        "MA",
        "MI",
        "MN",
        "MS",
        "MO",
        "MT",
        "NE",
        "NV",
        "NH",
        "NJ",
        "NM",
        "NY",
        "NC",
        "ND",
        "OH",
        "OK",
        "OR",
        "PA",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VT",
        "VA",
        "WA",
        "WV",
        "WI",
        "WY",
      ],
      validform: true,
      dateOption: "date",
      monthArr: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      monthNumberMap: {
        Jan: 1,
        Feb: 2,
        Mar: 3,
        Apr: 4,
        May: 5,
        Jun: 6,
        Jul: 7,
        Aug: 8,
        Sep: 9,
        Oct: 10,
        Nov: 11,
        Dec: 12,
      },
      monthMap: {
        Jan: 31,
        Feb: 28,
        Mar: 31,
        Apr: 30,
        May: 31,
        Jun: 30,
        Jul: 31,
        Aug: 31,
        Sep: 30,
        Oct: 31,
        Nov: 30,
        Dec: 31,
      },
    };
  },
  methods: {
    clickHandler() {
      window.alert("and mischievous");
    },
    getCoords(geometry) {
      var temp = JSON.parse(geometry);
      var temp2 = temp.coordinates;
      temp2.forEach((c) => (c = c.reverse()));
      return temp2;
    },
    getDate(date) {
      var parsedDate = moment(date);
      return parsedDate.format("MMMM Do, YYYY");
    },
    fetchTornadoes() {
      let f0 = document.getElementById("f0");
      let f1 = document.getElementById("f1");
      let f2 = document.getElementById("f2");
      let f3 = document.getElementById("f3");
      let f4 = document.getElementById("f4");
      let f5 = document.getElementById("f5");

      var mags = [];
      if (f0.checked) {
        mags.push(0);
      }
      if (f1.checked) {
        mags.push(1);
      }
      if (f2.checked) {
        mags.push(2);
      }
      if (f3.checked) {
        mags.push(3);
      }
      if (f4.checked) {
        mags.push(4);
      }
      if (f5.checked) {
        mags.push(5);
      }

      let state = document.getElementById("st").value;

      if (this.dateOption == "range") {
        let ysv = document.getElementById("ys").value;
        let yev = document.getElementById("ye").value;

        let req = {
          ys: parseInt(ysv),
          ye: parseInt(yev),
          mag: mags,
          st: state,
        };
        this.$store.dispatch("fetchTornadoesByRange", req);
      } else if (this.dateOption == "date") {
        let year = document.getElementById("year").value;
        let month = document.getElementById("month").value;
        let day = document.getElementById("day").value;

        let req = {
          year: parseInt(year),
          month: this.monthNumberMap[month],
          day: parseInt(day),
          mag: mags,
          st: state,
        };
        this.$store.dispatch("fetchTornadoesByDate", req);
      }
    },
  },
  computed: {
    tornadoes() {
      return this.$store.getters.getTornadoes;
    },
    formvalid() {
      let ys = document.getElementById("ys").value;
      let ye = document.getElementById("ye").value;
      let f0 = document.getElementById("f0");
      let f1 = document.getElementById("f1");
      let f2 = document.getElementById("f2");
      let f3 = document.getElementById("f3");
      let f4 = document.getElementById("f4");
      let f5 = document.getElementById("f5");
      if (
        parseInt(ys) > parseInt(ye) ||
        (!f0.checked &&
          !f1.checked &&
          !f2.checked &&
          !f3.checked &&
          !f4.checked &&
          !f5.checked)
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
  width: 0px;
}
::-webkit-scrollbar {
  width: 0px;
}
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
