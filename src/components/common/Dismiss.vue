<template>
  <div class="overlay" :class="{show: isSidebarOpened}" @click="toggleSidebar">
  </div>
</template>
<script>
  import * as types from "@/store/types"
  export default {
    name: "Dismiss",
    computed: {
      isSidebarOpened() {
        return this.$store.getters[types.IS_SIDEBAR_OPENED];
      }
    },
    methods: {
      toggleSidebar() {
        this.$store.dispatch(types.VIEW_TOGGLE_SIDEBAR)
      }
    }
  }
</script>
<style scoped>
  .show {
    display: block !important;
  }
  .overlay {
    display: none;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 890;
  }
</style>