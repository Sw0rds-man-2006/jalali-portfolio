<script setup lang="ts">
import { ref } from "vue";
import comp1 from "@/components/about's/comp1.vue";
import comp2 from "@/components/about's/comp2.vue";
import comp3 from "@/components/about's/comp3.vue";
import comp4 from "@/components/about's/comp4.vue";
</script>
<template>
  <div class="mx-auto">
    <comp1 />
    <v-divider class="m-10vh w-40% mx-auto"></v-divider>
    <comp2 />
    <v-divider class="m-10vh w-40% mx-auto"></v-divider>
    <comp3 />
    <v-divider class="m-10vh w-40% mx-auto"></v-divider>
    <comp4 />
  </div>
</template>

<style scoped></style>
