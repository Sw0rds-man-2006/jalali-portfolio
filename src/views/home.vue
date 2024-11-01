<script setup lang="ts"></script>
<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />

  <!-- Main Container -->
  <div
    class="flex mr-10% card p-4 w-95% h-100% absolute left-0px overflow-hidden"
  >
    <!-- Left Section - Image -->
    <div class="w-1/2 relative l-sec md:block hidden">
      <div
        class="back-div bg-amber rotate--20 z-1 absolute w-500px h-150vh left--170px top--80px"
      ></div>
      <img
        src="/img/dark.jpg"
        alt="Profile Image"
        class="object-cover w-60vh h-90vh rounded-20px absolute z-2 top-10px left-15px shadow-2xl"
      />
    </div>

    <!-- Right Section - Text -->
    <div class="w-650px p-3 flex flex-col z-1 m-3 mx-auto justify-center">
      <h1 class="text-50px font-bold title-name text-amber">
        I'M Mahdi jalali.
      </h1>
      <h3 class="text-40px font-bold title-n">WEB DEVELOPER</h3>
      <p class="text-gray-400 mb-6">
        I'm a Persian based web designer & front-end developer focused on
        crafting clean & user-friendly experiences. I am passionate about
        building excellent website that improves the lives of those around me.
      </p>
      <RouterLink to="/about" class="button flex h-55px w-230px">
        <p class="m-4 ml-4 text-15px font-bold">MORE ABOUT ME</p>
        <span
          class="fa fa-arrow-right w-55px h-55px text-20px p-4 ml-auto bg-amber text-white rounded-full"
        ></span>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* From Uiverse.io by xueyuantan */
.button {
  border-radius: 30em;
  font-size: 15px;
  color: white;
  text-decoration: none;
  font-family: inherit;
  border: none;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border: solid 1px rgb(251, 191, 36);
}

.button::before {
  content: "";
  width: 0;
  height: 55px;
  border-radius: 30em;
  position: absolute;
  top: 0;
  right: 0;
  background-image: linear-gradient(
    to left,
    rgb(251, 191, 36) 0%,
    rgb(251, 191, 36) 100%
  );
  transition: 0.5s ease;
  display: block;
  z-index: -1;
}

.button:hover::before {
  width: 230px;
}
@media screen and (min-width: 1920px) {
  img {
    width: 70vh;
    margin-top: 50px;
    margin-left: 50px;
  }
  .back-div {
    left: -150px;
    width: 900px;
  }
}
@media screen and (max-width: 1439px) {
  img {
    width: 40vh;
    height: 80vh;
  }
  .back-div {
    width: 450px;
    left: -250px;
  }
}
@media screen and (max-width: 1023px) {
  .l-sec {
    display: none;
  }
  .card {
    width: 100%;
    height: 90%;
  }
}
@media screen and (max-width: 500px) {
  .title-name {
    font-size: 30px;
  }
  .title-n {
    font-size: 20px;
  }
}
</style>
