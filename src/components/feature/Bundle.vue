<template>
  <section class="section">
    <div class="section-header">
      <h1>Bundle</h1>
    </div>
    <div class="row">
      <div class="col-lg-8 col-md-12 col-12 col-sm-12">
        <div class="card card-primary" v-if="!bundlesIsLoading">
          <div class="card-header">
            <h4>Recent Bundle Visualization</h4>
          </div>
          <div class="card-body" ref="stixContainer">
            <stix :data="selectedBundle" :width="width" :height="height"></stix>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 col-12 col-sm-12">
        <div class="card card-warning">
          <div class="card-header">
            <h4>Legend</h4>
          </div>
          <div class="card-body">
            <div class="row">
              <div v-for="leg in legend" class="col-lg-6 col-md-6 col-6 col-sm-12" :key="leg.name">
                <div class="media">
                  <img :alt="leg.name" :src="'/img/icons/' + leg.icon" width="30" class="rounded-circle mr-2"></img>
                  <p>{{ leg.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card card-info">
          <div class="card-header">
            <h4>Selected Node</h4>
          </div>
          <div class="card-body">
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table table-striped table-md">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(value, key) in selectedNode" :key="key">
                      <td>{{ key }}</td>
                      <td>{{ String(value) }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-app>
      <v-card>
        <v-card-title>
          Bundle
          <v-spacer></v-spacer>
          <v-flex xs12 sm7 d-flex d-justify-between>
            <v-select :items="options" v-model="selectedOption" label="Field" flat solo attach single-line hide-details>
            </v-select>
            <v-text-field v-model="search" append-icon="search" label="Search" flat solo single-line hide-details>
            </v-text-field>
          </v-flex>
        </v-card-title>
        <v-data-table :headers="headers" :items="bundles.data" :pagination.sync="pagination" :total-items="bundles.size"
          :loading="bundlesIsLoading" :expand="expand" class="elevation-1">
          <template v-slot:items="props">
            <tr>
              <td>{{ props.item.id }}</td>
              <td>{{ props.item.objects[0].objects[0].value }}</td>
              <td>{{ props.item.objects[0].objects[1].value }}</td>
              <td>{{ props.item.objects[0].number_observed }}</td>
              <td>{{ props.item.objects[5].name }}</td>
              <td style="width: 140px;">
                <button class="btn btn-primary" style="margin-right: 8px;" @click="props.expanded = !props.expanded"><font-awesome-icon icon="expand" /></button>
                <button class="btn btn-danger"><font-awesome-icon icon="eye" @click="changeBundle(props.item)" /></button>
              </td>
            </tr>
          </template>
          <template v-slot:expand="props">
            <v-card flat style="background-color: #f7f7f7;">
              <v-card-title primary-title>
                <div>
                  <div class="headline">Bundle Detail</div>
                </div>
              </v-card-title>
              <v-card-text>
                <div class="row">
                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">ID</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.id }}</div>

                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">Type</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.type }}</div>

                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">&#9500; Source IP</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.objects[0].objects[0].value }}</div>

                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">&#9500; Dest IP</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.objects[0].objects[1].value }}</div>

                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">&#9500; Dest Port</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.objects[0].objects[2].dst_port }}</div>

                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">&#9500; Total obs.</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.objects[0].number_observed }}</div>

                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">&#9500; Threat Actor</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.objects[4].name }}</div>

                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">&#9500; Target</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.objects[3].name }}</div>

                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">&#9500; Attack Pattern</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.objects[5].name }}</div>
                </div>
              </v-card-text>
            </v-card>
          </template>
        </v-data-table>
      </v-card>
    </v-app>
  </section>
</template>
<script>
  import Stix from '@/components/feature/Stix'
  import * as types from '@/store/types'

  export default {
    name: "ObservedData",
    components: {
      Stix
    },
    data() {
      return {
        expand: false,
        params: [],
        selectedOption: 'id',
        options: [{
            text: 'ID',
            value: 'id'
          },
          {
            text: 'Source IP',
            value: 'objects.0.objects.0.value'
          },
          {
            text: 'Destination IP',
            value: 'objects.0.objects.1.value'
          },
          {
            text: 'Threat Actor',
            value: 'objects.4.name'
          },
          {
            text: 'Target',
            value: 'objects.3.name'
          },
          {
            text: 'Attack Pattern',
            value: 'objects.5.name'
          }
        ],
        search: '',
        pagination: {
          "descending": false,
          "page": 1,
          "rowsPerPage": 5,
          "sortBy": "id",
          "totalItems": 20
        },
        headers: [{
            text: 'ID',
            align: 'left',
            value: 'id'
          },
          {
            text: 'Source IP',
            value: 'objects.0.objects.0.value'
          },
          {
            text: 'Destination IP',
            value: 'objects.0.objects.1.value'
          },
          {
            text: 'Number Observed',
            value: 'objects.0.number_observed'
          },
          {
            text: 'Attack Pattern',
            value: 'objects.5.name'
          },
          {
            text: 'Action',
            value: 'action'
          }
        ],
        height: 0,
        width: 0
      }
    },
    watch: {
      pagination: {
        handler() {
          if (this.selectedOption != "" && this.search != "") {
            this.params = {
              ...this.pagination,
              searchBy: this.selectedOption,
              query: this.search
            }
          } else {
            this.params = {
              ...this.pagination,
              searchBy: "",
              query: ""
            }
          }
        }
      },
      search: {
        handler() {
          this.params = {
            ...this.pagination,
            searchBy: this.selectedOption,
            query: this.search
          }
        }
      },
      params: {
        handler() {
          this.$store.dispatch(types.GET_ALL_BUNDLE, this.params)
        }
      }
    },
    computed: {
      bundles() {
        return this.$store.getters[types.ALL_BUNDLE]
      },
      bundlesIsLoading() {
        return this.$store.getters[types.BUNDLE_LOADING]
      },
      selectedBundle() {
        return this.$store.getters[types.BUNDLE_SELECTED_BUNDLE]
      },
      selectedNode() {
        return this.$store.getters[types.BUNDLE_SELECTED_NODE]
      },
      legend() {
        return this.$store.getters[types.BUNDLE_LEGEND]
      }
    },
    methods: {
      changeBundle(data) {
        this.$store.dispatch(types.CHANGE_BUNDLE_SELECTED_BUNDLE, data)
      }
    },
    mounted() {
      this.height = 500
      this.width = this.$refs.stixContainer.clientWidth - 50

      this.$store.dispatch(types.GET_ALL_BUNDLE)
    }
  }
</script>
<style>

</style>