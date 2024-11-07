<script setup lang="ts"></script>

<template>
  <div class="main-container mx-auto">
    <h1 class="title">ABOUT <span>ME</span></h1>
    <div class="content">
      <!-- Left Section -->
      <div class="left-section">
        <h2>PERSONAL INFOS</h2>

        <img
          src="/img/dark - Copy.jpg"
          alt=""
          class="w-230px h-230px mx-auto img-mobile display-none rounded-50% border-b-coolGray"
        />

        <div class="personal-info">
          <div class="info-column">
            <p>
              <strong>First Name:</strong><br class="break" />
              Mahdi
            </p>
            <p>
              <strong>Age:</strong><br class="break" />
              18 Years
            </p>
            <p>
              <strong>Freelance:</strong><br class="break" />
              Available
            </p>
            <p>
              <strong>Phone:</strong><br class="break" />
              +989386624588
            </p>
            <p><strong>Telegram:</strong><br class="break" />@Mahdi_jalali_h</p>
          </div>
          <div class="info-column">
            <p>
              <strong>Last Name:</strong><br class="break" />
              Jalali
            </p>
            <p>
              <strong>Nationality:</strong><br class="break" />
              Iranian
            </p>
            <p>
              <strong>Address:</strong><br class="break" />
              Mashhad,Motahhari ST.
            </p>
            <p>
              <strong>Email:</strong><br class="break" />
              jalalimahdi866@gmail.com
            </p>
            <p><strong>Languages:</strong><br class="break" />English</p>
          </div>
        </div>
        <!-- <button class="button flex h-55px w-230px">
          <p class="mt-4 ml-4 text-15px font-bold">DOWNLOAD CV</p>
          <span
            class="fas fa-download w-55px h-55px text-20px pt-3 mt-0px ml-auto bg-amber text-white rounded-full"
          ></span>
        </button> -->
      </div>
      <!-- Right Section -->
      <div class="right-section mx-auto">
        <div class="stat-box">
          <h3>1<span>+</span></h3>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div class="stat-box">
          <h3>4<span>+</span></h3>
          <p>COMPLETED PROJECTS</p>
        </div>
        <div class="stat-box">
          <h3>0<span>+</span></h3>
          <p>HAPPY CUSTOMERS</p>
        </div>
        <div class="stat-box">
          <h3>0<span>+</span></h3>
          <p>AWARDS WON</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* استایل‌های عمومی */
* {
  margin: 0px;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

.break {
  display: none;
}

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
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.main-container {
  width: 100%;
  max-width: 1000px;
  text-align: center;
}

.title {
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 15vh !important;
  margin-top: 10vh;
  color: rgb(255, 255, 255);
  position: relative;
  text-transform: uppercase;
}

.title span {
  color: #f0a500;
  position: relative;
  z-index: 1;
}

.content {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

/* استایل‌های بخش چپ */
.left-section {
  flex: 1 1 58%;
  text-align: left;
}

.left-section h2 {
  font-size: 1.2em;
  color: #ffffff;
  margin-bottom: 20px;
}

.personal-info {
  display: flex;
  justify-content: space-between;
  color: #ccc;
  margin-bottom: 20px;
  margin-top: 20px;
}

.info-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.info-column p {
  font-size: 1em;
  color: #525252;
  line-height: 1.5;
  text-align: justify;
}

.info-column p strong {
  color: white;
}

.info-item {
  display: flex;
  justify-content: space-between;
}

.info-item span:first-child {
  font-weight: bold;
}

.download-cv {
  background-color: #f0a500;
  color: #111;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 15px;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

/* استایل‌های بخش راست */
.right-section {
  flex: 1 1 28%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.stat-box {
  flex: 1 1 38%;
  padding: 20px;
  text-align: center;
  border: 0.5px solid #555;
  border-radius: 8px;
  max-width: 160px; /* محدودیت سایز برای نمایش کوچک */
  min-width: 140px;
}

.stat-box h3 {
  font-size: 2.5em;
  color: #f0a500;
  margin-bottom: 10px;
}

.stat-box span {
  font-size: 0.6em;
  vertical-align: top;
}

.stat-box p {
  font-size: 0.9em;
  color: #aaa;
  letter-spacing: 1px;
}
.img-mobile {
  border: solid rgb(93, 93, 93) 5px;
}

/* استایل‌های واکنش‌گرا برای عرض کمتر از ۱۰۲۴ پیکسل */
@media (max-width: 1020px) {
  .title {
    display: none;
  }

  .content {
    flex-direction: column; /* بخش چپ به بالا و بخش راست به پایین منتقل می‌شود */
    align-items: center;
  }

  .left-section,
  .right-section {
    flex: 1 1 95%;
    max-width: 95%;
  }

  .personal-info {
    /* flex-direction: column; */
    gap: 20px;
  }

  /* .info-item {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  } */

  .right-section {
    margin-top: 20px; /* فاصله از بالای بخش راست برای جلوگیری از چسبیدن به بخش چپ */
  }

  .stat-box {
    max-width: 49%;
  }
  .img-mobile {
    display: block !important;
  }
}

@media screen and (max-width: 600px) {
  .break {
    display: inline;
  }
}
</style>
