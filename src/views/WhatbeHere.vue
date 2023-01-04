<template>
    <div class="container-fluid globe">
        <Header_Menu />
        <main id="Main" class="col-12 h-100">
        <div class="container-fluid">
            <div class="d-flex justify-content-center h-100 align-items-center">
                <div class="row mt-5 d-flex justify-content-center">
                    <div class="col-lg-2 col-md-2 col-10 pt-5">
                        <h4 class="h4 P-title">Pourquoi y être ?</h4>
                        <div class="brd"></div>
                    </div>
                    <div class="col-lg-6 col-10 align-self-end mt-5">
                        <p class="mx-1">Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Obcaecati similique necessitatibus 
                            qui. Modi numquam officiis accusantium, nisi dicta sapiente. Quibusdam?
                            Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Obcaecati similique necessitatibus 
                            qui. Modi numquam officiis accusantium, nisi dicta sapiente. Quibusdam?
                        </p>
                        <p class="mx-1">Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Obcaecati similique necessitatibus 
                            qui. Modi numquam officiis accusantium, nisi dicta sapiente. Quibusdam?
                            Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Obcaecati similique necessitatibus 
                            qui. Modi numquam officiis accusantium, nisi dicta sapiente. Quibusdam?
                        </p>
                        <p class="mx-1">Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Obcaecati similique necessitatibus 
                            qui. Modi numquam officiis accusantium, nisi dicta sapiente. Quibusdam?
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </main>
    </div>
</template>

<script lang="ts">
import Header_Menu from '../components/Header_Menu/Header.vue'
export default{
components: {
    Header_Menu,
}
}
</script>

<style scoped>
    /* .globe{
    height: 100vh;
    width: 100vw;
    background: url('../assets/images/fond-0.jpg') no-repeat center right; 
    background-size: contain;
    margin: 0 !important; 
    } */
    .brd{
        width: 30px;
        height: 5px;
        background: gray
    }
</style>