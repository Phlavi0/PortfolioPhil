<template>
  <h1 class="title fixed-top inter">SOME OF <span class="outlinetext">MY INTERESTS</span></h1>
<!--  expander-->
  <div class="options">
    <div class="option active" style="--optionBackground: url(src/assets/interest/biking.jpg); ">
      <div class="shadow"></div>
      <div class="label">
        <div class="info">
          <div class="sub">Mountain Biking</div>
        </div>
      </div>
    </div>
    <div class="option" style="--optionBackground:url(src/assets/interest/code.jpg);">
      <div class="shadow"></div>
      <div class="label">
        <div class="info">
          <div class="sub">Coding</div>
        </div>
      </div>
    </div>
    <div class="option" style="--optionBackground:url(src/assets/interest/gaming.jpg);">
      <div class="shadow"></div>
      <div class="label">
        <div class="info">
          <div class="sub">Gaming</div>
        </div>
      </div>
    </div>
    <div class="option" style="--optionBackground:url(src/assets/interest/offroading.jpg);">
      <div class="shadow"></div>
      <div class="label">
        <div class="info">
          <div class="sub">Offroading</div>
        </div>
      </div>
    </div>
    <div class="option" style="--optionBackground:url(src/assets/interest/music.jpg);">
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
import '../assets/expander.scss';
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
</style>