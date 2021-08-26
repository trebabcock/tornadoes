<template>
  <div
    class="
      w-64
      py-2
      px-4
      flex flex-col
      max-h-screen
      dark:bg-menu-bg-dark
      no-scrollbar
      overflow-y-auto
      antialiased
    "
  >
    <div class="flex-shrink-0 px-2 text-green-300 py-4 text-center">
      <router-link
        to="/"
        class="
          text-2xl text-green-300
          font-bold
          tracking-widest
          uppercase
          rounded-lg
        "
      >
        Tornadoes
      </router-link>
    </div>
    <NavItem route="/">Home</NavItem>
    <NavItem route="/asdf">Not Home</NavItem>
  </div>
</template>

<script>
import NavItem from "./NavItem";
export default {
  components: {
    NavItem,
  },
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
  width: 0px;
}
::-webkit-scrollbar {
  width: 0px;
}
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
