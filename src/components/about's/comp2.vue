<template>
  <div class="container">
    <h1>MY SKILLS</h1>
    <div class="skills">
      <div class="skill" style="--percentage: 90">
        <div class="circle">
          <div class="percentage">90%</div>
        </div>
        <div class="label">HTML</div>
      </div>
      <div class="skill" style="--percentage: 85">
        <div class="circle">
          <div class="percentage">85%</div>
        </div>
        <div class="label">JAVASCRIPT</div>
      </div>
      <div class="skill" style="--percentage: 70">
        <div class="circle">
          <div class="percentage">70%</div>
        </div>
        <div class="label">CSS</div>
      </div>
      <div class="skill" style="--percentage: 55">
        <div class="circle">
          <div class="percentage">55%</div>
        </div>
        <div class="label">PHP & LARAVEL</div>
      </div>
      <div class="skill" style="--percentage: 50">
        <div class="circle">
          <div class="percentage">50%</div>
        </div>
        <div class="label">WORDPRESS</div>
      </div>
      <div class="skill" style="--percentage: 85">
        <div class="circle">
          <div class="percentage">85%</div>
        </div>
        <div class="label">TAILWIND</div>
      </div>
      <div class="skill" style="--percentage: 85">
        <div class="circle">
          <div class="percentage">85%</div>
        </div>
        <div class="label">VUE.JS</div>
      </div>
      <div class="skill" style="--percentage: 40">
        <div class="circle">
          <div class="percentage">40%</div>
        </div>
        <div class="label">REACT</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #f2f2f2;
  font-family: Arial, sans-serif;
  color: #333;
  margin: 0;
  padding: 0;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
h1 {
  text-align: center;
  margin-bottom: 50px;
}
.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.skill {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 20px;
  text-align: center;
}
.circle {
  width: 100%;
  height: 100%;
  background: conic-gradient(#ffa600 calc(var(--percentage) * 1%), #545454 0);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.circle::after {
  content: "";
  width: 90%;
  height: 90%;
  background-color: #161616;
  border-radius: 50%;
}
.percentage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
}
.label {
  margin-top: 10px;
  font-size: 14px;
}

@media screen and (max-width: 1023px) {
}
</style>
