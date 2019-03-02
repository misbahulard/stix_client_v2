<template>
  <div :class="isSidebarOpened">
    <router-view></router-view>
  </div>
</template>
<script>
  import * as types from './store/types.js'
  export default {
    name: 'app',
    data() {
      return {
        windowWidth: 0
      }
    },
    computed: {
      isSidebarOpened() {
        if (this.windowWidth <= 1024) {
          if (this.$store.getters[types.IS_SIDEBAR_OPENED]) {
            return document.body.classList.remove("sidebar-gone")
            return document.body.classList.add("sidebar-show")
          } else {
            return document.body.classList.add("sidebar-gone")
            return document.body.classList.remove("sidebar-show")
          }
        } else {
          if (this.$store.getters[types.IS_SIDEBAR_OPENED]) {
            return document.body.classList.remove("sidebar-gone")
            return document.body.classList.remove("sidebar-show")
            return document.body.classList.add("sidebar-mini")
          } else {
            return document.body.classList.remove("sidebar-gone")
            return document.body.classList.remove("sidebar-show")
            return document.body.classList.remove("sidebar-mini")
          }
        }
      },
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

      this.$store.dispatch(types.TRY_AUTO_LOGIN)
    },
  }
</script>

<style>

</style>