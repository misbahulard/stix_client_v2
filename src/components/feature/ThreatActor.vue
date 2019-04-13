<template>
  <section class="section">
    <div class="section-header">
      <h1>Threat Actor</h1>
    </div>
    <v-app>
      <v-card>
        <v-card-title>
          Threat Actor
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
              <td>{{ props.item.name.replace(/.(threat actor)/g, '') }}</td>
              <td>{{ props.item.description }}</td>
              <td class="text-xs-right">{{ props.item.created | moment('MMMM Do YYYY, h:mm:ss a') }}</td>
              <td>
                <button class="btn btn-primary" style="margin-right: 8px;" @click="props.expanded = !props.expanded"><font-awesome-icon icon="expand" /></button>
              </td>
            </tr>
          </template>
          <template v-slot:expand="props">
            <v-card flat style="background-color: #f7f7f7;">
              <v-card-title primary-title>
                <div>
                  <div class="headline">Threat Actor Detail</div>
                </div>
              </v-card-title>
              <v-card-text>
                <div class="row">
                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">ID</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.id }}</div>

                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">Type</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.type }}</div>

                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">Name</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.name.replace(/.(threat actor)/g, '') }}</div>
                  
                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">&#9500; Description</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.description }}</div>

                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">&#9500; Labels</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.labels[0] }}</div>

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
            text: 'Name',
            value: 'name'
          },
          {
            text: 'Description',
            value: 'description'
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
            text: 'Name',
            value: 'name'
          },
          {
            text: 'Description',
            value: 'description'
          },
          {
            text: 'Created',
            value: 'created'
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
          this.$store.dispatch(types.GET_ALL_THREAT_ACTOR, this.params)
        }
      }
    },
    computed: {
      observedDatas() {
        return this.$store.getters[types.ALL_THREAT_ACTOR]
      },
      observedDatasLoading() {
        return this.$store.getters[types.THREAT_ACTOR_LOADING]
      }
    },
    mounted() {
      this.$store.dispatch(types.GET_ALL_THREAT_ACTOR)
    }
  }
</script>
<style>

</style>