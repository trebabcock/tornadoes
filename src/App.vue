<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    let req = {
      year: 2011,
      month: 4,
      day: 27,
      mag: [5, 4, 3, 2, 1, 0],
      st: "ALL",
    };
    this.$store.dispatch("fetchTornadoesByDate", req);
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
