<template>
  <div>
    <img :src="images[this.$store.state.indexUrl].src.large" alt="" />
    <h3 class="name">{{ images[this.$store.state.indexUrl].photographer }}</h3>
    <!-- <h3 class="url">
      {{ images[this.$store.state.indexUrl].photographer_url }}
    </h3> -->
    <a
      class="url"
      :href="images[this.$store.state.indexUrl].photographer_url"
      target="_blank"
      >{{ images[this.$store.state.indexUrl].photographer_url }}</a
    >
  </div>
</template>

<script>
import { mapState } from "vuex";
// import Img from "./Img.vue";
export default {
  name: "MainTop",
  props: {
    cover: String,
  },
  components: {
    // Img,
  },
  data() {
    return {
      indexUrl: this.$store.state.indexUrl,
    };
  },
  mounted() {
    this.$store.dispatch("loadImage");
    // this.$store.state.indexUrl = this.indexUrl;
    console.log(this.$store.state.indexUrl);
  },
  computed: mapState(["images"]),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  border-radius: 5px;
  border: 2px solid #ffffff;
  box-shadow: 2px 2px 10px 2px #000000;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
.name {
  color: #000;
  position: absolute;
  top: 20px;
  text-transform: uppercase;
  background-color: #fff;
  padding: 2px 10px;
  border-radius: 10px;
}
.url {
  color: #fff;
  position: absolute;
  bottom: 20px;
  background-color: #e7522c;
  padding: 4px 10px;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 250px;
  }
}
</style>
