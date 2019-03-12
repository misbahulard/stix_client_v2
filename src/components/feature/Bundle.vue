<template>
  <section class="section">
    <div class="section-header">
      <h1>Bundle</h1>
    </div>
    <v-app>
      <v-card>
        <v-card-title>
          Bundle
          <v-spacer></v-spacer>
          <v-flex xs12 sm7 d-flex d-justify-between>
            <v-select :items="options" v-model="selectedOption" label="Field" flat solo attach single-line hide-details></v-select>
            <v-text-field v-model="search" append-icon="search" label="Search" flat solo single-line hide-details></v-text-field>
          </v-flex>
        </v-card-title>
        <v-data-table :headers="headers" :items="observedDatas.data" :pagination.sync="pagination" :total-items="observedDatas.size"
          :loading="observedDatasLoading" :expand="expand" class="elevation-1">
          <template v-slot:items="props">
            <tr @click="props.expanded = !props.expanded" style="cursor: pointer;">
              <td>{{ props.item.id }}</td>
              <td>{{ props.item.objects[0].objects[0].value }}</td>
              <td>{{ props.item.objects[0].objects[1].value }}</td>
              <td>{{ props.item.objects[5].name }}</td>

            </tr>
          </template>
          <template v-slot:expand="props">
            <v-card flat style="background-color: #f7f7f7;">
              <v-card-title primary-title>
                <div>
                  <div class="headline">Bundle Detail</div>
                  <span>Detail from {{ props.item.id }}</span>
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

                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">&#9500; Threat Actor</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.objects[4].description }}</div>

                  <div class="col-md-2 col-3 col-sm-4 font-weight-bold">&#9500; Target</div>
                  <div class="col-md-10 col-9 col-sm-8">: {{ props.item.objects[3].description }}</div>

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
            text: 'Source IP',
            value: 'objects.0.objects.0.value'
          },
          {
            text: 'Destination IP',
            value: 'objects.0.objects.1.value'
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
            text: 'Attack Pattern',
            value: 'objects.5.name'
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
          this.$store.dispatch(types.GET_ALL_BUNDLE, this.params)
        }
      }
    },
    computed: {
      observedDatas() {
        return this.$store.getters[types.ALL_BUNDLE]
      },
      observedDatasLoading() {
        return this.$store.getters[types.BUNDLE_LOADING]
      }
    },
    mounted() {
      this.$store.dispatch(types.GET_ALL_BUNDLE)
    }
  }
</script>
<style>

</style>