<template>
  <div class="hiim fixed-top inter">
    <h1>HI, I AM PHILIP CADUNGOG,
      <br>A <span class="trans">DEVELOPER </span>BASED IN <span class="trans">DUMAGUETE CITY</span>
    </h1>
  </div>

  <div class="padding text-md-center">
    <h3 class="inter">LANGUAGES</h3>
      <img class="iconpad anim" src="../assets/icons/v61_10.png" alt="C plus plus" title="C plus plus"/>
      <img class="iconpad anim" src="../assets/icons/v61_11.png" alt="PHP" title="PHP"/>
      <img class="iconpad anim" src="../assets/icons/Typescript.png" height="90" width="90" alt="TypeScript" title="TypeScript"/>
      <img class="iconpad anim" src="../assets/icons/v61_15.png" alt="Java" title="Java"/>
      <img class="iconpad anim" src="../assets/icons/v61_19.png" alt="C sharp" title="C sharp"/>

    <h3 class="inter">FRAMEWORKS</h3>
    <div class="iconpack">
      <img class="iconpad anim" src="../assets/icons/v61_13.png" alt="Laravel" title="Laravel"/>
      <img class="iconpad anim" src="../assets/icons/v61_14.png" alt="Vue 3" title="Vue 3"/>
      <img class="iconpad anim" src="../assets/icons/v61_16.png" height="100" width="100" alt="Bootstrap" title="Bootstrap"/>
    </div>
  </div>

</template>

<script setup lang="ts">
</script>

<style scoped>

@media screen and (min-width: 768px) and (max-width: 1023px) {

}

@media screen and (max-width: 767px) {
  h1{
    font-size: 20px;
  }
  h3{
    font-size: 18px;
    text-align: center;
    margin-top: 20px;
  }
  .iconpad{
    max-width: 6vh;
    max-height: 6vh;
  }
  .iconpack{
    margin-left: 65px;
  }
}
.anim:hover {
  animation: heartbeat 1s infinite;
}

@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.padding{
  padding-top: 10%;
}
.iconpad{
  margin-right: 10px;
}
.trans{
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  -webkit-text-fill-color: transparent;
}
.inter{
  font-family: "Inter Black",serif;
}
  .hiim
  {
    float: left;
    margin-left: 5%;
    margin-top: 5%;
    position: absolute;
    text-align:left;
  }


</style>