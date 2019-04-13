<template>
  <div>
    <section class="section">
      <div class="container mt-5">
        <div class="row">
          <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div class="login-brand">
              ME-STIX
            </div>
            <div class="card card-primary">
              <div class="card-header">
                <h4>Login</h4>
              </div>
              <div class="card-body">
                <form v-on:submit.prevent="onSubmit">
                  <div class="form-group">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" class="form-control" name="username" tabIndex="1" required
                      v-model="username" />
                    <div class="invalid-feedback">
                      Please fill in your username
                    </div>
                  </div>
                  <div class="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" class="form-control" name="password" tabIndex="2" required
                      v-model="password" />
                    <div class="invalid-feedback">
                      please fill in your password
                    </div>
                  </div>
                  <div class="form-group">
                    <button class="btn btn-primary btn-block" tabIndex="4" type="submit">
                      Login
                    </button>
                  </div>
                  <div class="alert alert-danger" v-if="error">{{ error }}</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
  import * as types from '../store/types.js';

  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    computed: {
      error() {
        return this.$store.getters[types.GET_USER_ERROR_MESSAGE]
      },
      isLoading() {
        return this.$store.getters[types.IS_LOADING]
      },
    },
    methods: {
      onSubmit() {
        var formData = {
          username: this.username,
          password: this.password
        };

        this.$store.dispatch(types.LOGIN, formData);
      }
    },
    destroyed() {
      this.$store.dispatch(types.SET_USER_ERROR_MESSAGE, null)
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