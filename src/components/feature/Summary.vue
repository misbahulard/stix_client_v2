<template>
  <section class="section">
    <div class="section-header">
      <h1>Dashboard</h1>
    </div>
    <!-- Card Statistik -->
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6 col-12">
        <div class="card card-statistic-1">
          <div class="card-icon bg-primary">
            <font-awesome-icon icon="search" size="2x" color="white" />
          </div>
          <div class="card-wrap">
            <div class="card-header">
              <h4>Observed Data</h4>
            </div>
            <div class="card-body">
              1
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 col-12">
        <div class="card card-statistic-1">
          <div class="card-icon bg-warning">
            <font-awesome-icon icon="eye" size="2x" color="white" />
          </div>
          <div class="card-wrap">
            <div class="card-header">
              <h4>Indicator</h4>
            </div>
            <div class="card-body">
              1
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 col-12">
        <div class="card card-statistic-1">
          <div class="card-icon bg-success">
            <font-awesome-icon icon="user" size="2x" color="white" />
          </div>
          <div class="card-wrap">
            <div class="card-header">
              <h4>Identity</h4>
            </div>
            <div class="card-body">
              1
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 col-12">
        <div class="card card-statistic-1">
          <div class="card-icon bg-danger">
            <font-awesome-icon icon="theater-masks" size="2x" color="white" />
          </div>
          <div class="card-wrap">
            <div class="card-header">
              <h4>Threat Actor</h4>
            </div>
            <div class="card-body">
              1
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Card Statistik -->
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6 col-12">
        <div class="card card-statistic-1">
          <div class="card-icon bg-primary">
            <font-awesome-icon icon="code-branch" size="2x" color="white" />
          </div>
          <div class="card-wrap">
            <div class="card-header">
              <h4>Attack Pattern</h4>
            </div>
            <div class="card-body">
              1
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 col-12">
        <div class="card card-statistic-1">
          <div class="card-icon bg-warning">
            <font-awesome-icon icon="archive" size="2x" color="white" />
          </div>
          <div class="card-wrap">
            <div class="card-header">
              <h4>Bundle</h4>
            </div>
            <div class="card-body">
              1
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <!-- Visualisasi STIX -->
      <div class="col-lg-8 col-md-12 col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h4>Recent Bundle Visualization</h4>
          </div>
          <div class="card-body">
            STIX Graph
          </div>
        </div>
      </div>
      <!-- Aktifitas Terkini -->
      <div class="col-lg-4 col-md-12 col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h4>Recent Activities</h4>
          </div>
          <div class="card-body">
            <ul class="list-unstyled list-unstyled-border">
              <li class="media" key={index}>
                <div class="media-body">
                  <div class="float-right"><small>20 Feb 2019</small></div>
                  <div class="media-title">
                    <router-link to="/bundle/">id</router-link>
                  </div>
                  <small>From ... attacker</small>
                </div>
              </li>
            </ul>
            <div class="text-center">
              <router-link to="/bundle" class="btn btn-primary btn-round">View All</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: "Summary"
  }
</script>
<style scoped>

</style>