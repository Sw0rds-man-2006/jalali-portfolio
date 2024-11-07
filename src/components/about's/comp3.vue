<template>
  <div class="container">
    <h1>EXPERIENCE & EDUCATION</h1>
    <div class="columns">
      <div class="column">
        <div class="entry">
          <div class="date">2024</div>
          <div class="title">COMPUTER DIPLOMA</div>
          <div class="company">Ghadiri High-School</div>
          <div class="description">
            I studied in the field of Technical and Vocational Education with a
            specialization in computer game development, and i managed a small
            game development team.
          </div>
        </div>
        <div class="entry">
          <div class="date">2024</div>
          <div class="title">SOFTWARE ENGINEERING STUDENT</div>
          <div class="company">SADJAD UNIVERSITY</div>
          <div class="description">
            I am an associate degree student in software engineering at sadjad
            University and a member of the Computer Science Faculty's Scientific
            Association
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #fff;
  font-family: Arial, sans-serif;
  color: #333;
  margin: 0px;
  padding: 0px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
h1 {
  text-align: center;
  margin-bottom: 50px;
}
.columns {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.column {
  width: 48%;
}
.entry {
  margin-bottom: 30px;
  margin: 10px;
}
.entry:last-child {
  margin-bottom: 0;
}
.date {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
}
.title {
  font-size: 20px;
  font-weight: bold;
  color: #ffa600;
  margin: 5px 0;
}
.company {
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
}
.description {
  font-size: 14px;
  color: #565656;
}
@media (max-width: 768px) {
  .column {
    width: 100%;
    margin: 25px;
  }
  .entry {
    margin: 25px;
  }
}
</style>
