<template>
  <router-link
    class="
      block
      px-4
      py-2
      mt-2
      text-sm
      font-semibold
      truncate
      hover:no-underline
    "
    v-bind:class="{
      ' text-green-500 hover:text-green-400': isActive,
      'text-gray-500 hover:text-black': !isActive,
    }"
    :to="route"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.$route.path === this.route;
    },
  },
};
</script>
