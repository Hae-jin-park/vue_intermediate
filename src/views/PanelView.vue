<template>
  <div>
    <p>series_name : {{ form.series_name }}</p>
    <p>release_year :{{ form.release_year }}</p>
  </div>
</template>

<script>
export default {
  inject: ["form"],
};
</script>

<style></style>
