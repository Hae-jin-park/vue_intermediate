<template>
  <div id="app">
    <ListComponent
      ref="listComp"
      :list="nfx_series"
      :selected="selected"
      @change="changeSelected"
      label="name"
      id="key"
    />
  </div>
</template>
<script>
import ListComponent from "./components/ListComponent.vue";

export default {
  name: "app",
  components: {
    ListComponent,
  },
  data() {
    return {
      idolName: [
        { name: "비투비", key: "btob" },
        { name: "빅뱅", key: "bigbang" },
        { name: "워너원", key: "wannaone" },
        { name: "엑소", key: "exo" },
        { name: "모모랜드", key: "mld" },
      ],
      nfx_series: [
        { name: "오징어 게임", key: "squid" },
        { name: "종이의 집 : 공동경제구역", key: "moneyheist" },
        { name: "소년심판", key: "justice" },
        { name: "D.P.", key: "dp" },
        { name: "지옥", key: "hellbound" },
        { name: "수리남", key: "narco" },
        { name: "작은 아씨들 (2022)", key: "littlewomen" },
      ],
      selected: "",
    };
  },
  methods: {
    changeSelected(obj) {
      console.log(obj.name);
    },
  },
  mounted() {
    console.log(this.$refs.listComp);

    console.log(this.$refs.listComp.selected);
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
