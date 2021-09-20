<template>
  <div class="buttons">
    <input
      v-model="search"
      @keyup.enter="searchImg"
      class="search"
      type="text"
      placeholder="Search category"
    />
    <div>
      <button value="0" @click="getValue(0)">1</button>
      <button value="1" @click="getValue(1)">2</button>
      <button value="2" @click="getValue(2)">3</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {},
  data() {
    return {
      buttonValue: null,
      search: "",
    };
  },
  methods: {
    getValue(num) {
      this.$store.state.indexUrl = num;
      // console.log(num);
      // console.log(this.$store.state.indexUrl);
    },
    searchImg() {
      console.log(this.search);
      this.$store.state.search = this.search;
      console.log(this.$store.state.search);
      this.$store.dispatch("loadImage");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.buttons {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  .search {
    width: 100%;
    padding: 5px;
    border-radius: 10px;
  }
  button {
    width: 40px;
    height: 40px;
    background-color: #e7532d;
    color: #000;
    border-radius: 50%;
    margin: 10px;
    text-decoration: none;
    cursor: pointer;
    border: 2px solid #000;
    font-weight: 700;
    box-shadow: 2px 2px 8px 2px #000000;
    i {
      font-size: 50px;
    }
  }
}
</style>
