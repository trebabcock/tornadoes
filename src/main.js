import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import {
  LMap,
  LTileLayer,
  LMarker,
  LPolyline,
  LGeoJson,
  LPopup,
  LControlAttribution,
} from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

Vue.config.productionTip = false;
Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);
Vue.component("l-polyline", LPolyline);
Vue.component("l-geo-json", LGeoJson);
Vue.component("l-popup", LPopup);
Vue.component("l-control-attribution", LControlAttribution);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
