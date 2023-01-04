<template>
  <header class="navbar navbar-expand-lg col-12" id="Header">
        <div class="container-fluid">
            <div class="navbar-brand col-md-4 col-auto">
                <div class="col-10 d-flex justify-content-center">
                    <!--<img src="../assets/Pôle/Logo.png" alt="Logos-Template-Html" class="img-fluid w-50">-->
                    <h1 class="h2 align-self-center mt-2 title-h">greeet</h1>
                </div>
            </div>
            <button class="navbar-toggler bg-dark">
                <span class="navbar-toggler-icon" data-bs-toggle="collapse" data-bs-target="#Col2"></span>
            </button>
            <nav class="collapse navbar-collapse col-md-7 col-auto" id="Col2">
                <div class="d-flex justify-content-md-end justify-content-center">
                    <ul class="navbar-nav">
                        <router-link to="/Decouvrir" class="r-1"><li class="nav-item mx-2 nav-link h-link fw-bold">Découvrir</li></router-link>
                        <router-link to="/Pourquoi" class="r-1"><li class="nav-item mx-2 nav-link h-link fw-bold">Pourquoi y être</li></router-link>
                        <router-link to="/Register" class="r-1"><li class="nav-item mx-2 nav-link h-link fw-bold">S'inscrire / Se connecter</li></router-link>
                    </ul>
                </div>  
            </nav>
        </div>
  </header>
</template>

<script>
    export default{
        name: 'Header',
    }
</script>

<style scoped>
.title-h{   
    text-shadow: .6px 1.5px rgba(128, 128, 128, 0.515);
}
.h-link{
    color: #444;
    text-shadow: .5px 1.2px gray;
    transition: .1s all
}
.r-1:hover{
    text-decoration: none !important;
}
.h-link:hover{
    color: gray;
    text-shadow: .3px 1px #444;
    transition: .1s all
}
</style>