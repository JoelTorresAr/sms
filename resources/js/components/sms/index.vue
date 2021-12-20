<template>
  <div class="pcoded-content">
    <div class="page-header">
      <div class="page-block">
        <div class="row align-items-center">
          <div class="col-md-12">
            <div class="page-header-title">
              <h5 class="m-b-10">Gestión SMS</h5>
            </div>
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'sms.index' }">
                  Enviar SMS
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-header">
            <div class="row">
              <div class="col-sm-12">
                <form class="form-inline" @submit.prevent>
                  <div class="form-group mx-sm-3 mb-2 fill">
                    <label class="sr-only">Buscar</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Buscar"
                      v-model="filter"
                      @keyup.enter.prevent="getListarClientes"
                    />
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary mb-2"
                    v-loading.fullscreen.lock="fullscreenLoading"
                    @click.passive="getListarClientes"
                  >
                    Buscar
                  </button>
                </form>
              </div>
              <div class="col-sm-12">
                <el-input-number
                  v-model="numMin"
                  controls-position="right"
                  :min="0"
                ></el-input-number>
                <el-input-number
                  v-model="numMax"
                  controls-position="right"
                  :min="0"
                ></el-input-number>
              </div>
            </div>
          </div>
          <div class="card-body table-border-style">
            <el-table
              ref="multipleTable"
              :data="listClientes"
              style="width: 100%"
              max-height="550"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column label="Nombre" width="520">
                <template slot-scope="scope">{{ scope.row.name }}</template>
              </el-table-column>
              <el-table-column label="Teléfono" width="280">
                <template slot-scope="scope">{{
                  scope.row.phone_number
                }}</template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body table-border-style">
            <template v-if="multipleSelection.length">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Eliminar</th>
                      <th>Nombre</th>
                      <th>Teléfono Celular</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in multipleSelection" :key="index">
                      <td>
                        <el-checkbox
                          @change="toggleSelection(item)"
                        ></el-checkbox>
                      </td>
                      <td v-text="item.name"></td>
                      <td v-text="item.phone_number"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>
            <template v-else>
              <div class="alert alert-primary" role="alert">
                No se encontraron registros
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="card">
          <div class="card-body">
            <el-radio-group
              v-model="typeMessage"
              v-for="(item, index) in listTypes"
              :key="index"
              @change="changeTypeMessage"
            >
              <el-radio :label="item">
                <el-tag effect="plain"> {{ item }} </el-tag>
              </el-radio>
            </el-radio-group>
          </div>
        </div>
      </div>
      <div class="col-sm-12" v-if="typeMessage == 'MENSAJE PREDETERMINADO'">
        <div class="card">
          <div class="card-body">
            <el-radio-group
              v-model="record.bodyDefault"
              v-for="(item, index) in listMensajes"
              :key="index"
            >
              <el-radio :label="item.message">
                <el-tag effect="plain"> {{ item.message }} </el-tag>
              </el-radio>
            </el-radio-group>
          </div>
        </div>
      </div>
      <div class="col-sm-12" v-if="typeMessage == 'MENSAJE LIBRE'">
        <div class="card">
          <div class="card-body">
            <form @submit.prevent>
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label for="Cuerpo">Cuerpo (*)</label>
                    <el-input
                      type="textarea"
                      :autosize="{ minRows: 5, maxRows: 14 }"
                      placeholder="Ingrese su mensaje de Texto"
                      :debounce="1500"
                      maxlength="1000"
                      show-word-limit
                      v-model="record.body"
                    >
                    </el-input>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-sm-12" v-if="record.body || record.bodyDefault">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-12">
                <button
                  type="button"
                  class="btn btn-outline-primary has-ripple"
                  @click.prevent="setGuardarSMS"
                  v-loading.fullscreen.lock="fullscreenLoading"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  class="btn btn-outline-info has-ripple"
                  @click.prevent="limpiarCriterios"
                >
                  Limpiar
                </button>
              </div>
            </div>
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
        filter: "",
        numMin: 0,
        numMax: 100,
        listFilter: [],
        listClientes: [],
        listMensajes: [],
        multipleSelection: [],
        record: {
          body: "",
          from: "",
          bodyDefault: "",
        },
        typeMessage: "MENSAJE LIBRE",
        listTypes: ["MENSAJE LIBRE", "MENSAJE PREDETERMINADO"],
        currentPage1: 1,
        page: 0,
        fullscreenLoading: false,
        error: 0,
      };
    },
    mounted() {
      this.getListarClientes();
      this.getListarMensajes();
      this.getPhoneNumberById();
      // Al momento de cargar el componente verifica si esta trayendo consigo un paramaetro (params) denominado enlace
      if (this.$route.params.hasOwnProperty('enlace')) {
        // y lo guarda en la caja de texto
        this.record.body = this.$attrs.enlace
      }
    },
    methods: {
      limpiarCriterios() {
        this.record.to = "";
        this.record.body = "";
        this.record.bodyDefault = "";
        this.typeMessage = "MENSAJE LIBRE";
        this.$refs.multipleTable.clearSelection();
      },
      async getListarClientes() {
        this.fullscreenLoading = true;

        var url = "/operacion/cliente/onlyActive";

        const res = await this.callGetApi("get", url, {
          filter: this.filter,
          numMin: this.numMin,
          numMax: this.numMax,
        });

        if (res.status == 200) {
          this.listClientes = res.data;
        } else {
          if (res.status == 401) {
            this.$router.push({ name: "login" });
            location.reload();
            localStorage.clear();
          }
          if (res.status == 419) {
            this.notification("error", "Fue necesario recargar la página", 0);
            location.reload();
          }
        }

        this.fullscreenLoading = false;
      },
      async getPhoneNumberById() {
        this.fullscreenLoading = true;

        var url = "/configuracion/telefono/show";

        const res = await this.callApi("get", url);

        if (res.status == 200) {
          if (Object.keys(res.data).length > 0) {
            this.record.from = res.data.phone_number
              ? res.data.phone_number.startsWith("9")
                ? "51" + res.data.phone_number
                : res.data.phone_number
              : "";
          }
        } else {
          if (res.status == 401) {
            this.$router.push({ name: "login" });
            location.reload();
            localStorage.clear();
          }
          if (res.status == 419) {
            this.notification("error", "Fue necesario recargar la página", 0);
            location.reload();
          }
        }
        this.fullscreenLoading = false;
      },
      async getListarMensajes() {
        this.fullscreenLoading = true;

        var url = "/configuracion/mensaje/index";

        const res = await this.callGetApi("get", url, {
          filter: this.filter,
        });

        if (res.status == 200) {
          this.listMensajes = res.data;
        } else {
          if (res.status == 401) {
            this.$router.push({ name: "login" });
            location.reload();
            localStorage.clear();
          }
          if (res.status == 419) {
            this.notification("error", "Fue necesario recargar la página", 0);
            location.reload();
          }
        }
        this.fullscreenLoading = false;
      },

      /**
       * Cliente para enviar SMS
       *
       * @param   {[type]}  val  [val description]
       *
       * @return  {[type]}       [return description]
       */
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      /**
       * Deseleccionar un cliente
       *
       * @param   {[type]}  row  [row description]
       *
       * @return  {[type]}       [return description]
       */
      toggleSelection(row) {
        if (row) {
          this.$refs.multipleTable.toggleRowSelection(row);
        }
      },
      changeTypeMessage() {
        this.record.body = "";
        this.record.bodyDefault = "";
      },

      setGuardarSMS() {
        if (this.validarRegistrarSMS()) {
          return;
        }
        this.fullscreenLoading = true;

        this.preparteData(
          this.multipleSelection.length > 0
            ? this.multipleSelection
            : this.listClientes
        );
      },
      preparteData(data) {
        var recipients = [];
        // recorro todos los clientes
        data.forEach((element) => {
          // verifica si el numero tiene mas numeros
          if (element.phone_number.indexOf(",") != -1) {
            // si es asi convierto los numeros en array
            var phones = element.phone_number.split(",");
            // recorro todos los telefonos
            phones.forEach((value) => {
              recipients.push({
                id: element.id,
                name: element.name,
                phone_number: value,
              });
            });
          } else {
            recipients.push({
              id: element.id,
              name: element.name,
              phone_number: element.phone_number,
            });
          }
        });

        this.setRegistrarSMS(recipients);
      },
      async setRegistrarSMS(recipients) {
        var url = "/operacion/sms/send";

        const res = await this.callApi("post", url, {
          record: this.record,
          recipients: recipients,
          typeMessage: this.typeMessage == "MENSAJE LIBRE" ? 1 : 0,
        });

        if (res.status == 200) {
          this.notification("success", "Registro creado con éxito", 0);
          this.limpiarCriterios();
        } else {
          if (res.status == 422) {
            for (let i in res.data.errors) {
              this.notification("error", res.data.errors[i][0]);
            }
          }
          if (res.status == 401) {
            this.$router.push({ name: "login" });
            location.reload();
            localStorage.clear();
          }
          if (res.status == 419) {
            this.notification("error", "Fue necesario recargar la página", 0);
            location.reload();
          }
        }
        this.fullscreenLoading = false;
      },
      validarRegistrarSMS() {
        this.error = 0;

        if (!this.record.from) {
          this.notification(
            "error",
            "El Número de Origen es un campo obligatorio",
            10
          );
          this.error = 1;
        }
        if (this.typeMessage == "MENSAJE LIBRE") {
          if (!this.record.body) {
            this.notification("error", "El cuerpo es un campo obligatorio", 10);
            this.error = 1;
          }
        } else {
          if (!this.record.bodyDefault) {
            this.notification(
              "error",
              "El Mensaje Predeterminado es obligatorio",
              10
            );
            this.error = 1;
          }
        }

        return this.error;
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
