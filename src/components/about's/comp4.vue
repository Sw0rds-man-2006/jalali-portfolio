<script setup lang="ts">
import { ref, reactive } from "vue";

const posts = reactive([
  {
    id: 1,
    title: "a simple copy of Quran.com",
    description: "Languages: Html , JS , UnoCss , Vue-router",
    img: "../../../public/img/quranproject.png",
  },
  {
    id: 2,
    title: "tv.razavi.ir/first page  ",
    description: "IT's not responsive , just Html & Css, i made it in two days",
    img: "../../../public/img/tv.razavi.png",
  },
  {
    id: 3,
    title: "a simple responsive page",
    description: "Languages: Html , Css",
    img: "../../../public/img/responsive.png",
  },
  {
    id: 4,
    title: "Voting application",
    description:
      "It is used for project timing voting. Languages: Html,UnoCss,Vue.js",
    img: "../../../public/img/estimate.png",
  },
]);
</script>

<template>
  <!-- عنوان اصلی صفحه -->
  <div class="header">MY <span>PROJECTS</span></div>
  <!-- بخش کارتها -->
  <div class="container">
    <div class="card" v-for="post in posts" :key="post.id">
      <img class="image-placeholder" :src="post.img" alt="" />
      <div class="card-content">
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* تنظیمات عمومی */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  color: #ffffff;
  background-color: #111;
}

/* عنوان اصلی */
.header {
  text-align: center;
  font-size: 3em;
  color: #ffffff;
  margin-top: 20px;
  font-weight: bold;
  letter-spacing: 2px;
}

.header span {
  color: #ffb100;
}

/* تنظیمات گرید برای کارتها */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
}

/* استایل کارتها */
.card {
  background: #222;
  padding: 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* باکس سبز به عنوان جایگاه عکس */
.card .image-placeholder {
  background-color: #28a745;
  height: 150px;
  width: 100%;
}

/* بخش محتوا */
.card-content {
  padding: 15px;
}

/* عنوان کارت */
.card h3 {
  font-size: 1.1em;
  margin: 10px 0;
  color: #ffffff;
}

/* خط زرد زیر عنوان */
.card h3::after {
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  background-color: #ffb100;
  margin-top: 8px;
  border-radius: 2px;
}

/* متن توضیح کارت */
.card p {
  font-size: 0.9em;
  color: #aaa;
  line-height: 1.6;
  margin-top: 10px;
}
</style>
