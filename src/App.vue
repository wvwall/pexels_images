<template>
  <div id="app">
    <Sidebar class="sidebar" />
    <Main />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    Main,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  background-image: url("./assets/main2.jpg");
  background-size: cover;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  margin: 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 30px;
  }
  .sidebar {
    width: 10%;
    height: calc(100vh - 80px);

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100px;
    }
  }
}
</style>
