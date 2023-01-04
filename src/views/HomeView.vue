<script lang="ts">
import Header_Home from '../components/Header_Home/Header.vue'
export default{
  components: {
    Header_Home,
  }
}
</script>

<template>
  <div class="container-fluid globe">
    <Header_Home />
    <main id="Main" class="col-12">
      <div class="container-fluid">
        <div class="d-flex justify-content-center">
          <div class="row">
            <div class="col-md-5 col-12 align-self-end mb-text ms-3">
              <h4 class="m-line-1 fw-bold">Là où les marques rencontrent les talents.</h4>
              <h5 class="m-line-2 font-weight-light">Pour que les talents brillent sans cesse</h5>
            </div>
            <div class="col-md-7 col-12 d-flex justify-content-end">
              <img src="../assets/images/icon-chef.jpg" alt="img-chef" class="image-chef w-100 h-100 img-fluid">
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<style scoped>
  /* .globe{
    height: 100vh;
    width: 100vw;
    background: url('../assets/images/fond-0.jpg') no-repeat center right; 
    background-size: contain;
    margin: 0 !important; 
  } */
  .m-line-1,
  .m-line-2{
    margin-left: 45px
  }
  .mb-text{
    margin-bottom: 100px
  }
</style>
