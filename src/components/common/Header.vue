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
            <div class="d-sm-none d-lg-inline-block">Hi, {{ username }}</div>
          </a>
          <div class="dropdown-menu dropdown-menu-right" :class="{show: isOpen}">
            <a href="#" class="dropdown-item has-icon text-danger" @click="logout">
              <font-awesome-icon icon="sign-out-alt" /> Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
    <!-- Loading -->
    <div>
      <div class="overlay" :class="{ active: isLoading }">
      </div>
      <div v-if="isLoading" class="container popup-container">
        <div class="card card-popup">
          <div class="card-body card-body-popup">
            <fade-loader :color="'#394EEA'" :loading="isLoading"></fade-loader>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import * as types from '@/store/types'

  export default {
    name: 'Header',
    data() {
      return {
        isOpen: false,
        isLoading: false
      }
    },
    computed: {
      username() {
        var user = this.$store.getters[types.GET_USER_INFO]
        return user.username
      }
    },
    methods: {
      toggleSidebar() {
        this.$store.dispatch(types.VIEW_TOGGLE_SIDEBAR)
      },
      logout() {
        this.isLoading = true
        this.$store.dispatch(types.LOGOUT)
      }
    },
    destroyed() {
      this.isLoading = false
    }
  }
</script>
<style scoped>
  /* overlay */
  .overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 9998;
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }

  .active {
    display: block;
  }

  .blur {
    filter: blur(8px);
    -webkit-filter: blur(8px);
  }

  /* POP UP */
  .popup-container {
    display: flex;
    justify-content: center;
  }

  .card-popup {
    position: fixed !important;
    z-index: 9999;
    width: 280px;
    position: absolute;
    top: 256px;
    border-radius: 4px;
  }

  .card-body-popup {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card-body-popup .icon-ok {
    font-size: 100px;
    line-height: 1;
  }

  .card-body-popup .text-title {
    font-size: 16px;
    color: #3a3a3d;
    text-align: center;
  }

  .card-body-popup .text-describe {
    font-size: 14px;
    color: #9c9fa8;
    text-align: center;
  }

  .card-body-popup .btn-ok {
    width: 80px;
  }
</style>