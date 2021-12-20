
<template>
  <div class="pcoded-content">
    <div class="page-header">
      <div class="page-block">
        <div class="row align-items-center">
          <div class="col-md-12">
            <div class="page-header-title">
              <h5 class="m-b-10">Gestión Productos</h5>
            </div>
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'landing.page' }">
                  <i class="fas fa-users"></i>
                </router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'landing.page' }">
                  Navegar entre Productos
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
              <div class="col-sm-6">
                <form class="form-inline" @submit.prevent>
                  <div class="form-group mx-sm-3 mb-2 fill">
                    <label class="sr-only">Buscar</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Buscar"
                      v-model="filter"
                      @keyup.enter.prevent="getListarProductos"
                    />
                  </div>

                  <button
                    type="button"
                    class="btn btn-primary mb-2"
                    v-loading.fullscreen.lock="fullscreenLoading"
                    @click.passive="getListarProductos"
                  >
                    Buscar
                  </button>
                </form>
              </div>
              <div
                class="btn-group card-option"
                v-if="listPermissions.includes('producto.crear')"
              >
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="Nuevo Producto"
                  placement="top"
                >
                  <router-link
                    class="btn btn-icon btn-outline-primary"
                    :to="{ name: 'producto.crear' }"
                  >
                    <i class="feather icon-plus"></i>
                  </router-link>
                </el-tooltip>
              </div>
              <!--<div class="col-sm-6">
                                <div class="btn-actions">
                                    <div class="btn-group card-option" v-if="listPermissions.includes('cliente.importar')">
                                        <el-tooltip class="item" effect="dark" content="Importar Cliente" placement="top">
                                            <router-link class="btn  btn-icon btn-outline-success" :to="{name:'cliente.importar'}">
                                                <i class="fas fa-cloud-upload-alt"></i>
                                            </router-link>
                                        </el-tooltip>
                                    </div>
                                    <div class="btn-group card-option" v-if="listPermissions.includes('cliente.crear')">
                                        <el-tooltip class="item" effect="dark" content="Nuevo Cliente" placement="top">
                                            <router-link class="btn  btn-icon btn-outline-primary" :to="{name:'cliente.crear'}">
                                                <i class="feather icon-plus"></i>
                                            </router-link>
                                        </el-tooltip>
                                    </div>
                                </div>
                            </div>-->
            </div>
          </div>
          <div class="card-body table-border-style">
            <div class="table-responsive">
              <template v-if="listFilter.length">
                <table class="table table-hover">
                  <thead>
                    <tr>
                     <th>Nombre</th>
                     <th>Detalle</th>
                      <th>Precio</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in listFilter" :key="index">
                      <td v-text="item.description"></td>
                      <td v-text="item.detalle"></td>
                      <td v-text="item.price"></td>
                      <td>
                        <el-tag
                          v-if="item.status == 'A'"
                          type="success"
                          v-text="item.status_description"
                        ></el-tag>
                        <el-tag
                          v-else
                          type="danger"
                          v-text="item.status_description"
                        ></el-tag>
                      </td>

                      <td>
                        <template v-if="item.status == 'A'">
                          <el-tooltip
                            class="item"
                            effect="dark"
                            content="Editar Producto"
                            placement="top"
                            v-if="listPermissions.includes('producto.editar')"
                          >
                            <router-link
                              class="btn btn-icon btn-outline-primary"
                              :to="{
                                name: 'producto.editar',
                                params: { id: item.id },
                              }"
                            >
                              <i class="feather icon-edit"></i>
                            </router-link>
                          </el-tooltip>
                          <el-tooltip
                            class="item"
                            effect="dark"
                            content="Desactivar Producto"
                            placement="top"
                            v-if="
                              listPermissions.includes('producto.desactivar')
                            "
                          >
                            <button
                              class="btn btn-icon btn-outline-danger"
                              @click.prevent="
                                setCambiarEstadoProducto(1, item.id)
                              "
                            >
                              <i class="fas fa-eye-slash"></i>
                            </button>
                          </el-tooltip>
                        </template>

                        <template v-else>
                          <el-tooltip
                            class="item"
                            effect="dark"
                            content="Activar Producto"
                            placement="top"
                            v-if="listPermissions.includes('producto.activar')"
                          >
                            <button
                              class="btn btn-icon btn-outline-danger"
                              @click.prevent="
                                setCambiarEstadoProducto(2, item.id)
                              "
                            >
                              <i class="fas fa-eye"></i>
                            </button>
                          </el-tooltip>
                        </template>
                        <el-tooltip
                          class="item"
                          effect="dark"
                          content="Enviar Mensaje"
                          placement="top"
                        >
                          <button
                            class="btn btn-icon btn-outline-primary"
                            @click.prevent="abrirLandingPage(item)"
                          >
                            <i class="fas fa-sms"></i>
                          </button>

                        </el-tooltip>

                           <el-tooltip
                          class="item"
                          effect="dark"
                          content="Copiar Enlace"
                          placement="top"
                        >
                          <button
                            class="btn btn-icon btn-outline-primary"
                            @click.prevent="abrirLandingPage2(item)"
                          >
                          <i class="fas fa-link"></i>
                          </button>
                        </el-tooltip>
                            <el-tooltip
                          class="item"
                          effect="dark"
                          content="Abrir LandingPage"
                          placement="top"
                        >
                          <button
                            class="btn btn-icon btn-outline-primary"
                            @click.prevent="abrirExternalLandingPage(item)"
                          >
                          <i class="fas fa-external-link-alt"></i>
                          </button>

                        </el-tooltip>

                      </td>
                    </tr>
                  </tbody>
                </table>
                <el-pagination
                  background
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage1"
                  :page-size="10"
                  layout="total, prev, pager, next"
                  :total="listProductos.length"
                >
                </el-pagination>
              </template>
              <template v-else>
                <div class="alert alert-primary" role="alert">
                  No se encontraron registros
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--<el-dialog title="Detalle de la Acción" :visible.sync="modalLog" width="85%" :close-on-click-modal="false">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-body table-border-style">
                            <pre>{{ record.json | pretty }}</pre>
                        </div>
                    </div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="abrirModal">Cerrar</el-button>
            </span>
        </el-dialog>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: "",
      listFilter: [],
      listProductos: [],
      fullscreenLoading: false,
      currentPage1: 1,
      page: 0,
    };
  },
  mounted() {
    this.getListarProductos();
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
      this.listFilter = this.listProductos.slice(inicio, fin);
    },
    async getListarProductos() {
      this.fullscreenLoading = true;

      var url = "/landing/landing-page/index";

      const res = await this.callGetApi("get", url, {
        filter: this.filter,
      });

      if (res.status == 200) {
        this.listProductos = res.data;
        this.handleCurrentChange();
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
    async abrirLandingPage(item) {
      // let link = item.link;
      // let url = "storage/public/laptop.jpg";
      // window.open(
      //   "http://landing.ariadna.store/landing_page/web-design/contacts.html?" +
      //     url,
      //   "__blank"
      // );
      this.fullscreenLoading = true;

      var url = "/landing/landing-page/getURI";

      const res = await this.callGetApi("get", url, {
        id: item.id,
      });

      if (res.status == 200) {
        // console.log(res.data);
        // this.copyURL(res.data)
        this.$router.replace({
          name: 'sms.index',
          params: { enlace: res.data }
        })
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
    async abrirLandingPage2(item) {
      // let link = item.link;
      // let url = "storage/public/laptop.jpg";
      // window.open(
      //   "http://landing.ariadna.store/landing_page/web-design/contacts.html?" +
      //     url,
      //   "__blank"
      // );
      this.fullscreenLoading = true;

      var url = "/landing/landing-page/getURI";

      const res = await this.callGetApi("get", url, {
        id: item.id,
      });

      if (res.status == 200) {
        this.copyURL(res.data)
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
    async abrirExternalLandingPage(item) {
      this.fullscreenLoading = true;

      var url = "/landing/landing-page/getURI";

      const res = await this.callGetApi("get", url, {
        id: item.id,
      });

      if (res.status == 200) {
        window.open(
        `${res.data}`,
        "_blank"
      );
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
    async copyURL(mytext) {
      try {
        await copy(mytext);
      } catch ($e) {
        alert("Cannot copy");
      }
    },
    // abrirModalByOption(modulo, accion, data){
    //  switch (modulo) {
    //    case "landing-page":
    //  {
    //    switch (accion) {
    //      case "ver":
    //    {
    //Setear información del arreglo
    //      this.record.json    =   data.response;
    //    this.modalLog       =   true
    // }
    //break;
    //default:
    //  break;
    //}
    //}
    //break;
    //default:
    //  break;
    //}
    //},
    setCambiarEstadoProducto(op, id) {
      this.$swal
        .fire({
          title:
            "¿Está seguro de " +
            (op == 1 ? "desactivar" : "activar") +
            " el cliente?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#2196F3",
          cancelButtonColor: "#F44336",
          confirmButtonText: op == 1 ? "Si, desactivar" : "Si, activar",
        })
        .then((result) => {
          if (result.value) {
            this.fullscreenLoading = true;
            var url = "/landing/landing-page/destroy/" + id;

            axios
              .delete(url, {
                params: {
                  status: op == 1 ? "I" : "A",
                },
              })
              .then((response) => {
                this.notification(
                  "success",
                  "Se " + (op == 1 ? "desactivo" : "activo") + " el cliente",
                  0
                );
                this.getListarProductos();
              })
              .catch((error) => {
                if (error.response.status == 401) {
                  this.$router.push({ name: "login" });
                  location.reload();
                  localStorage.clear();
                  this.fullscreenLoading = false;
                }
                if (error.response.status == 419) {
                  this.notification(
                    "error",
                    "Fue necesario recargar la página",
                    0
                  );
                  location.reload();
                }
              });
          }
        });
    },
  },
};
</script>

<style scoped>
</style>
