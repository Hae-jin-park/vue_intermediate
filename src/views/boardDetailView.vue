<template>
  <div>
    <div
      class="bg-white rounded-md m-2 sm:m-3 px-4 py-4 border-2 border-emerald-600"
    >
      <h5>{{ $route.params.key }} 게시물의 상세페이지.</h5>
      {{ $route.query.title }}
      <button
        class="form-control block w-1/4 px-3 py-1.5 text-base font-normal text-white bg-sky-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-3 focus:text-white focus:bg-sky-700 focus:border-blue-600 focus:outline-none"
        @click="$router.push({ name: 'board' })"
      >
        이전으로...
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
