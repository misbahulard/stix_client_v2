<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
  import * as types from './store/types.js'
  export default {
    name: 'app',
    created() {
      this.$store.dispatch(types.TRY_AUTO_LOGIN)
    },
  }
</script>

<style>

</style>