<template>
  <div>
    <div
      class="bg-white rounded-md m-2 sm:m-3 px-4 py-4 border-2 border-emerald-600"
    >
      <h1 class="text-3xl font-bold underline">보드 페이지입니다.</h1>
      <ul
        class="bg-white rounded-lg border border-gray-200 w-full p-1 m-1 md:m-0 text-gray-900"
      >
        <li
          class="px-1 md:px-0 py-2 my-2 border-x border-y border-radius border-blue-600 w-full flex flex-row"
          v-for="item in boardList"
          :key="item.key"
          @click="goToDetail(item.key, item.title)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boardList: [
        { key: 1, title: "Hello" },
        { key: 2, title: "Bonjour" },
        { key: 3, title: "안녕하세요" },
      ],
    };
  },
  methods: {
    goToDetail(key, title) {
      this.$router.push({
        path: `/board.do/${key}`,
        query: {
          title,
        },
      });
    },
  },
};
</script>

<style></style>
