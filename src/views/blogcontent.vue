<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const router = useRoute();

const blogs = reactive([
  {
    id: 1,
    title: "نکات امنیتی در سوشال مدیا ",
    img: import.meta.env.BASE_URL + "/img/ax-blog-1.jpg",
    contnt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat nemo debitis perferendis, repellendus molestiae assumenda, provident nisi pariatur, adipisci quibusdam facilis! Minima dignissimos quod nobis? Reiciendis eius unde eos.",
  },
  {
    id: 2,
    title: "بهترین زبان ها برای شروع برنامه نویسی",
    img: import.meta.env.BASE_URL + "/img/ax-blog-2.jpg",
    contnt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat nemo debitis perferendis, repellendus molestiae assumenda, provident nisi pariatur, adipisci quibusdam facilis! Minima dignissimos quod nobis? Reiciendis eius unde eos.",
  },
  {
    id: 3,
    title: "بهترین زبان ها برای شروع برنامه نویسی",
    img: import.meta.env.BASE_URL + "/img/ax-blog-3.jpg",
    contnt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat nemo debitis perferendis, repellendus molestiae assumenda, provident nisi pariatur, adipisci quibusdam facilis! Minima dignissimos quod nobis? Reiciendis eius unde eos.",
  },
]);

const routeid = Number(route.params.id);

const blog = ref(blogs[routeid - 1]);
</script>

<template>
  <div class="continer block mx-auto">
    <h1 class="m-5 mt-10vh text-amber">{{ blog.title }}</h1>
    <img
      :src="blog.img"
      alt=""
      class="min-w-300px w-70vw max-w-600px mx-auto block"
    />
    <p class="m-5">{{ blog.contnt }}</p>
  </div>
</template>

<style scoped>
* {
  font-family: yekan;
  direction: rtl;
}

@font-face {
  font-family: yekan;
  src: url(/public/Yekan.ttf);
}

@media (max-width: 1023px) {
  h1 {
    margin-top: 5vh;
    font-size: 25px;
  }
}
.continer {
  direction: rtl;
  max-width: 1000px;
}
</style>
