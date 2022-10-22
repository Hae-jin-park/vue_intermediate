<template>
  <div>
    <p>
      series_name :
      <input
        type="text"
        name="series_name"
        :value="form.series_name"
        @input="changeInput"
      />
    </p>
    <p>
      release_year :
      <input
        type="text"
        name="release_year"
        :value="form.release_year"
        @input="changeInput"
      />
    </p>
  </div>
</template>

<script>
export default {
  inject: ["form", "changeForm"],
  methods: {
    changeInput(e) {
      const name = e.target.name;
      const value = e.target.value;
      this.changeForm(name, value);
    },
  },
};
</script>

<style></style>
