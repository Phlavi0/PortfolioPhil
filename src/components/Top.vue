<template>
    <span  class="e13_6 ">PHILIP CADUNGOG</span>
        <img src="/src/assets/centerpic.jpg" class="ei100_37_38_3" alt="">
    <span  class="e13_5">PHILIP CADUNGOG</span>
</template>

<script setup lang="ts">
import countapi from 'countapi-js';

countapi.visits().then((result) => {
  console.log(result.value + "visits");
});
</script>

<style scoped>
.ei100_37_38_3{
}
@media screen and (min-width: 1024px) {
  .ei100_37_38_3{
    max-height: 650px;
  }
  .e13_5, .e13_6{
    font-size: 80px;
  }

}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .ei100_37_38_3{
    max-height: 500px;
  }
  .e13_5, .e13_6{
    font-size: 60px;
  }
}

@media screen and (max-width: 767px) {
  .ei100_37_38_3{
    max-width: 300px;
  }
  .e13_5, .e13_6{
    font-size: 37px;
  }
}
.e13_5, .e13_6{
  position:absolute;
  top:232px;
  font-family:"Arial Black",serif;
  text-align: center;
}
.e13_6 {
  color:rgba(255, 255, 255, 1);
}
.e13_5 {
  color:rgba(255, 255, 255, 1);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  -webkit-text-fill-color: transparent;
}
</style>