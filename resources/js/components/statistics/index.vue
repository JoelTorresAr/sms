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
                  <template
                    v-if="
                      filter.type === 'year' ||
                      filter.type === 'month' ||
                      filter.type === 'day'
                    "
                  >
                    <div class="col-md-4">
                      <el-date-picker
                        v-model="filter.year"
                        type="year"
                        format="yyyy"
                        placeholder="Año"
                      >
                      </el-date-picker>
                    </div>
                  </template>
                  <template
                    v-if="filter.type === 'month' || filter.type === 'day'"
                  >
                    <div class="col-md-4">
                      <el-select v-model="filter.month" placeholder="Mes">
                        <el-option
                          v-for="(month, index) in months"
                          :key="index"
                          :label="month.text"
                          :value="month.value"
                        >
                        </el-option>
                      </el-select>
                    </div>
                  </template>
                  <template v-if="filter.type === 'day'">
                    <div class="col-md-4">
                      <el-select v-model="filter.day" placeholder="Dia">
                        <el-option
                          v-for="(day, index) in days"
                          :key="index"
                          :label="day"
                          :value="day"
                        >
                        </el-option>
                      </el-select>
                    </div>
                  </template>
                </div>
              </div>
              <div class="col-sm-12 mt-3">
                <button
                  class="btn btn-primary mb-2"
                  v-loading.fullscreen.lock="fullscreenLoading"
                  @click.passive="getRecords"
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
      months: [
        { value: 1, text: "Enero" },
        { value: 2, text: "Febrero" },
        { value: 3, text: "Marzo" },
        { value: 4, text: "Abril" },
        { value: 5, text: "Mayo" },
        { value: 6, text: "Junio" },
        { value: 7, text: "Julio" },
        { value: 8, text: "Agosto" },
        { value: 9, text: "Setiembre" },
        { value: 10, text: "Octubre" },
        { value: 11, text: "Noviembre" },
        { value: 12, text: "Diciembre" },
      ],
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
              data: [],
              backgroundColor: [
                "rgba(71, 183,132,.5)", // Green
              ],
              borderColor: ["#47b784"],
              borderWidth: 3,
            },
            {
              // another line graph
              label: "No enviados",
              data: [],
              backgroundColor: [
                "rgba(54,73,93,.5)", // Blue
              ],
              borderColor: ["#36495d"],
              borderWidth: 3,
            },
          ],
        },
        options: {
          responsive: true,
          lineTension: 1,
          interaction: {
            // Overrides the global setting
            mode: "index",
          },
          scales: {
            y: {
              suggestedMin: 0,
              //suggestedMax: 5,
            },
          },
        },
      },
      myChart: null,
    };
  },
  computed: {
    days() {
      let days = [];
      //let year = this.filter.year ? this.filter.year.slice(10,14) : '';
      let year = this.filter.year;
      if (year) {
        year = String(year).slice(10, 15);
      }
      let maxDay = new Date(year, this.filter.month, 0).getDate();
      for (let index = 1; index <= maxDay; index++) {
        days.push(index);
      }
      return days;
    },
  },
  watch: {
    "filter.type": {
      handler: function (val, oldVal) {
        this.chartData.data.datasets[0].data = [];
        if (val == "year") {
          let months = this.months.map((item) => item.text);
          this.chartData.data.labels = months;
          this.crearGrafico();
        }
        if (val == "month") {
          this.chartData.data.labels = this.days;
          this.crearGrafico();
        }
        if (val == "day") {
          let hous = [];
          for (let index = 0; index < 24; index++) {
            hous.push(`${index}:00`);
          }
          this.chartData.data.labels = hous;
          this.crearGrafico();
        }
      },
    },
    "filter.year": {
      handler: function (val, oldVal) {
        this.filter.month = null;
      },
    },
    "filter.month": {
      handler: function (val, oldVal) {
        this.filter.day = null;
      },
    },
  },
  mounted() {
    if (this.filter.type == "year") {
      let months = this.months.map((item) => item.text);
      this.chartData.data.labels = months;
    }
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
    crearGrafico(chartId = "statisticsId", chartData = this.chartData) {
      const ctx = document.getElementById(chartId);
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    },
    getRecords() {
      this.filter.post("estadisticas/records").then(({ data }) => {
        if (data.records.length > 0) {
          this.chartData.data.labels.forEach((item, key) => {
            let value = data.records[0].find((element) => {
              return (
                element.text == (this.filter.type == "month" ? item : key + 1)
              );
            });
            if (value) {
              this.chartData.data.datasets[0].data[key] = value.value;
            } else {
              this.chartData.data.datasets[0].data[key] = 0;
            }
          });
          this.crearGrafico();
        }
      });
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
