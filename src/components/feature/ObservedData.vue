<template>
  <section class="section">
    <div class="section-header">
      <h1>Observed Data</h1>
    </div>
    <!-- <div v-if="!observedDatasLoading"> -->
    <v-app>
      <v-data-table :headers="headers" :items="observedDatas.data" :pagination.sync="pagination" :total-items="observedDatas.size"
        :loading="observedDatasLoading" :expand="expand" class="elevation-1">
        <template v-slot:items="props">
          <tr @click="props.expanded = !props.expanded" style="cursor: pointer;">
            <td>{{ props.item.id }}</td>
            <td class="text-xs-right">{{ props.item.number_observed }}</td>
            <td class="text-xs-right">{{ props.item.created | moment('MMMM Do YYYY, h:mm:ss a') }}</td>
            <td class="text-xs-right">{{ props.item.modified | moment('MMMM Do YYYY, h:mm:ss a') }}</td>
            <td class="text-xs-right">{{ props.item.first_observed | moment('MMMM Do YYYY, h:mm:ss a') }}</td>
            <td class="text-xs-right">{{ props.item.last_observed | moment('MMMM Do YYYY, h:mm:ss a') }}</td>
          </tr>
        </template>
        <template v-slot:expand="props">
          <v-card flat style="background-color: #f7f7f7;">
            <v-card-title primary-title>
              <div>
                <div class="headline">Observed Data Detail</div>
                <span>Detail from {{ props.item.id }}</span>
              </div>
            </v-card-title>
            <v-card-text>
              <div class="row">
                <div class="col-md-2 col-3 col-sm-4 font-weight-bold">ID</div>
                <div class="col-md-10 col-9 col-sm-8">: {{ props.item.id }}</div>

                <div class="col-md-2 col-3 col-sm-4 font-weight-bold">Type</div>
                <div class="col-md-10 col-9 col-sm-8">: {{ props.item.type }}</div>

                <div class="col-md-2 col-3 col-sm-4 font-weight-bold">First Observed</div>
                <div class="col-md-10 col-9 col-sm-8">: {{ props.item.first_observed | moment('MMMM Do YYYY, h:mm:ss a') }}</div>

                <div class="col-md-2 col-3 col-sm-4 font-weight-bold">Last Observed</div>
                <div class="col-md-10 col-9 col-sm-8">: {{ props.item.last_observed | moment('MMMM Do YYYY, h:mm:ss a')
                  }}</div>

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
                <div class="col-md-10 col-9 col-sm-8">: {{ props.item.objects[2].protocols[0] }} - {{
                  props.item.objects[2].protocols[1] }}</div>

                <div class="col-md-2 col-3 col-sm-4 font-weight-bold">Created</div>
                <div class="col-md-10 col-9 col-sm-8">: {{ props.item.created | moment('MMMM Do YYYY, h:mm:ss a') }}</div>

                <div class="col-md-2 col-3 col-sm-4 font-weight-bold">Modified</div>
                <div class="col-md-10 col-9 col-sm-8">: {{ props.item.modified | moment('MMMM Do YYYY, h:mm:ss a') }}</div>
              </div>
            </v-card-text>
          </v-card>
        </template>
      </v-data-table>
    </v-app>
    <!-- </div> -->
  </section>
</template>
<script>
  import * as types from '@/store/types'
  export default {
    name: "ObservedData",
    data() {
      return {
        expand: false,
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
            text: 'Number Observed',
            value: 'number_observed'
          },
          {
            text: 'Created',
            value: 'created'
          },
          {
            text: 'Modified',
            value: 'modified'
          },
          {
            text: 'First Observed',
            value: 'first_observed'
          },
          {
            text: 'Last Observed',
            value: 'last_observed'
          }
        ]
      }
    },
    watch: {
      pagination: {
        handler() {
          this.$store.dispatch(types.GET_ALL_OBSERVED_DATA, this.pagination)
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
<style scoped>

</style>