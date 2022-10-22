<template>
  <div>
    <h2>리스트 컴포넌트</h2>
    <ul
      class="bg-white rounded-lg border border-gray-200 w-full p-1 m-1 md:m-0 text-gray-900"
    >
      <input
        type="text"
        class="form-control block w-3/4 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-3 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        v-model="searchKeyword"
      />
      <span
        >{{ selected }} {{ select_answer.key }}{{ select_answer.name }}</span
      >
      <!--item[id] = item.key랑 표현이 똑같다-->
      <li
        class="px-1 md:px-0 py-2 my-2 border-x border-y border-radius border-blue-600 w-full flex flex-row"
        v-for="item in filteredList"
        :key="item[id]"
        @click="clickItem(item[id])"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchKeyword: "",
      select_answer: {},
      isAnswer: "",
    };
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return new Array();
      },
    },
    //:selected from 부모 comp
    selected: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      required: true, //warning만 뜨지 실제로 개발자가 막기 힘들다.
    },
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    filteredList() {
      return this.list.filter((list) =>
        list[this.label].includes(this.searchKeyword)
      );
    },
    selectedName() {
      const findObj = this.list.find((item) => item[this.id] === this.selected);

      return findObj ? findObj[this.label] : "선택해주십쇼";
    },
  },
  methods: {
    clickItem(value) {
      this.$emit("change", value);
    },
  },
};
</script>

<style></style>
