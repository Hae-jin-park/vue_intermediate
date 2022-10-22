<template>
  <div id="app">
    <img alt="Vue logo" class="mx-auto" src="./assets/logo.png" />
    <PanelView />
    <FormView />
  </div>
</template>

<script>
import PanelView from "./views/PanelView.vue";
import FormView from "./views/FormView.vue";

export default {
  name: "App",
  components: {
    PanelView,
    FormView,
  },
  data() {
    return {
      form: {
        series_name: "",
        release_year: 0,
      },
    };
  },

  methods: {
    changeForm(series_name, value) {
      this.form[series_name] = value;
    },
  },

  provide() {
    return {
      form: this.form,
      changeForm: this.changeForm,
    };
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
  margin-top: 60px;
}
</style>
