<template>
  <h1 class="title fixed-top inter">SOME OF <span class="outlinetext">MY INTERESTS</span></h1>
<!--  expander-->
  <div class="options">
    <div class="option active biking">
      <div class="shadow"></div>
      <div class="label">
        <div class="info">
          <div class="sub">Mountain Biking</div>
        </div>
      </div>
    </div>
    <div class="option code">
      <div class="shadow"></div>
      <div class="label">
        <div class="info">
          <div class="sub">Coding</div>
        </div>
      </div>
    </div>
    <div class="option game">
      <div class="shadow"></div>
      <div class="label">
        <div class="info">
          <div class="sub">Gaming</div>
        </div>
      </div>
    </div>
    <div class="option offroad">
      <div class="shadow"></div>
      <div class="label">
        <div class="info">
          <div class="sub">Offroading</div>
        </div>
      </div>
    </div>
    <div class="option music">
      <div class="shadow"></div>
      <div class="label">
        <div class="info">
          <div class="sub">Music</div>
        </div>
      </div>
    </div>
  </div>
<!--  expander end-->
</template>
<script setup lang="ts">
//import '../assets/expander.scss';
import { onMounted, onUnmounted } from 'vue';

const optionClickHandler = (event) => {
  const clickedOption = event.target;
  const options = document.querySelectorAll('.option');

  options.forEach((option) => {
    option.classList.remove('active');
  });

  clickedOption.classList.add('active');
};

onMounted(() => {
  document.addEventListener('click', optionClickHandler);
});

onUnmounted(() => {
  document.removeEventListener('click', optionClickHandler);
});


</script>

<style scoped>
.title {
  float: left;
  margin-left: 5%;
  margin-top: 2%;
  position: absolute;
  text-align: left;
  vertical-align: text-top;
}

.outlinetext {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  -webkit-text-fill-color: transparent;
}
.inter {
  font-family: "Inter Black",serif;
}

.options {
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  min-width: 600px;
  max-width: 900px;
  width: calc(100% - 100px);
  height: 400px;
}
@media screen and (max-width: 718px) {
  .options {
    min-width: 520px;
  }
  .options .option:nth-child(5) {
    display: none;
  }
}
@media screen and (max-width: 638px) {
  .options {
    min-width: 440px;
  }
  .options .option:nth-child(4) {
    display: none;
  }
}
@media screen and (max-width: 558px) {
  .options {
    min-width: 360px;
  }
  .options .option:nth-child(3) {
    display: none;
  }
}
@media screen and (max-width: 478px) {
  .options {
    min-width: 280px;
  }
  .options .option:nth-child(2) {
    display: none;
  }
}
.options .option {
  position: relative;
  overflow: hidden;
  min-width: 60px;
  margin: 10px;
  background-size: auto 120%;
  background-position: center;
  cursor: pointer;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}
.biking{
  background: url(src/assets/interest/biking.jpg);
}
.code{
  background: url(src/assets/interest/code.jpg);
}
.game{
  background: url(src/assets/interest/gaming.jpg);
}
.offroad{
  background: url(src/assets/interest/offroading.jpg);
}
.music{
  background: url(src/assets/interest/music.jpg);
}
.options .option.active {
  flex-grow: 10000;
  transform: scale(1);
  max-width: 600px;
  border-radius: 20px;
  background-size: auto 100%;
  /*&:active {
     transform:scale(0.9);
  }*/
}
.options .option.active .shadow {
  box-shadow: inset 0 -120px 120px -120px black, inset 0 -120px 120px -100px black;
}
.options .option.active .label {
  bottom: 20px;
  left: 20px;
}
.options .option.active .label .info > div {
  opacity: 1;
}
.options .option:not(.active) {
  flex-grow: 1;
  border-radius: 10px;
}
.options .option:not(.active) .label {
  bottom: 10px;
  left: 10px;
}
.options .option:not(.active) .label .info > div {
  left: 20px;
  opacity: 0;
}
.options .option .shadow {
  position: absolute;
  height: 120px;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}
.options .option .label {
  display: flex;
  position: absolute;
  height: 40px;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}
.options .option .label{
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  max-width: 40px;
  height: 40px;
}
.options .option .label .info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  color: white;
  white-space: pre;
}
.options .option .label .info > div {
  position: relative;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95), opacity 0.5s ease-out;
}
.options .option .label .info{
  font-weight: bold;
  font-size: 1.2rem;
}
.options .option .label .info .sub {
  transition-delay: 0.1s;
}
</style>