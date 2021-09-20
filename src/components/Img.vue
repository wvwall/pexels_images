<template>
  <div class="box">
    <div v-for="(imag, index) in images" :key="index">
      <img @click="getId(index)" :src="imag.src.large" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Img",
  props: {},
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("loadImage");
  },
  methods: {
    getId(id) {
      this.$store.state.indexUrl = id;
      // console.log(id);
      // console.log(this.$store.state.indexUrl);
    },
  },
  computed: mapState(["images"]),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box {
  width: 100%;
  display: flex;
  justify-content: space-around;

  img {
    border-radius: 5px;
    max-width: 200px;
    height: 60px;
    cursor: pointer;
    border: 2px solid #ffffff;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0) 0px 10px 13px -7px #000000;
    @media screen and (max-width: 768px) {
      width: 80px;
      height: 50px;
    }
  }
}
</style>
