<template>
  <div id="app">
    <div>
      <button
        @click="firstModal = true"
        class="inline-block px-6 py-2.5 my-6 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        First Modal Open
      </button>
    </div>
    <div>
      <button
        @click="secondModal = true"
        class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Second Modal Open
      </button>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ModalView :on="firstModal">
      <template v-slot:title>첫번째 대화상자입니다.</template>
      <template #sub-title>부제입니다.</template>
      <!--#과 v-slot은 같은 표현-->
      <template>
        <div>
          <p>시작입니다.</p>
          <input type="text" name="" id="" value="안녕하십니까." />
          <p
            @click="firstModal = false"
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            끝
          </p>
        </div>
      </template>
    </ModalView>
    <ModalView :on="secondModal">
      <template v-slot:title>두번째 대화상자입니다.</template>
      <template #sub-title>부제.</template>
      <!--#과 v-slot은 같은 표현-->
      <template>
        <div>
          <p>시작입니다.</p>
          <input type="text" name="" id="" value="안녕하십니까." />
          <button
            @click="secondModal = false"
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            끝
          </button>
        </div>
      </template>
    </ModalView>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ModalView from "./components/ModalView.vue";

export default {
  data() {
    return {
      firstModal: false,
      secondModal: false,
    };
  },
  name: "App",
  components: {
    ModalView,
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
