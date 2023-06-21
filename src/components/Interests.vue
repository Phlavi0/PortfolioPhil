<template>
  <h1 class="title fixed-top inter">SOME OF <span class="outlinetext">MY INTERESTS</span></h1>
  <section class="carousel">
    <div id="homepage-slider" class="st-slider ">
      <div class="e68_100">
        <div class="e68_98"></div>
        <div class=e41_98>
          <a href="https://open.spotify.com/user/n261goyy88inw6x2dbaybm3cv?si=aa55e782cc3044ce" target="_blank">
            <div class="ei41_98_39_16"></div>
          </a>

        </div>
        <span class="e68_99 fw-bold">Phil Austin <br>
            <span style="font-size: 12px">10 public play lists | 6 Followers</span></span>
      </div>
      <div class="playlistt inter">Playlists</div>
      <input hidden type="radio" class="cs_anchor radio" name="slider" id="slide1"/>
      <input hidden type="radio" class="cs_anchor radio" name="slider" id="slide2"/>
      <input hidden type="radio" class="cs_anchor radio" name="slider" id="slide3"/>
      <input hidden type="radio" class="cs_anchor radio" name="slider" id="play1"/>

      <div class="images">
        <div class="images-inner">
          <div class="image-slide">
            <iframe style="border-radius:12px"
                    src="https://open.spotify.com/embed/playlist/1zvMMlppmYMq3ngfvNTJ1s?utm_source=generator"
                    width="100%" height="352" frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>
          </div>
          <div class="image-slide">
            <iframe style="border-radius:12px"
                    src="https://open.spotify.com/embed/playlist/0mqLF7j8TXMMUGLn5GNnvl?utm_source=generator"
                    width="100%" height="352" frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>
          </div>
          <div class="image-slide">
            <iframe style="border-radius:12px"
                    src="https://open.spotify.com/embed/playlist/458n0UKC0FkL1hyFWe70IY?utm_source=generator"
                    width="100%" height="352" frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>
          </div>
        </div>
      </div>

      <div class="labels">
        <div class="fake-radio">
          <label for="slide1" class="radio-btn"></label>
          <label for="slide2" class="radio-btn"></label>
          <label for="slide3" class="radio-btn"></label>
        </div>
      </div>
    </div>
  </section>

  <section class="container recent-tracks">
    <div class="recentracks">
      <h3 class="recent-track-title">Recent Tracks · Phil Austin</h3>
      <div class="recent-track" v-for="track in tracks.slice(0, 7)">
        <div class="recent-track-number">{{ tracks.indexOf(track) + 1 }}</div>
        <img class="recent-track-image" v-if="track.date?.['#text'] !== undefined" :src="getimgURL(track)"/>
        <img class="recent-track-image fa-beat-fade" v-else :src="getimgURL(track)"/>
        <div class="recent-track-name"> {{ track.name }}</div>
        <div class="recent-track-artist">{{ track.artist["#text"] }}</div>
        <div class="recent-track-album">{{ track.album["#text"] }}</div>
        <div class="recent-track-date" v-if="track.date?.['#text'] !== undefined">
          {{ computeTimeElapsed({lastPlayedTimestamp: track.date["#text"]}) }}
        </div>
        <div v-else class="recent-track-date">Now Listening...</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {useLastfm} from "../Composables/use-lastfm";
import moment from "moment";

const {tracks} = useLastfm();

function computeTimeElapsed({lastPlayedTimestamp}: { lastPlayedTimestamp: any }) {
  return moment(lastPlayedTimestamp, 'DD MMM YYYY, HH:mm').add(8, 'hours').fromNow();
}
function getimgURL(track: any): string {
  return track.image.find((image: any) => image.size === 'extralarge')?.['#text'] || '';
}


</script>

<style scoped>
.e68_100 {
  width: 282.7596740722656px;
  height: 76.30022430419922px;
}

.e68_98 {
  background-color: rgba(24.000000469386578, 24.000000469386578, 24.000000469386578, 1);
  width: 282.7596740722656px;
  height: 76.30022430419922px;
  position: absolute;
  left: 0px;
  top: 0px;
  border-radius: 14.960831642150879px;
}

.e41_98 {
  width: 67.32373809814453px;
  height: 65.80962371826172px;
  position: absolute;
  left: 6.732351303100586px;
  top: 5.235898494720459px;
}

.ei41_98_39_16 {
  width: 64px;
  height: 62px;
  background-image: url("src/assets/icons/Spotify_icon.png");
  background-size: cover;
}

.e68_99 {
  color: rgba(255, 255, 255, 1);
  font-size: 15px;
  position: absolute;
  left: 87px;
  top: 9px;
  text-align: left;
  letter-spacing: 0;
}

.carousel {
  margin-top: 100px;
  margin-left: 40px
}


.playlistt {
  margin: 20px;
}

.images {
  overflow: hidden;
}

.images-inner {
  width: 500%;
  transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
  transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
}

.image-slide {
  width: 20%;
  float: left;
}

.image-slide,
.fake-radio,
.radio-btn {
  transition: all 0.5s ease-out;
}

.fake-radio {
  float: right;
}

/* Move slides overflowed container */
#slide1:checked ~ .images .images-inner {
  margin-left: 0;
}

#slide2:checked ~ .images .images-inner {
  margin-left: -100%;
}

#slide3:checked ~ .images .images-inner {
  margin-left: -200%;
}


/* Color of bullets */
#slide1:checked ~ div .fake-radio .radio-btn:nth-child(1),
#slide2:checked ~ div .fake-radio .radio-btn:nth-child(2),
#slide3:checked ~ div .fake-radio .radio-btn:nth-child(3) {
  background: red;
}

.radio-btn {
  width: 9px;
  height: 9px;
  border-radius: 5px;
  background: gray;
  display: inline-block !important;
  margin: 0 1px;
  cursor: pointer;
}

/* Color of bullets - END */


/* Calculate AUTOPLAY for BULLETS */
@keyframes bullet {
  0%, 33.32333333333334% {
    background: red;
  }
  33.333333333333336%, 100% {
    background: gray;
  }
}


#play1:checked ~ div .fake-radio .radio-btn:nth-child(1) {
  animation: bullet 12300ms infinite -1000ms;
}

#play1:checked ~ div .fake-radio .radio-btn:nth-child(2) {
  animation: bullet 12300ms infinite 3100ms;
}

#play1:checked ~ div .fake-radio .radio-btn:nth-child(3) {
  animation: bullet 12300ms infinite 7200ms;
}

/* Calculate AUTOPLAY for BULLETS - END */


/* Calculate AUTOPLAY for SLIDES */
@keyframes slide {
  0%, 25.203252032520325% {
    margin-left: 0;
  }
  33.333333333333336%, 58.53658536585366% {
    margin-left: -100%;
  }
  66.66666666666667%, 91.869918699187% {
    margin-left: -200%;
  }
}


.st-slider > #play1:checked ~ .images .images-inner {
  animation: slide 12300ms infinite;
}

/* Calculate AUTOPLAY for SLIDES - END */


/* Calculate AUTOPLAY for CAPTION */
@keyframes caption {
  0%, 33.32333333333334% {
    opacity: 1;
  }
  33.333333333333336%, 100% {
    opacity: 0;
  }
}

/* Calculate AUTOPLAY for CAPTION - END */


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
  font-family: "Inter Black";
}

.container {
  margin-left: 20px;
}

section.recent-tracks {
  flex-direction: column;
  margin-right: 50px;
}

section.recent-tracks .recent-track {
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: 50px repeat(4, minmax(0, 1fr)) 100px;
  font-size: 15px;
  align-items: center;
  padding: 5px 0;
  width: 550px;
}

section.recent-tracks .recent-track .recent-track-image {
  width: 50px;
  height: 50px;
}

.recent-track-image {
  border-radius: 5px;
}

section.recent-tracks .recent-track .recent-track-name {
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
}

section.recent-tracks .recent-track .recent-track-artist,
section.recent-tracks .recent-track .recent-track-album,
section.recent-tracks .recent-track .recent-track-number {
  display: flex;
  justify-content: center;
}

section.recent-tracks .recent-track .recent-track-date {
  display: flex;
  justify-content: flex-end;
  color: #B7B7B7;
  font-size: 14px;
}

.recentracks {
  background-color: #2c3e50;
  padding: 20px;
  border-radius: 10px;
}

.recent-track-title {

}
</style>