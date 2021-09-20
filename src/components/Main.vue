<template>
  <div class="main">
    <MainTop class="top" />
    <MainBottom class="bottom" />
  </div>
</template>

<script>
import MainTop from "./MainTop.vue";
import MainBottom from "./MainBottom.vue";
export default {
  name: "Main",
  props: {},
  components: {
    MainTop,
    MainBottom,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  width: 85%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  .top {
    width: 70%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 70%;
    }
  }
  .bottom {
    width: 70%;
    height: 10%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
}
</style>
