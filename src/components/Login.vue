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
                    <input id="username" type="text" class="form-control" name="username" tabIndex="1" required v-model="username" />
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
                </form>
              </div>
            </div>
            <!-- {this.state.isError ?
            <div class="alert alert-danger">
              {this.state.message}
            </div> : null
            } -->
          </div>
        </div>
      </div>
    </section>
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
    methods: {
      onSubmit() {
        var formData = {
          username: this.username,
          password: this.password
        };

        this.$store.dispatch(types.LOGIN, formData);
      }
    }
  }
</script>