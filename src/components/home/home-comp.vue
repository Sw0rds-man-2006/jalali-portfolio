<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

const route = useRoute();
const router = useRoute();

// متغیر برای کنترل وضعیت نمایش صفحه سیاه
const navActive = ref(false);
const check = ref(false);

let par = ref(router.path);

// تابع تغییر وضعیت صفحه سیاه
function toggleBlackScreen() {
  navActive.value = !navActive.value;
}

const togglecheck = () => {
  check.value = !check.value;
  toggleBlackScreen();
};
</script>

<template>
  <!-- navbar2 -->
  <div class="nav2 hidden relative w-100% bg-dark h-10vh z-11 justify-between">
    <!-- nav2 button  -->

    <div class="right-10px top-10px absolute">
      <input
        type="checkbox"
        id="checkbox"
        @click="toggleBlackScreen"
        class="open-button"
        v-model="check"
      />
      <label for="checkbox" class="toggle">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
      </label>
    </div>
    <div class="absolute top-10px left-20px flex nav2-title">
      <h1 v-if="router.path == '/'" class="text-amber flex">HOME</h1>
      <h1
        v-if="router.path == '/about'"
        class="text-amber flex text-25px font-bold"
      >
        ABOUT
        <p class="text-white ml-5px">ME</p>
      </h1>
      <h1
        v-if="router.path == '/blog'"
        class="text-amber flex text-25px font-bold"
      >
        <p class="text-white mr-5px">MY</p>
        BLOG
      </h1>
      <h1
        v-if="router.path == '/contact'"
        class="text-amber flex text-25px font-bold"
      >
        <p class="text-white mr-5px">GET IN</p>
        TUCH
      </h1>
    </div>
  </div>

  <!-- صفحه سیاه -->
  <div :class="{ 'black-screen': true, active: navActive }" class="black-s">
    <div>
      <RouterLink
        class="decoration-none text-white"
        v-on="{ click: togglecheck }"
        to="/"
      >
        <p class="text-bold text-20px p-4 block">HOME</p>
      </RouterLink>
      <v-divider></v-divider>
    </div>
    <div>
      <RouterLink
        class="decoration-none text-white"
        v-on="{ click: togglecheck }"
        to="/about"
      >
        <p class="text-bold text-20px p-4 block">ABOUT</p>
      </RouterLink>
      <v-divider></v-divider>
    </div>
    <div>
      <RouterLink
        class="decoration-none text-white"
        v-on="{ click: togglecheck }"
        to="/blog"
      >
        <p class="text-bold text-20px p-4 block">BLOG</p>
      </RouterLink>
      <v-divider></v-divider>
    </div>
    <div>
      <RouterLink
        class="decoration-none text-white"
        v-on="{ click: togglecheck }"
        to="/contact"
      >
        <p class="text-bold text-20px p-4 block">CONTACT ME</p>
      </RouterLink>
      <v-divider></v-divider>
    </div>
  </div>

  <!-- nav 1 -->

  <div class="absolute navbar z-15 right-0px top-30% transform grid h-300px">
    <RouterLink
      class="p-2 rounded-full tooltip-container z-10 decoration-none shadow-lg p-3 h-45px w-45px m-4"
      :to="'/'"
    >
      <span class="tooltip">HOME</span>
      <span class="text">
        <div class="borde-back">
          <div :class="{ bg: router.path == '/' }" class="icon">
            <i class="fa fa-home text-white text-lg"></i>
          </div>
        </div>
      </span>
    </RouterLink>

    <RouterLink
      class="hover:bg-amber nav-btn p-2 rounded-full decoration-none tooltip-container z-10 shadow-lg p-3 h-45px w-45px m-4"
      :to="'/about'"
    >
      <span class="tooltip">ABOUT</span>
      <span class="text">
        <div class="borde-back">
          <div class="icon" :class="{ bg: router.path == '/about' }">
            <i class="fa fa-user text-white decoration-none text-lg"></i>
          </div>
        </div>
      </span>
    </RouterLink>

    <RouterLink
      class="hover:bg-amber nav-btn p-2 rounded-full tooltip-container z-10 shadow-lg p-3 h-45px w-45px m-4"
      :to="'/blog'"
    >
      <span class="tooltip">BLOG</span>
      <span class="text">
        <div class="borde-back">
          <div class="icon" :class="{ bg: router.path == '/blog' }">
            <i class="fa fa-envelope-open text-white text-lg"></i>
          </div>
        </div>
      </span>
    </RouterLink>
    <RouterLink
      class="hover:bg-amber nav-btn decoration-none p-2 rounded-full tooltip-container z-10 shadow-lg p-3 h-45px w-45px m-4"
      :to="'/contact'"
    >
      <span class="tooltip">CONTACT ME</span>
      <span class="text">
        <div class="borde-back">
          <div class="icon" :class="{ bg: router.path == '/contact' }">
            <i class="fa fa-comments decoration-none text-white text-lg"></i>
          </div>
        </div>
      </span>
    </RouterLink>
  </div>
</template>

<style scoped>
h1 {
  margin-bottom: 0px !important;
  height: 7vh !important;
}

.nav2-title {
  height: 8vh !important ;
}

.black-s {
  background-color: rgba(40, 40, 40, 0.6) !important;
  backdrop-filter: blur(10px) !important;
}

.continer {
  background-color: rgb(20, 20, 20);
  padding: 0px !important;
  margin: 0px !important;
}
.nav-btn:hover {
  background-color: rgb(251, 191, 36) !important;
  transition: ease-in-out 1s;
}
.bg {
  background-color: rgb(251, 191, 36) !important;
}
.route-content {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  max-width: 1800px;
  right: 5% !important;
}
@media (min-width: 1920px) {
}

@media (max-width: 1023px) {
  .navbar {
    display: none;
  }
  .nav2 {
    display: block;
  }
  .route-content {
    height: 90vh;
  }
  .continer {
    display: grid;
  }
}

/* btns */

.tooltip-container {
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 17px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tooltip-container .borde-back {
  width: 53px;
  height: 53px;
  background-color: rgba(248, 250, 252, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: none;
}
.icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background-color: rgb(63, 63, 63);
  cursor: pointer;
  transition: 0.4s ease-in-out;
}
.tooltip {
  position: absolute;
  top: -2;
  z-index: -10;
  transform: scaleX(0);
  transform-origin: right center; /* تغییر جهت */
  margin-right: 5px;
  height: 50px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.6s;
  border-radius: 50px 0 0 50px; /* تغییر جهت */
  background-image: linear-gradient(
    225deg,
    #ff8810 0%,
    #ff8f10 50%,
    #ffd900 100%
  );
  display: flex;
  align-items: center;
  justify-content: right;
  padding-right: 40px;
  color: #fff;
  font-size: 18px;
  font-family: sans-serif;
  font-weight: 800px;
  padding-left: 16px;
  right: 50%; /* تغییر جهت */
}
.tooltip-container:hover .tooltip {
  transform: unset;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  z-index: -10;
}
.tooltip-container:hover {
  transform: translateX(0px);
  transition: 0.5s linear;
  background-color: rgb(251, 191, 36) !important; /* تغییر رنگ به زرد */
}
.tooltip-container:hover .icon {
  transform: rotate(360deg);
  transition: 0.5s linear;
  background-color: rgb(251, 191, 36) !important;
}

/* دکمه */
.open-button {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

/* صفحه سیاه */
.black-screen {
  position: fixed;
  top: 10%;
  left: -100%;
  width: 100%;
  height: 90%;
  opacity: 0.9;
  background-color: rgb(51, 51, 51);
  transition: left 0.5s ease;
  z-index: 10;
}

/* کلاس فعال برای نمایش صفحه سیاه */
.black-screen.active {
  left: 0;
}

#checkbox {
  display: none;
}

.toggle {
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition-duration: 0.5s;
}

.bars {
  width: 100%;
  height: 4px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
}

#bar2 {
  transition-duration: 0.8s;
}

#bar1,
#bar3 {
  width: 70%;
}

#checkbox:checked + .toggle .bars {
  position: absolute;
  transition-duration: 0.5s;
}

#checkbox:checked + .toggle #bar2 {
  transform: scaleX(0);
  transition-duration: 0.5s;
}

#checkbox:checked + .toggle #bar1 {
  width: 100%;
  transform: rotate(45deg);
  transition-duration: 0.5s;
}

#checkbox:checked + .toggle #bar3 {
  width: 100%;
  transform: rotate(-45deg);
  transition-duration: 0.5s;
}

#checkbox:checked + .toggle {
  transition-duration: 0.5s;
  transform: rotate(180deg);
}
</style>
