<script setup lang="ts">
import homeComp from "./components/home/home-comp.vue";
</script>

<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
  <div
    id="app"
    class="min-h-screen flex items-center p-0px b-continer overflow-auto text-white p-4"
  >
    <homeComp />
    <div class="route-content mx-auto">
      <router-view />
    </div>
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 7px;
  background-color: #414141;
  border-radius: 25px;
}
::-webkit-scrollbar-thumb {
  width: 10px;
  height: 10px;
  background-color: rgb(255, 191, 0);
  border-radius: 25px;
}

.b-continer {
  background-color: rgb(20, 20, 20);
  padding: 0px !important;
  margin: 0px !important;
}

.route-content {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  max-width: 1800px;
  right: 5% !important;
}

@media screen and (max-width: 1023px) {
  .route-content {
    height: 90vh;
  }
  .b-continer {
    display: grid;
  }
}
</style>
