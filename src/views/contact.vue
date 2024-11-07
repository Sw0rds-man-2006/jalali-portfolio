<script setup lang="ts">
import { ref } from "vue";

const error = ref(false);
</script>

<template>
  <div class="container mx-auto">
    <div class="header">GET <span>IN TOUCH</span></div>
    <div class="subheader">DON'T BE SHY!</div>
    <p>
      Feel free to get in touch with me. I am always open to discussing new
      projects, creative ideas, or opportunities to be part of your vision.
    </p>
    <div class="contact-info">
      <p>
        MAIL ME: <a href="mailto:steve@mail.com">jalalimahdi866@gmail.com</a>
      </p>
      <p>CALL ME: <a href="tel:+21621184010">+989386624588</a></p>
    </div>
    <div class="form-container">
      <div class="form-row">
        <input type="text" placeholder="YOUR NAME" />
        <input type="email" placeholder="YOUR EMAIL" />
        <input type="text" placeholder="YOUR SUBJECT" />
      </div>
      <textarea placeholder="YOUR MESSAGE" rows="5"></textarea>
    </div>
    <button class="button flex h-55px w-230px" @click="error = true">
      <p class="mt-4 ml-4 text-15px font-bold">SEND MESSAGE</p>
      <span
        class="fas fa-paper-plane w-55px h-55px text-20px pt-3 mt-0px ml-auto bg-amber text-white rounded-full"
      ></span>
    </button>
    <div class="social-icons"></div>
    <div class="w-200px rounded-4 bg-rose h-50px m-3 p-3" v-if="error">
      somthing went wrong
    </div>
  </div>
</template>
<style scoped>
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

body {
  background-color: #111;
  color: #fff;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.container {
  max-width: 1300px;
  width: 100%;
  padding: 40px 20px;
  text-align: center;
}
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
.subheader {
  margin-bottom: 30px;
  font-size: 1.2em;
  color: #fff;
}
p {
  margin: 20px 0;
  font-size: 1em;
  line-height: 1.6;
  text-align: justify;
}
.contact-info {
  margin: 20px 0;
  font-size: 1.2em;
  text-align: justify;
}
.contact-info a {
  color: #ffd700;
  text-decoration: none;
}
.form-container {
  margin-top: 30px;
  text-align: left;
}
.form-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.form-container input,
.form-container textarea {
  width: calc(33.333% - 10px);
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #333;
  border-radius: 25px; /* تغییر حاشیه گرد به 25 پیکسل */
  background-color: #222;
  color: #fff;
  box-sizing: border-box;
}
.form-container input:focus,
.form-container textarea:focus {
  outline: none;
  border-color: #ffd700;
}
.form-container textarea {
  resize: none;
  width: 100%;
}
.social-icons {
  margin-top: 30px;
  text-align: center;
}
.social-icons img {
  width: 30px;
  margin: 0 10px;
}
/* استایل‌های ریسپانسیو */
@media (max-width: 1020px) {
  .header {
    display: none;
  }
}
@media (max-width: 765px) {
  .form-container input {
    width: 100%;
  }
  .form-row {
    flex-direction: column;
  }
  .header {
    font-size: 2em;
  }
}
@media (max-width: 480px) {
  .header {
    font-size: 1.5em;
  }
  .subheader {
    font-size: 1em;
  }
  p {
    font-size: 0.9em;
  }
}
</style>
