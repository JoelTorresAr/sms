<template>
  <div class="pcoded-content">
    <div class="page-header">
      <div class="page-block">
        <div class="row align-items-center">
          <div class="col-md-12">
            <div class="page-header-title">
              <h5 class="m-b-10">Estadisticas</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <div class="row">
              <div class="col-sm-12 text-center">
                <el-radio-group v-model="filter.type">
                  <el-radio :label="'year'">Estadisticas por año</el-radio>
                  <el-radio :label="'month'">Estadisticas por mes</el-radio>
                  <el-radio :label="'day'">Estadisticas por día</el-radio>
                </el-radio-group>
              </div>
              <div class="col-sm-12 text-center">
                <div class="row text-center">
                  <template v-if="filter.type === 'year'">
                    <div class="col-md-4">
                      <el-date-picker
                        v-model="filter.year"
                        type="year"
                        placeholder="Año"
                      >
                      </el-date-picker>
                    </div>
                  </template>
                  <template v-if="filter.type === 'month'">
                    <div class="col-md-4">
                      <el-date-picker
                        v-model="filter.month"
                        type="month"
                        placeholder="Mes"
                      >
                      </el-date-picker>
                    </div>
                  </template>
                  <template v-if="filter.type === 'day'">
                    <div class="col-md-4">
                      <el-date-picker
                        v-model="filter.day"
                        type="date"
                        placeholder="Dia"
                      >
                      </el-date-picker>
                    </div>
                  </template>
                </div>
              </div>
              <div class="col-sm-12 mt-3">
                <button
                  class="btn btn-primary mb-2"
                  v-loading.fullscreen.lock="fullscreenLoading"
                  @click.passive="getListarClientes"
                >
                  Buscar
                </button>
              </div>
            </div>
          </div>
          <div class="card-body table-border-style">
            <canvas id="statisticsId" width="80rem" height="20rem"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: new Form({
        type: "year",
        year: null,
        month: null,
        day: null,
      }),
      fullscreenLoading: false,
      chartData: {
        type: "line",
        data: {
          labels: [
            "Mercury",
            "Venus",
            "Earth",
            "Mars",
            "Jupiter",
            "Saturn",
            "Uranus",
            "Neptune",
          ],
          datasets: [
            {
              // one line graph
              label: "Enviados",
              data: [0, 0, 1, 2, 67, 62, 27, 14],
              backgroundColor: [
                "rgba(54,73,93,.5)", // Blue
              ],
              borderColor: ["#36495d"],
              borderWidth: 3,
            },
            {
              // another line graph
              label: "No enviados",
              data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
              backgroundColor: [
                "rgba(71, 183,132,.5)", // Green
              ],
              borderColor: ["#47b784"],
              borderWidth: 3,
            },
          ],
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            y: {
              suggestedMin: 50,
              suggestedMax: 100,
            },
          },
        },
      },
    };
  },
  watch: {
    "filter.type": {
      handler: function (val, oldVal) {
        this.filter.year = null;
        this.filter.month = null;
        this.filter.day = null;
      },
    },
  },
  mounted() {
    this.crearGrafico("statisticsId", this.chartData);
  },
  methods: {
    limpiarCriterios() {
      this.record.to = "";
      this.record.body = "";
      this.record.bodyDefault = "";
      this.typeMessage = "MENSAJE LIBRE";
      this.$refs.multipleTable.clearSelection();
    },
    crearGrafico(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    },
    getRecords() {
      this.filter.post('estadisticas/records').then(({ data }) => {});
    },
  },
};
</script>

<style scoped>
/* .el-radio-group{
          display: flex;
          justify-content: flex-start;
          align-items: center;
      } */
</style>
