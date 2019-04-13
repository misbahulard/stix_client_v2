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
              <beat-loader color="#394EEA" size="10" :loading="observedDataIsLoading" style="margin-top: 8px;"></beat-loader>
              <span v-if="!observedDataIsLoading">{{ observedDataTotal }}</span>
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
              <beat-loader color="#394EEA" size="10" :loading="indicatorIsLoading" style="margin-top: 8px;"></beat-loader>
              <span v-if="!indicatorIsLoading">{{ indicatorTotal }}</span>
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
              <beat-loader color="#394EEA" size="10" :loading="identityIsLoading" style="margin-top: 8px;"></beat-loader>
              <span v-if="!identityIsLoading">{{ identityTotal }}</span>
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
              <beat-loader color="#394EEA" size="10" :loading="threatActorIsLoading" style="margin-top: 8px;"></beat-loader>
              <span v-if="!threatActorIsLoading">{{ threatActorTotal }}</span>
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
              <beat-loader color="#394EEA" size="10" :loading="attackPatternIsLoading" style="margin-top: 8px;"></beat-loader>
              <span v-if="!attackPatternIsLoading">{{ attackPatternTotal }}</span>
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
              <beat-loader color="#394EEA" size="10" :loading="bundlesIsLoading" style="margin-top: 8px;"></beat-loader>
              <span v-if="!bundlesIsLoading">{{ bundleTotal }}</span>
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
          <div class="card-body" ref="stixContainer">
            <div class="loading-container" v-if="bundlesIsLoading">
              <fade-loader color="#394EEA" :loading="bundlesIsLoading"></fade-loader>
            </div>
            <stix :data="bundles.data[0]" :width="width" :height="height" v-if="!bundlesIsLoading"></stix>
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
            <div class="loading-container" v-if="bundlesIsLoading">
              <fade-loader color="#394EEA" :loading="bundlesIsLoading"></fade-loader>
            </div>
            <ul class="list-unstyled list-unstyled-border" v-if="!bundlesIsLoading">
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
            <div class="text-center" v-if="!bundlesIsLoading">
              <router-link to="/bundle" class="btn btn-primary btn-round">View All</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Analytics -->
    <div class="row">
      <div class="col-lg-6 col-md-12 col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h4>Alert Count</h4>
          </div>
          <div class="card-body p-0">
            <div class="loading-container" v-if="alertCountLoading">
              <fade-loader color="#394EEA" :loading="alertCountLoading"></fade-loader>
            </div>
            <table class="table table-bordered table-md" v-if="!alertCountLoading">
              <tr>
                <th>Alert Message</th>
                <th>Count</th>
              </tr>
              <tr v-for="alert in alertCount" :key="alert._id">
                <td>{{ alert._id }}</td>
                <td>{{ alert.count }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 col-12 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h4>Port Count</h4>
          </div>
          <div class="card-body p-0">
            <div class="loading-container" v-if="portCountLoading">
              <fade-loader color="#394EEA" :loading="portCountLoading"></fade-loader>
            </div>
            <table class="table table-bordered table-md" v-if="!portCountLoading">
              <tr>
                <th>Destination Port</th>
                <th>Count</th>
              </tr>
              <tr v-for="alert in portCount" :key="alert._id">
                <td>{{ alert._id }}</td>
                <td>{{ alert.count }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12 col-12 col-sm-12">
        <div class="card" v-if="!actorCountLoading">
          <div class="card-header">
            <h4>Actor Count</h4>
          </div>
          <div class="card-body p-0">
            <div class="loading-container" v-if="actorCountLoading">
              <fade-loader color="#394EEA" :loading="actorCountLoading"></fade-loader>
            </div>
            <table class="table table-bordered table-md">
              <tr>
                <th>IP address</th>
                <th>Country</th>
                <th>Count</th>
              </tr>
              <tr v-for="actor in actorCount" :key="actor._id.ip">
                <td>{{ actor._id.ip }}</td>
                <td>{{ actor._id.country }}</td>
                <td>{{ actor.count }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 col-12 col-sm-12">
        <div class="card" v-if="!actorCountryCountLoading">
          <div class="card-header">
            <h4>Actor Country Count</h4>
          </div>
          <div class="card-body p-0">
            <div class="loading-container" v-if="actorCountryCountLoading">
              <fade-loader color="#394EEA" :loading="actorCountryCountLoading"></fade-loader>
            </div>
            <table class="table table-bordered table-md">
              <tr>
                <th>Country</th>
                <th>Count</th>
              </tr>
              <tr v-for="actor in actorCountryCount" :key="actor._id">
                <td>{{ actor._id }}</td>
                <td>{{ actor.count }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12 col-12 col-sm-12">
        <div class="card" v-if="!targetCountLoading">
          <div class="card-header">
            <h4>Target Count</h4>
          </div>
          <div class="card-body p-0">
            <div class="loading-container" v-if="targetCountLoading">
              <fade-loader color="#394EEA" :loading="targetCountLoading"></fade-loader>
            </div>
            <table class="table table-bordered table-md">
              <tr>
                <th>IP address</th>
                <th>Country</th>
                <th>Count</th>
              </tr>
              <tr v-for="target in targetCount" :key="target._id.ip">
                <td>{{ target._id.ip }}</td>
                <td>{{ target._id.country }}</td>
                <td>{{ target.count }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 col-12 col-sm-12">
        <div class="card" v-if="!targetCountryCountLoading">
          <div class="card-header">
            <h4>Target Country Count</h4>
          </div>
          <div class="card-body p-0">
            <div class="loading-container" v-if="targetCountryCountLoading">
              <fade-loader color="#394EEA" :loading="targetCountryCountLoading"></fade-loader>
            </div>
            <table class="table table-bordered table-md">
              <tr>
                <th>Country</th>
                <th>Count</th>
              </tr>
              <tr v-for="target in targetCountryCount" :key="target._id">
                <td>{{ target._id }}</td>
                <td>{{ target.count }}</td>
              </tr>
            </table>
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
    data() {
      return {
        height: 0,
        width: 0
      }
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
      },
      observedDataIsLoading() {
        return this.$store.getters[types.OBSERVED_DATA_LOADING]
      },
      indicatorIsLoading() {
        return this.$store.getters[types.INDICATOR_LOADING]
      },
      identityIsLoading() {
        return this.$store.getters[types.IDENTITY_LOADING]
      },
      threatActorIsLoading() {
        return this.$store.getters[types.THREAT_ACTOR_LOADING]
      },
      attackPatternIsLoading() {
        return this.$store.getters[types.ATTACK_PATTERN_LOADING]
      },
      bundlesIsLoading() {
        return this.$store.getters[types.BUNDLE_LOADING]
      },
      alertCount() {
        return this.$store.getters[types.GET_ANALYTICS_ALERT_COUNT]
      },
      portCount() {
        return this.$store.getters[types.GET_ANALYTICS_PORT_COUNT]
      },
      actorCount() {
        return this.$store.getters[types.GET_ANALYTICS_ACTOR_COUNT]
      },
      actorCountryCount() {
        return this.$store.getters[types.GET_ANALYTICS_ACTOR_COUNTRY_COUNT]
      },
      targetCount() {
        return this.$store.getters[types.GET_ANALYTICS_TARGET_COUNT]
      },
      targetCountryCount() {
        return this.$store.getters[types.GET_ANALYTICS_TARGET_COUNTRY_COUNT]
      },
      alertCountLoading() {
        return this.$store.getters[types.GET_ANALYTICS_ALERT_COUNT_LOADING]
      },
      portCountLoading() {
        return this.$store.getters[types.GET_ANALYTICS_PORT_COUNT_LOADING]
      },
      actorCountLoading() {
        return this.$store.getters[types.GET_ANALYTICS_ACTOR_COUNT_LOADING]
      },
      actorCountryCountLoading() {
        return this.$store.getters[types.GET_ANALYTICS_ACTOR_COUNTRY_COUNT_LOADING]
      },
      targetCountLoading() {
        return this.$store.getters[types.GET_ANALYTICS_ACTOR_COUNT_LOADING]
      },
      targetCountryCountLoading() {
        return this.$store.getters[types.GET_ANALYTICS_ACTOR_COUNTRY_COUNT_LOADING]
      },
    },
    mounted() {
      this.height = 500
      this.width = this.$refs.stixContainer.clientWidth - 50

      this.$store.dispatch(types.GET_ALL_OBSERVED_DATA)
      this.$store.dispatch(types.GET_ALL_INDICATOR)
      this.$store.dispatch(types.GET_ALL_IDENTITY)
      this.$store.dispatch(types.GET_ALL_THREAT_ACTOR)
      this.$store.dispatch(types.GET_ALL_ATTACK_PATTERN)
      this.$store.dispatch(types.GET_ALL_BUNDLE)
      this.$store.dispatch(types.REQUEST_ANALYTICS_ALERT_COUNT)
      this.$store.dispatch(types.REQUEST_ANALYTICS_PORT_COUNT)
      this.$store.dispatch(types.REQUEST_ANALYTICS_ACTOR_COUNT)
      this.$store.dispatch(types.REQUEST_ANALYTICS_ACTOR_COUNTRY_COUNT)
      this.$store.dispatch(types.REQUEST_ANALYTICS_TARGET_COUNT)
      this.$store.dispatch(types.REQUEST_ANALYTICS_TARGET_COUNTRY_COUNT)
    }
  }
</script>
<style scoped>

</style>