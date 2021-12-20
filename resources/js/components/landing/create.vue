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
                <router-link :to="{ name: 'producto.crear' }">
                  Crear Producto
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
            <div class="col-sm-12">
              <div class="btn-actions">
                <div class="btn-group card-option">
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="Regresar"
                    placement="top"
                  >
                    <button
                      class="btn btn-icon btn-outline-primary"
                      @click.prevent="goBack"
                    >
                      <i class="fas fa-arrow-left"></i>
                    </button>
                  </el-tooltip>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <form @submit.prevent>
              <div class="row">
                <!-- <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="Nombre">Nombre (*)</label>
                                        <input type="text" class="form-control" id="Nombre" placeholder="Nombre" v-model="record.description" @keyup.enter="setRegistrarProducto">
                                    </div>
                                </div>-->
                <!--  <div class="col-sm-12">
                  <div class="form-group">
                    <label for="Cliente">Clientes (*)</label>
                    <el-select
                      v-model="record.client_id"
                      placeholder="Cliente"
                      filterable
                    >
                      <el-option
                        v-for="item in listClientes"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      >
                      </el-option>
                    </el-select>
                  </div>
                </div>-->

                 <div class="col-sm-6">
                  <div class="form-group">
                    <label for="Titulo">Titulo (*)</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Titulo"
                      placeholder="Titulo"
                      v-model="record.titulo"
                      @keyup.enter="setRegistrarProducto"
                    />
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="Nombre">Nombre (*)</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Nombre"
                      placeholder="Nombre"
                      v-model="record.description"
                      @keyup.enter="setRegistrarProducto"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="Detalle">Detalle (*)</label>
                    <textarea
                      type="text"
                      class="form-control"
                      id="Detalle"
                      placeholder="Detalle"
                      v-model="record.detalle"
                      @keyup.enter="setRegistrarProducto"
                    />
                  </div>
                </div>
              </div>
               <div class="col-sm-6">
                  <div class="form-group">
                    <label for="Promesa">Promesa (*)</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Promesa"
                      placeholder="Promesa"
                      v-model="record.promesa"
                      @keyup.enter="setRegistrarProducto"
                    />
                  </div>
                </div>

              <div class="col-sm-6">
                <div class="form-group">
                  <label for="Tipomedia">Tipomedia (*)</label>
                  <el-select
                    v-model="record.tipomedia_id"
                    placeholder="Tipomedia"
                    filterable
                  >
                    <el-option
                      v-for="item in listTipomedia"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                    >
                    </el-option>
                  </el-select>
                </div>
              </div>
              <!-- <div class="col-sm-6">
                  <div class="form-group">
                    <label for="Media">Tipo_media (*)</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Media"
                      placeholder="Media"
                      v-model="record.media"
                      @keyup.enter="setRegistrarProducto"
                    />
                  </div>
                </div>-->
              <div class="col-sm-6">
                <template v-if="record.tipomedia_id == 1">
                  <div class="form-group">
                    <label for="Archivo">Archivo</label>
                    <input
                      type="file"
                      class="form-control"
                      :class="record.media ? ' image-selected' : ''"
                      @change="getFile"
                    />
                  </div>
                </template>
                <template v-if="record.tipomedia_id == 2">
                  <div class="form-group">
                    <label for="Nombre">URL del Video(*)</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Urlvideo"
                      placeholder="URL Video"
                      v-model="record.video_url"
                    />
                  </div>
                </template>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="Tipomoneda">Tipomoneda (*)</label>
                  <el-select
                    v-model="record.tipomoneda_id"
                    placeholder="Tipomoneda"
                    filterable
                  >
                    <el-option
                      v-for="item in listTipomoneda"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                    >
                    </el-option>
                  </el-select>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="form-group">
                  <label for="Ubicacion">Ubicacion (*)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Ubicacion"
                    placeholder="Ubicacion"
                    v-model="record.ubicacion"
                    @keyup.enter="setRegistrarProducto"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="Telefono">Telefono (*)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Telefono"
                    placeholder="Telefono"
                    v-model="record.telefono"
                    @keyup.enter="setRegistrarProducto"
                  />
                </div>
              </div>
              <!-- <div class="col-sm-6">
                  <div class="form-group">
                    <label for="Descripcion">Descripcion (*)</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Deacripcion"
                      placeholder="Deacripcion"
                      v-model="record.descripcion"
                      @keyup.enter="setRegistrarProducto"
                    />
                  </div>
                </div>-->
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="Pago"
                    ><input
                      type="checkbox"
                      v-model="record.pago_is"
                      class="mr-2"
                    />Pago (*)</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="Pago"
                    placeholder="Pago"
                    :disabled="!record.pago_is"
                    v-model="record.pago"
                    @keyup.enter="setRegistrarProducto"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="Correo_notificacion"
                    >Correo_notificacion(*)</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="Correo_notificacion"
                    placeholder="Correo_notificacion"
                    v-model="record.correo_notificacion"
                    @keyup.enter="setRegistrarProducto"
                  />
                </div>
              </div>
              <h4>PERSONALIZACIÓN DE LADINGPAGE</h4>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="">Archivo</label>
                  <input
                    type="file"
                    class="form-control"
                    :class="record.image_fondo_id ? ' image-selected' : ''"
                    @change="getFileFondo"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="Color">Color Cuerpo(*)</label>
                  <input type="hidden" value="rpt" id="idcolor" />
                  <input
                    type="color"
                    class="form-control"
                    id="Color"
                    placeholder="Color"
                    v-model="record.color"
                    @keyup.enter="setRegistrarProducto"
                  />
                </div>
              </div>

              <div class="col-sm-6">
                <div class="form-group">
                  <label for="colorcabezera">Color Cabezera(*)</label>
                  <input
                    type="color"
                    class="form-control"
                    id="Colorcabezera"
                    placeholder="Colorcabezera"
                    v-model="record.colorcabezera"
                    @keyup.enter="setRegistrarProducto"
                  />
                </div>
              </div>

               <div class="col-sm-6">
                  <div class="form-group">
                    <label for="Titulo_formulario">Titulo Formulario (*)</label>
                    <textarea
                      type="text"
                      class="form-control"
                      id="Titulo_formulario"
                      placeholder="Titulo_formulario"
                      v-model="record.titulo_formulario"
                      @keyup.enter="setRegistrarProducto"
                    />
                  </div>
                </div>

              <div class="col-sm-6">
                <div class="form-group">
                  <label for="colorformulario">Color Furmulario(*)</label>
                  <input
                    type="color"
                    class="form-control"
                    id="Colorformulario"
                    placeholder="Colorformulario"
                    v-model="record.colorformulario"
                    @keyup.enter="setRegistrarProducto"
                  />
                </div>
              </div>

              <!-- <div class="col-sm-6">
                  <div class="form-group">
                    <label for="ColorC">Color cabezera(*)</label>
                    <input
                      type="color"
                      class="form-control"
                      id="ColorC"
                      placeholder="ColorC"
                      v-model="record.colorC"
                      @keyup.enter="setRegistrarColorC"
                    />
                  </div>
                </div>-->

              <div class="col-sm-6">
                <div class="form-group">
                  <label for="Tamañoletra">Tamaño de letra(*)</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                  </select>
                  <select
                    class="form-control"
                    id="Tamañoletra"
                    placeholder="Tamañoletra"
                    v-model="record.tamañoletra"
                    @keyup.enter="setGuardarProducto"
                  ></select>
                </div>
              </div>

              <!-- <div class="col-sm-6">
                <div class="form-group">
                  <label for="Archivo">Archivo</label>
                  <input
                    type="file"
                    class="form-control"
                    :class="record.image ? ' image-selected' : ''"
                    @change="getFile"
                  />
                </div>
              </div>-->
              <div class="row">
                <div class="col-sm-12">
                  <button
                    type="button"
                    class="btn btn-outline-primary has-ripple"
                    @click.prevent="setRegistrarProducto"
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
            </form>
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
      record: {
        description: "",
        detalle: "",
        titulo:"",
        price: "",
        //  media: "",
        ubicacion: "",
        telefono: "",
        pago: "",
        pago_is: false,
        correo_notificacion: "",
        color: "",
        colorcabezera: "",
        colorformulario:"",
        tamañoletra: "",
        image: "",
        image_fondo: "",
        titulo_formulario:"",
        promesa:"",
        tipomedia_id: "",
        tipomoneda_id: "",
        image_fondo_id: "",
        file_id: "",
        video_url: "",
      },
      listTipomedia: [],
      fullscreenLoading: false,
      form: new FormData(),
      error: 0,
      listTipomoneda: [],
      fullscreenLoading: false,
      error: 0,
    };
  },
  watch: {
    "record.pago_is": {
      handler: function (val) {
        this.record.pago = "";
      },
    },
  },
  mounted() {
    this.getListarTipomedia();
    this.getListarTipomoneda();
  },
  // mounted() {
  /// this.getListarClientes();
  // },
  methods: {
    limpiarCriterios() {
      this.record.description = "";
      this.record.detalle = "";
      this.record.titulo="";
      this.record.titulo_formulario="";
      this.record.colorformulario="";
      this.record.promesa="";
      this.record.price = "";
      //  this.record.media = "";
      // this.record.tipo_media = "";
      // this.record.media = "";
      //  this.record.moneda = "";
      this.record.ubicacion = "";
      this.record.telefono = "";
      this.record.pago = "";
      this.record.correo_notificacion = "";
      this.record.image_fondo = "";
      this.record.color = "";
      this.record.colorcabezera = "";
      this.record.tamañoletra = "";
      this.record.tipomedia_id = "";
      this.record.tipomoneda_id = "";

      // this.record.client_id = "";
    },
    getFile(e) {
      this.record.image = e.target.files[0];
    },
    getFileFondo(e) {
      this.record.image_fondo = e.target.files[0];
    },
    //async getListarClientes() {
    //this.fullscreenLoading = true;

    //var url = "/operacion/cliente/index";

    //const res = await this.callApi("get", url);

    //if (res.status == 200) {
    //this.listClientes = res.data;
    // } else {
    // if (res.status == 401) {
    // this.$router.push({ name: "login" });
    //location.reload();
    //localStorage.clear();
    //  }
    //if (res.status == 419) {
    //this.notification("error", "Fue necesario recargar la página", 0);
    //location.reload();
    // }
    // }
    //this.fullscreenLoading = false;
    // },

    //traer imagen
    // getFile(e) {
    // this.record.image = e.target.files[0];
    // },

    //async setRegistrarProducto() {
    // if (this.validarRegistrarProducto()) {
    // return;
    // }

    //this.fullscreenLoading = true;

    //var url = "/landing/landing-page/store";

    //const res = await this.callApi("post", url, this.record);

    //if (res.status == 200) {
    //this.notification("success", "Registro creado con éxito", 0);
    //this.$router.push("/landing-page");
    //} else {
    //if (res.status == 422) {
    //for (let i in res.data.errors) {
    //this.notification("error", res.data.errors[i][0]);
    //}
    // }
    //if (res.status == 401) {
    // this.$router.push({ name: "login" });
    //location.reload();
    //localStorage.clear();
    // }
    //if (res.status == 419) {
    // this.notification("error", "Fue necesario recargar la página", 0);
    //location.reload();
    //}
    //}
    //this.fullscreenLoading = false;
    //},
    async getListarTipomedia() {
      this.fullscreenLoading = true;

      var url = "/configuracion/tipomedia/index";

      const res = await this.callApi("get", url);

      if (res.status == 200) {
        this.listTipomedia = res.data;
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
    async getListarTipomoneda() {
      this.fullscreenLoading = true;

      var url = "/configuracion/tipomoneda/index";

      const res = await this.callApi("get", url);

      if (res.status == 200) {
        this.listTipomoneda = res.data;
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
    //async setRegistrarProducto(){
    //if (this.validarRegistrarProducto()) {
    //  return;
    // }

    //this.fullscreenLoading = true;
    //if (!this.record.image || this.record.image == undefined) {
    // this.setGuardarUsuario();
    // } else {
    // this.setRegistrarArchivo();
    // }

    //         var url = '/landing/landing-page/store'

    //       const res = await this.callApi('post', url, this.record)

    //     if (res.status == 200) {
    //       this.notification('success', 'Registro creado con éxito', 0)
    //     this.$router.push('/landing-page"');
    //} else {
    //  if (res.status == 422) {
    //    for(let i in res.data.errors){
    //      this.notification('error', res.data.errors[i][0])
    //}
    //}
    //if (res.status == 401) {
    //  this.$router.push({name: 'login'})
    //location.reload();
    //localStorage.clear();
    // }
    //if (res.status == 419) {
    //  this.notification('error', 'Fue necesario recargar la página', 0)
    //location.reload();
    // }
    // }
    //this.fullscreenLoading  =   false;
    // },
    setRegistrarProducto() {
      if (this.validarRegistrarProducto()) {
        return;
      }
      this.fullscreenLoading = true;

      if (
        (!this.record.image || this.record.image == undefined) &&
        (!this.record.image_fondo || this.record.image_fondo == undefined)
      ) {
        this.setGuardarProducto();
      } else {
        if (!this.record.image || this.record.image == undefined) {
          this.setRegistrarArchivoFondo();
        } else {
          this.setRegistrarArchivo();
        }
      }
    },
    async setRegistrarArchivo() {
      this.form.append("file", this.record.image);
      this.form.append("path", "user");

      const config = { headers: { "Content-Type": "multipart/form-data" } };

      var url = "/file/store";

      const res = await this.callApi("post", url, this.form, config);

      if (res.status == 200) {
        this.record.file_id = res.data;
        if (!this.record.image_fondo) {
          this.setGuardarProducto();
        } else {
          this.setRegistrarArchivoFondo();
        }
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
    async setRegistrarArchivoFondo() {
      this.form.append("file", this.record.image_fondo);
      this.form.append("path", "user");

      const config = { headers: { "Content-Type": "multipart/form-data" } };

      var url = "/file/store";

      const res = await this.callApi("post", url, this.form, config);

      if (res.status == 200) {
        this.record.image_fondo_id = res.data;
        this.setGuardarProducto();
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
    async setGuardarProducto() {
      var url = "/landing/landing-page/store";

      const res = await this.callApi("post", url, this.record);

      if (res.status == 200) {
        this.notification("success", "Registro creado con éxito", 0);
        this.$router.push('"/landing-page"');
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
    validarRegistrarProducto() {
      this.error = 0;

      if (!this.record.description) {
        this.notification("error", "El nombre es un campo obligatorio", 0);
        this.error = 1;
      }
      if (!this.record.detalle) {
        this.notification("error", "El detalle es un campo obligatorio", 0);
        this.error = 1;
      }

      if (!this.record.ubicacion) {
        this.notification("error", "El precio es un campo obligatorio", 0);
        this.error = 1;
      }
      if (!this.record.telefono) {
        this.notification("error", "El telefono es un campo obligatorio", 0);
        this.error = 1;
      }

      if (!this.record.pago) {
        this.notification("error", "El precio es un campo obligatorio", 0);
        this.error = 1;
      }
      if (!this.record.correo_notificacion) {
        this.notification("error", "El correo es un campo obligatorio", 0);
        this.error = 1;
      }

      if (!this.record.tipomedia_id) {
        this.notification("error", "Debe seleccionar un Tipo", 10);
        this.error = 1;
      }
      if (!this.record.tipomoneda_id) {
        this.notification("error", "Debe seleccionar un Tipo", 10);
        this.error = 1;
      }
      //  if (!this.record.client_id) {
      //  this.notification("error", "Debe seleccionar un nombre", 10);
      //this.error = 1;
      // }

      // return this.error;
    },
  },
};
</script>

<style>
</style>
