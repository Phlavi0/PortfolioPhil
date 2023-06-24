<template>
  <div class="hiim fixed-top inter">
    <h1>HI, I AM PHILIP CADUNGOG,
      <br>A <span class="trans">DEVELOPER </span>BASED IN <span class="trans">DUMAGUETE CITY</span>
    </h1>
  </div>

  <div class="align-content-center padding text-md-center">
    <h3 class="inter">LANGUAGES</h3>
    <img class="iconpad anim" src="../assets/icons/v61_10.png" height="100" width="100" alt="C plus plus"/>
    <img class="iconpad anim" src="../assets/icons/v61_11.png" height="100" width="100" alt="PHP"/>
    <img class="iconpad anim" src="../assets/icons/Typescript.png" height="90" width="90" alt="TypeScript"/>
    <img class="iconpad anim" src="../assets/icons/v61_15.png" height="100" width="100" alt="Java"/>
    <img class="iconpad anim" src="../assets/icons/v61_19.png" height="100" width="100" alt="C sharp"/>
    <h3 class="inter">FRAMEWORKS</h3>
    <img class="iconpad anim" src="../assets/icons/v61_13.png" height="100" width="100" alt="Laravel"/>
    <img class="iconpad anim" src="../assets/icons/v61_14.png" height="100" width="100" alt="Vue 3"/>
    <img class="anim" src="../assets/icons/v61_16.png" height="100" width="100" alt="Bootstrap"/>
  </div>

</template>

<script setup lang="ts">
</script>

<style scoped>
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
    vertical-align:text-top;
  }


</style>