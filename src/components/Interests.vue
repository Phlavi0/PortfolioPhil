<template>
  <h1 class="title fixed-top inter">SOME OF <span class="outlinetext">MY INTERESTS</span></h1>
  <div class="listU">
    <div
        class="listL"
        v-for="(artist, i) in artists"
        :key="i"
        :style="{ backgroundImage: `url(${artist.backgroundUrl})` }"
        :class="active === i ? 'active' : ''"
        @click="active = i"
    >
      <h3>{{ artist.name }}</h3>
      <div class="section-content">
        <div class="inner">
          <div class="bio">
            <h2>{{ artist.name }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const active = ref(0);
const artists = [
  {
    name: "Mountain Biking sa bukid",
    backgroundUrl: 'src/assets/interest/biking.jpg'
  },
  {
    name: "Coding sa beach",
    backgroundUrl: 'src/assets/interest/code.jpg'
  },
  {
    name: "Gaming sa Office",
    backgroundUrl: 'src/assets/interest/gaming.jpg'
  },
  {
    name: "Offroading sa road",
    backgroundUrl: 'src/assets/interest/offroading.jpg'
  },
  {
    name: "Gigs sa silingan",
    backgroundUrl: 'src/assets/interest/music.jpg'
  }
];
</script>


<style scoped lang="scss">
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

.bio {
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: min-content;
  grid-gap: 24px;
}

.listU {
  display: flex;
  min-height: 750px;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style-type: none;
  width: 100%;
  min-width: 100%;
  flex-direction: column;

  @media only screen and (min-width: 1280px) {
    flex-direction: row;
    padding: 130px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 70px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 60px;
  }
}

.listL {
  flex: 1;
  display: flex;
  align-items: stretch;
  cursor: pointer;
  transition: all 0.35s ease;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 15, 15, 0.75);
  }

  &.active {
    flex: 6;
    cursor: default;

    &:before {
      background: linear-gradient(180deg, rgba(15, 15, 15, 0) 0%, #111111 100%);
    }
  }
}

h2 {
  font-size: 36px;
  line-height: 36px;
  font-weight: 700;
  text-transform: uppercase;
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 48px;
  }

  @media only screen and (min-width: 1280px) {
    font-size: 30px;
    line-height: 48px;
  }
}

h3 {
  font-weight: bold;
  white-space: nowrap;
  position: absolute;
  z-index: 30;
  opacity: 1;
  top: 50%;
  left: 50%;
  transition: top 0.35s, opacity 0.15s;
  transform-origin: 0 0;
  font-size: 15px;
  text-transform: uppercase;
  transform: translate(-50%, -50%) rotate(0deg);

  @media only screen and (min-width: 1280px) {
    top: 100%;
    left: 50%;
    font-size: 20px;
    transform: translate(-20px, -50%) rotate(-90deg);
  }

  .active & {
    opacity: 0;
    top: 200%;
  }
}

.section-content {
  position: relative;
  z-index: 30;
  opacity: 0;
  align-self: flex-end;
  width: 100%;
  transition: all 0.35s 0.1s ease-out;

  .active & {
    opacity: 1;
  }

  .inner {
    position: absolute;
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    grid-column-gap: 20px;
    align-items: flex-end;
    left: 0;
    bottom: 0;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.25s ease-out;

    @media only screen and (min-width: 768px) {
      grid-auto-flow: column;
      grid-template-columns: calc(100% - 340px) 300px;
      grid-column-gap: 40px;
      padding: 40px;
    }

    @media only screen and (min-width: 1280px) {
      grid-auto-flow: column;
      grid-template-columns: 460px 200px;
      grid-column-gap: 40px;
      padding: 40px;
    }

    .active & {
      opacity: 1;
    }
  }
}

.artist-profile-link {
  pointer-events: none;

  .active & {
    pointer-events: all;
  }
}
</style>