<template>
  <div class="main-wrapper main-wrapper-1">
    <div class="navbar-bg"></div>
    <nav class="navbar navbar-expand-lg main-navbar">
      <form class="form-inline mr-auto">
        <ul class="navbar-nav mr-3">
          <li><a href="#" @click="toggleSidebar" class="nav-link nav-link-lg">
              <font-awesome-icon icon="bars" /></a></li>
        </ul>
      </form>
      <ul class="navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" @click="isOpen=!isOpen" class="nav-link dropdown-toggle nav-link-lg nav-link-user">
            <img alt="image" src="@/assets/img/avatar-1.png" class="rounded-circle mr-1">
            <div class="d-sm-none d-lg-inline-block">Hi, Admin</div>
          </a>
          <div class="dropdown-menu dropdown-menu-right" :class="{show: isOpen}">
            <a href="#" class="dropdown-item has-icon text-danger">
              <font-awesome-icon icon="sign-out-alt" /> Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
  import * as types from '@/store/types'

  export default {
    name: 'Header',
    data() {
      return {
        isOpen: false
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

</style>