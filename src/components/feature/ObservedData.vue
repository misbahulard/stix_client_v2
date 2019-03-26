<template>
  <section class="section">
    <div class="section-header">
      <h1>Observed Data</h1>
    </div>
    <v-app>
      <v-card>
        <v-card-title>
          Observed Data
          <v-spacer></v-spacer>
          <v-flex xs12 sm7 d-flex d-justify-between>
            <v-select :items="options" v-model="selectedOption" label="Field" flat solo attach single-line hide-details></v-select>
            <v-text-field v-model="search" append-icon="search" label="Search" flat solo single-line hide-details></v-text-field>
          </v-flex>
        </v-card-title>
        <v-data-table :headers="headers" :items="observedDatas.data" :pagination.sync="pagination" :total-items="observedDatas.size"
          :loading="observedDatasLoading" :expand="expand" class="elevation-1">
          <template v-slot:items="props">
            <tr>
              <td>{{ props.item.id }}</td>
              <td>{{ props.item.objects[0].value }}</td>
              <td>{{ props.item.objects[1].value }}</td>
              <td>{{ props.item.objects[2].dst_port }}</td>
              <td class="text-xs-right">{{ props.item.number_observed }}</td>
              <td class="text-xs-right">{{ props.item.first_observed | moment('MMMM Do YYYY, h:mm:ss a') }}</td>
              <td>
                <button class="btn btn-primary" style="margin-right: 8px;" @click="props.expanded = !props.expanded"><font-awesome-icon icon="expand" /></button>
              </td>
            </tr>
          </template>
          <template v-slot:expand="props">
            <v-card flat style="background-color: #f7f7f7;">
              <v-card-title primary-title>
                <div>
                  <div class="headline">Observed Data Detail</div>
                </div>
              </v-card-title>
              <v-card-text>
                <div class="row">
                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">ID</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.id }}</div>

                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">Type</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.type }}</div>

                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">First Observed</div>
                  <div class="col-md-10 col-9 col-sm-8">:
                    {{ props.item.first_observed | moment('MMMM Do YYYY, h:mm:ss a') }}
                  </div>

                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">Last Observed</div>
                  <div class="col-md-10 col-9 col-sm-8">:
                    {{ props.item.last_observed | moment('MMMM Do YYYY, h:mm:ss a') }}
                  </div>

                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">Number Observed</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.number_observed }}</div>

                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">Objects</div>
                  <div class="col-md-10 col-9 col-sm-8"></div>
                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">&#9500; Type</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.objects[2].type }}</div>
                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">&#9500; Source IP</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.objects[0].value }}</div>
                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">&#9500; Destination IP</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.objects[1].value }}</div>
                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">&#9500; Destination Port</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.objects[2].dst_port }}</div>
                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">&#9500; Protocol</div>
                  <div class="col-md-10 col-9 col-sm-8">:
                    {{ props.item.objects[2].protocols[0] }} - {{ props.item.objects[2].protocols[1] }}
                  </div>

                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">Created</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.created | moment('MMMM Do YYYY, h:mm:ss a') }}</div>

                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">Modified</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.modified | moment('MMMM Do YYYY, h:mm:ss a') }}</div>
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
  import * as types from '@/store/types'
  export default {
    name: "ObservedData",
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
            text: 'Number Observed',
            value: 'number_observed'
          },
          {
            text: 'Source IP',
            value: 'objects.0.value'
          },
          {
            text: 'Destination IP',
            value: 'objects.1.value'
          },
          {
            text: 'Destination Port',
            value: 'objects.2.dst_port'
          },
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
            value: 'objects.0.value'
          },
          {
            text: 'Destination IP',
            value: 'objects.1.value'
          },
          {
            text: 'Destination Port',
            value: 'objects.2.dst_port'
          },
          {
            text: 'Number Observed',
            value: 'number_observed'
          },
          {
            text: 'First Observed',
            value: 'first_observed'
          },
          {
            text: 'Action',
            value: 'action'
          }
        ]
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
          this.$store.dispatch(types.GET_ALL_OBSERVED_DATA, this.params)
        }
      }
    },
    computed: {
      observedDatas() {
        return this.$store.getters[types.ALL_OBSERVED_DATA]
      },
      observedDatasLoading() {
        return this.$store.getters[types.OBSERVED_DATA_LOADING]
      }
    },
    mounted() {
      this.$store.dispatch(types.GET_ALL_OBSERVED_DATA)
    }
  }
</script>
<style>

</style>