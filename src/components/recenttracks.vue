<template>
  <div class="container recent-tracks">
    <div class="recentracks">
      <h3 class="recent-track-title">Recent Tracks · Phil Austin</h3>
      <h6>Live data From last.fm</h6>

      <table class="table table-striped table-dark">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col"></th>
          <th scope="col">Artist</th>
          <th scope="col">Album</th>
          <th scope="col">Date</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="track in tracks.slice(0, 7)">
          <th scope="row" >{{ tracks.indexOf(track) + 1 }}</th>
          <img style="max-height: 50px;" v-if="track.date?.['#text'] !== undefined" :src="getimgURL(track)" alt="">
          <img v-else :src="getimgURL(track)" alt="">
          <td>{{ track.name }}</td>
          <td>{{ track.artist["#text"] }}</td>
          <td>{{ track.album["#text"] }}</td>
          <td v-if="track.date?.['#text'] !== undefined">
            {{ computeTimeElapsed({lastPlayedTimestamp: track.date["#text"]}) }}
          </td>
          <td v-else> Now Listening...</td>
        </tr>
        </tbody>
      </table>

<!--      <div class="recent-track" v-for="track in tracks.slice(0, 7)">-->
<!--        <div class="recent-track-number">{{ tracks.indexOf(track) + 1 }}</div>-->
<!--        <img class="recent-track-image" v-if="track.date?.['#text'] !== undefined" :src="getimgURL(track)" alt=""/>-->
<!--        <img class="recent-track-image fa-beat-fade" v-else :src="getimgURL(track)" alt=""/>-->
<!--        <div class="recent-track-name"> {{ track.name }}</div>-->
<!--        <div class="recent-track-artist">{{ track.artist["#text"] }}</div>-->
<!--        <div class="recent-track-album">{{ track.album["#text"] }}</div>-->
<!--        <div class="recent-track-date" v-if="track.date?.['#text'] !== undefined">-->
<!--          {{ computeTimeElapsed({lastPlayedTimestamp: track.date["#text"]}) }}-->
<!--        </div>-->
<!--        <div v-else class="recent-track-date">Now Listening...</div>-->
<!--      </div>-->
    </div>
  </div>
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
.container {
  margin-left: 20px;
}

.recent-tracks {
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

th, td{
  font-size: 12px;
}

.recentracks {
  padding: 20px;
  border-radius: 10px;
}

</style>