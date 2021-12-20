<template>
  <div class="pcoded-content">
    <div class="page-header">
      <div class="page-block">
        <div class="row align-items-center">
          <div class="col-md-12">
            <div class="page-header-title">
              <h5 class="m-b-10">Gestión Clientes</h5>
            </div>
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'cliente.importar' }">
                  <i class="fas fa-users"></i>
                </router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'cliente.importar' }">
                  Importar Clientes
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <div class="row">
              <!-- <div class="col-sm-6">
                                <form class="form-inline" @submit.prevent>
                                    <div class="form-group mx-sm-3 mb-2 fill">
                                        <label class="sr-only">Buscar</label>
                                        <input type="text" class="form-control" placeholder="Buscar" v-model="filter" v-loading.fullscreen.lock="fullscreenLoading">
                                    </div>
                                </form>
                            </div> -->
              <div class="col-sm-12">
                <div class="btn-actions">
                  <input
                    ref="fileupload"
                    type="file"
                    class="form-control"
                    :disabled="listClientes.length == 0 ? false : true"
                    :readonly="listClientes.length == 0 ? false : true"
                    @change.prevent="previewFiles"
                    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    v-loading.fullscreen.lock="fullscreenLoading"
                  />

                  <el-tooltip
                    content="Limpiar Archivo"
                    placement="bottom"
                    effect="light"
                    v-if="listClientes.length > 0"
                  >
                    <button
                      type="button"
                      class="btn btn-primary mb-2"
                      @click.prevent="limpiarFiltro"
                    >
                      <i class="fas fa-times"></i>
                    </button>
                  </el-tooltip>
                  <el-tooltip
                    content="Guardar Archivo"
                    placement="bottom"
                    effect="light"
                    v-if="listClientes.length > 0"
                  >
                    <button
                      type="button"
                      class="btn btn-success mb-2"
                      v-loading.fullscreen.lock="fullscreenLoading"
                      @click.passive="setRegistrarCliente"
                    >
                      <i class="far fa-save"></i>
                    </button>
                  </el-tooltip>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body table-border-style">
            <div class="table-responsive">
              <template v-if="filterRecords.length">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Código</th>
                      <th>Nombre</th>
                      <th>Dirección</th>
                      <th>Lugar</th>
                      <th>Teléfonos</th>
                      <th>Tipo</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in filterRecords" :key="index">
                      <td v-text="item.code"></td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="item.name"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="item.address"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="item.place"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="item.phone_number"
                        />
                      </td>
                      <td v-text="item.tipo_name"></td>
                      <td>
                        <el-tooltip
                          class="item"
                          effect="dark"
                          content="Desactivar Cliente"
                          placement="top"
                        >
                          <button
                            class="btn btn-icon btn-outline-danger"
                            @click.prevent="eliminarFila(item.pos)"
                          >
                            <i class="fas fa-trash"></i>
                          </button>
                        </el-tooltip>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </template>
              <template v-else>
                <div class="alert alert-primary" role="alert">
                  No se encontraron registros
                </div>
              </template>
            </div>
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage1"
              :page-size="10"
              layout="total, prev, pager, next"
              :total="listClientes.length"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import XLSX from "xlsx";

  export default {
    data() {
      return {
        filter: "",
        listFilter: [],
        listClientes: [],
        listTipos: [],
        fullscreenLoading: false,
        currentPage1: 1,
        page: 0,
      };
    },
    computed: {
      filterRecords() {
        if (!this.filter || this.filter == "") {
          if (this.page == 0) {
            if (this.listClientes.length > 0) {
              this.listFilter = this.listClientes.slice(0, 10);
            }
          }
          return this.listFilter.filter((object) => {
            return (
              object.name.toLowerCase().indexOf(this.filter.toLowerCase()) != -1
            );
          });
        } else {
          this.page = 0;
          return (this.listFilter = this.listClientes.filter((object) => {
            return (
              object.name.toLowerCase().indexOf(this.filter.toLowerCase()) != -1
            );
          }));
        }
      },
    },
    mounted() {
      this.getListarTipos();
    },
    methods: {
      handleSizeChange(val) {
        console.log(`${val} items per page`);
      },
      handleCurrentChange(val = 0) {
        this.page = val;

        if (val == 0) {
          val = 0;
        } else {
          val = val - 1;
        }

        let inicio = val * 10,
          fin = inicio + 10;
        this.listFilter = this.listClientes.slice(inicio, fin);
      },
      async getListarTipos() {
        this.fullscreenLoading = true;

        var url = "/configuracion/tipo/index";

        const res = await this.callGetApi("get", url);

        if (res.status == 200) {
          this.listTipos = res.data;
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
      eliminarFila(pos) {
        // console.log(index);
        // this.$delete(this.listClientes, index);
        this.listClientes.splice(
          this.listClientes.findIndex((item) => item.pos === pos),
          1
        );
        this.handleCurrentChange(this.page);
      },
      previewFiles(e) {
        if (this.validarReadAsistencias(e)) {
          return;
        }
        this.fullscreenLoading = true;

        let me = this;
        var files = e.target.files,
          f = files[0];
        // El objeto FileReader permite que las aplicaciones web lean ficheros (o información en buffer) almacenados en el cliente de forma asíncrona
        var reader = new FileReader();
        // onload Este evento se activa cada vez que la operación de lectura se ha completado satisfactoriamente
        reader.onload = function (e) {
          // Los Uint8Array representan un array de enteros sin signo de 8 bits
          var data = new Uint8Array(e.target.result);
          // Lee los documentos
          var workbook = XLSX.read(data, {
            type: "array",
            cellDates: true,
            dateNF: "yyyy/mm/dd;@",
          });
          // SheetNames: es una lista ordenada de las hojas en el libro de trabajo
          let sheetName = workbook.SheetNames[0];
          /* hacer algo con el workbook aqui */
          // Sheets: devuelve un objeto que representa la hoja de trabajo
          let worksheet = workbook.Sheets[sheetName];
          // console.log(worksheet);
          // XLSX.utils.sheet_to_json: genera diferentes tipos de objetos JS. La función toma un argumento de opciones
          me.setImportarExcel(XLSX.utils.sheet_to_json(worksheet));
        };
        reader.readAsArrayBuffer(f);
      },
      setImportarExcel(data) {
        data.forEach((element, pos) => {
          var index = this.listTipos.filter((tipos) => {
            return (
              tipos.name
                .toUpperCase()
                .toString()
                .indexOf(element.tipo.toUpperCase().toString()) === 0
            );
          });

          // Limpiar cadenas
          let cadenaFilter1 = element.telefonos.toString().replace("*", "");
          let cadenaFilter2 = cadenaFilter1.toString().replace("#", "");
          let cadenaFilter3 = cadenaFilter2.toString().replace("-", "");

          // Buscar telefonos fijos y agregar el 51 (código Perú)
          var arrayPhones = [];
          var phones = cadenaFilter3.split(",");
          phones.forEach((phone) => {
            if (phone.length == 9 && phone.startsWith("9")) {
              arrayPhones.push("51" + phone);
            }
          });
          let phone_numbers = arrayPhones.join();

          if (phone_numbers && index.length > 0) {
            this.listClientes.push({
              pos: pos,
              code: element.adcodigo,
              name: element.nombre,
              address: element.direccion,
              place: element.lugar,
              phone_number: phone_numbers,
              tipo_id: index[0].id,
              tipo_name: index[0].name,
            });
          }
        });
        this.handleCurrentChange();
        this.fullscreenLoading = false;
      },
      validarReadAsistencias(e) {
        this.error = 0;

        if (!e || e == undefined || e == null) {
          this.notification("error", "No ha seleccionado un archivo", 0);
          this.error = 1;
        }
        return this.error;
      },
      limpiarFiltro() {
        this.listClientes = [];
        this.listFilter = [];
        this.$refs.fileupload.value = null;
      },
      async setRegistrarCliente() {
        if (this.validarRegistrarCliente()) {
          return;
        }

        this.fullscreenLoading = true;

        let listClientesFilter = [];
        this.listClientes.forEach((element) => {
          listClientesFilter.push({
            code: element.code,
            name: element.name,
            address: element.address,
            place: element.place,
            phone_number: element.phone_number,
            tipo_id: element.tipo_id,
          });
        });

        var url = "/operacion/cliente/storeMultiple";

        const res = await this.callApi("post", url, {
          listClientes: listClientesFilter,
        });

        if (res.status == 200) {
          this.notification("success", "Archivos creados con éxito", 0);
          this.$router.push("/cliente");
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
      validarRegistrarCliente() {
        this.error = 0;

        if (!this.listClientes || this.listClientes.length == 0) {
          this.notification(
            "error",
            "Debe cargar un archivo en formato Excel",
            0
          );
          this.error = 1;
        }

        return this.error;
      },
    },
  };
</script>