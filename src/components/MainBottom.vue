<template>
  <div class="miniatures">
    <Img />
  </div>
</template>

<script>
import Img from "./Img.vue";
export default {
  name: "MainBottom",
  props: {},
  components: {
    Img,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.miniatures {
  margin-top: 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  img {
    width: 300px;
    height: 150px;
    border: 2px solid fuchsia;
  }
}
</style>
