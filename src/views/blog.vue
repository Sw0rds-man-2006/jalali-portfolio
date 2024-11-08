<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";
import { id } from "vuetify/locale";

const route = useRoute();
const router = useRoute();
const cards = reactive([
  {
    id: 1,
    title: "نکات امنیتی در سوشال مدیا ",
    description: "نکات امنیتی که باید در مورد فضای مجازی بدانید",
    img: import.meta.env.BASE_URL + "/img/ax-blog-1.jpg",
  },
  {
    id: 2,
    title: "بهترین زبان ها برای شروع برنامه نویسی",
    description: "نکات لازم برای شروع برنامه نویسی و زبان هایی برای شروع",
    img: import.meta.env.BASE_URL + "/img/ax-blog-2.jpg",
  },
  {
    id: 2,
    title: "بهترین زبان ها برای شروع برنامه نویسی",
    description: "نکات لازم برای شروع برنامه نویسی و زبان هایی برای شروع",
    img: import.meta.env.BASE_URL + "/img/ax-blog-3.jpg",
  },
]);
</script>
<template>
  <!-- عنوان اصلی صفحه -->
  <div class="header">MY <span>BLOG</span></div>

  <!-- بخش کارت‌ها -->
  <div class="container">
    <RouterLink
      :to="'/blog/' + card.id"
      class="card decoration-none"
      v-for="card in cards"
      :key="card.id"
    >
      <img class="image-placeholder" :src="card.img" />
      <div class="card-content">
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
      </div>
    </RouterLink>
  </div>
</template>
<style scoped>
/* تنظیمات عمومی */
* {
  font-family: yekan;
  direction: rtl;
}

@font-face {
  font-family: yekan;
  src: url(/public/Yekan.ttf);
}

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
/* تنظیمات گرید برای کارت‌ها */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
}
/* استایل کارت‌ها */
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
  /* background-color: #28a745; */
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
@media (max-width: 1020px) {
  .header {
    display: none;
  }
}
</style>
