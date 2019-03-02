<template>
  <div class="overlay" :class="{show: isSidebarOpened}" @click="toggleSidebar">
  </div>
</template>
<script>
  import * as types from "@/store/types"
  export default {
    name: "Dismiss",
    data() {
      return {
        windowWidth: 0,
      }
    },
    computed: {
      isSidebarOpened() {
        if (this.windowWidth <= 1024) {
          if (this.$store.getters[types.IS_SIDEBAR_OPENED]) {
            document.body.classList.remove("sidebar-gone")
            document.body.classList.add("sidebar-show")
            return true
          } else {
            document.body.classList.add("sidebar-gone")
            document.body.classList.remove("sidebar-show")
            return false
          }
        } else {
          if (this.$store.getters[types.IS_SIDEBAR_OPENED]) {
            document.body.classList.remove("sidebar-gone")
            document.body.classList.remove("sidebar-show")
            document.body.classList.add("sidebar-mini")
            return true
          } else {
            document.body.classList.remove("sidebar-gone")
            document.body.classList.remove("sidebar-show")
            document.body.classList.remove("sidebar-mini")
            return false
          }
        }
      },
    },
    methods: {
      toggleSidebar() {
        this.$store.dispatch(types.VIEW_TOGGLE_SIDEBAR)
      }
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('resize', () => {
          this.windowWidth = window.innerWidth
          if (this.windowWidth <= 1024) {
            document.body.classList.add("sidebar-gone")
          }
        });
      })
    },
    created() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 1024) {
        document.body.classList.add("sidebar-gone")
      }
    },
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
    z-index: 900;
  }
</style>