import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.prototype.$http = axios;
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
    indexUrl: 0,
    search: "coding",
  },
  getters: {
    images: (state) => {
      return state.images;
    },
  },
  mutations: {
    SET_Image(state, images) {
      state.images = images;
    },
  },
  actions: {
    loadImage({ commit, state }) {
      axios
        .get(
          `https://api.pexels.com/v1/search?query=${state.search}&per_page=3`,
          {
            headers: {
              Authorization: `563492ad6f917000010000017f488949f5c24f7cb9fc4ad4069c1050`,
              // 563492ad6f917000010000017a14ac3aa5be4c18ac6da114ee8976ca
              // 563492ad6f917000010000017f488949f5c24f7cb9fc4ad4069c1050
            },
          }
        )
        .then((response) => response.data.photos)
        .then((images) => {
          console.log(images);
          commit("SET_Image", images);
        });
    },
  },
  modules: {},
});
