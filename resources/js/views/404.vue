<template>
    <div class="pcoded-content">
        <div class="auth-wrapper maintance">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="text-center">
                            <img src="/images/maintance/404.png" alt="" class="img-fluid">
                            <h5 class="text-muted my-4">Oops! Página no encontrada!</h5>
                            <form action="#">
                                <button class="btn waves-effect waves-light btn-primary mb-4" @click.prevent="goBack">
                                    <i class="feather icon-refresh-ccw mr-2"></i>Regresar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .auth-wrapper.maintance {
        background: #ecf0f5;
    }
    .auth-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        min-width: 100%;
        min-height: 100vh;
        background: #4680ff;
    }
</style>