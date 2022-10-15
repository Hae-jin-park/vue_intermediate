<template>
  <div class="home">
    <img alt="Vue logo" class="mx-auto" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    Hidden Page will be displayed in 5 seconds.
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  methods: {
    goToHidden() {
      this.$router.push({ name: "hidden" });
    },
  },
  created() {
    setTimeout(() => {
      this.goToHidden();
    }, 5000);
  },
};
</script>
