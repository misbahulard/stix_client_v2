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
              {{ observedDataTotal }}
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
              {{ indicatorTotal }}
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
              {{ identityTotal }}
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
              {{ threatActorTotal }}
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
              {{ attackPatternTotal }}
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
              {{ bundleTotal }}
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
            <stix></stix>
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
              <li v-for="(item, index) in bundles.data.slice(0, 5)" class="media" :key="index">
                <div class="media-body">
                  <div class="float-right"><small>{{ item.objects[4].modified | moment('MMMM, Do YYYY') }}</small></div>
                  <div class="media-title">
                    <router-link to="/bundle/">{{ item.id }}</router-link>
                  </div>
                  <small>From {{ item.objects[4].name }} attacker</small>
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
  import Stix from '@/components/feature/Stix'
  import * as types from '@/store/types'

  export default {
    name: "Summary",
    components: {
      Stix
    },
    computed: {
      observedDataTotal() {
        return this.$store.getters[types.OBSERVED_DATA_TOTAL]
      },
      indicatorTotal() {
        return this.$store.getters[types.INDICATOR_TOTAL]
      },
      identityTotal() {
        return this.$store.getters[types.IDENTITY_TOTAL]
      },
      threatActorTotal() {
        return this.$store.getters[types.THREAT_ACTOR_TOTAL]
      },
      attackPatternTotal() {
        return this.$store.getters[types.ATTACK_PATTERN_TOTAL]
      },
      bundleTotal() {
        return this.$store.getters[types.BUNDLE_TOTAL]
      },
      bundles() {
        return this.$store.getters[types.ALL_BUNDLE]
      }
    },
    mounted() {
      this.$store.dispatch(types.GET_ALL_OBSERVED_DATA)
      this.$store.dispatch(types.GET_ALL_INDICATOR)
      this.$store.dispatch(types.GET_ALL_IDENTITY)
      this.$store.dispatch(types.GET_ALL_THREAT_ACTOR)
      this.$store.dispatch(types.GET_ALL_ATTACK_PATTERN)
      this.$store.dispatch(types.GET_ALL_BUNDLE)
    }
  }
</script>
<style scoped>

</style>