<script setup lang="ts"></script>
<template>
  <!-- عنوان اصلی صفحه -->
  <div class="header">MY <span>BLOG</span></div>

  <!-- بخش کارت‌ها -->
  <div class="container">
    <div class="card">
      <div class="image-placeholder"></div>
      <div class="card-content">
        <h3>چگونه با ایجاد لیست ایمیل، مخاطبان خود را جذب کنیم</h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است...
        </p>
      </div>
    </div>
    <div class="card">
      <div class="image-placeholder"></div>
      <div class="card-content">
        <h3>۱۰ ابزار برتر برای یادگیری عمیق در ۲۰۲۰</h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است...
        </p>
      </div>
    </div>
    <div class="card">
      <div class="image-placeholder"></div>
      <div class="card-content">
        <h3>هر آنچه که باید درباره دسترس‌پذیری وب بدانید</h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است...
        </p>
      </div>
    </div>
    <div class="card">
      <div class="image-placeholder"></div>
      <div class="card-content">
        <h3>چگونه شوخ‌طبعی و طنز را به برند خود اضافه کنیم</h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است...
        </p>
      </div>
    </div>
    <div class="card">
      <div class="image-placeholder"></div>
      <div class="card-content">
        <h3>زنان در طراحی وب: چگونه موفقیت کسب کنیم</h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است...
        </p>
      </div>
    </div>
    <div class="card">
      <div class="image-placeholder"></div>
      <div class="card-content">
        <h3>محتوای همیشه سبز در مقابل محتوای موضوعی: یک بررسی</h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است...
        </p>
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
@media (max-width: 1020px) {
  .header {
    display: none;
  }
}
</style>
