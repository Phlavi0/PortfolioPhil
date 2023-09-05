<template>
    <div class="profiletag">
        <div class="e68_100">
          <div class="e68_98"></div>
          <div class="e41_98" style="padding: 2%">
            <a href="https://open.spotify.com/user/n261goyy88inw6x2dbaybm3cv?si=aa55e782cc3044ce" target="_blank">
              <div class="fa-brands fa-spotify fa-2xl" style="color: #02f25e;"></div>
            </a>

          </div>
          <span class="e68_99 fw-bold">Phil Austin <br>
            <span style="font-size: 12px">10 public play lists | 6 Followers</span></span>
        </div>
        <div class="playlistt inter">Playlists</div>
      <ul style="list-style-type: none">
        <li><iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0mqLF7j8TXMMUGLn5GNnvl?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></li>
        <li><iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1zvMMlppmYMq3ngfvNTJ1s?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></li>
        <li><iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/458n0UKC0FkL1hyFWe70IY?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></li>
      </ul>
    </div>
    <div class="recent-tracks">
      <h3 class="recent-track-title">Recent Tracks · Phil Austin</h3>
      <p class="paragraph">Live data From last.fm API</p>

      <table class="table table-striped table-dark">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col"></th>
          <th scope="col">Album</th>
          <th scope="col">Date</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="track in tracks.slice(0, 7)">
          <th scope="row">{{ tracks.indexOf(track) + 1 }}</th>
          <td v-if="track.date?.['#text'] !== undefined">

          </td>
          <td v-else>
            <img class="fa-beat-fade" style="max-height: 50px;" :src="getimgURL(track)" alt="">
          </td>
          <td><strong >{{ track.name }}</strong> <br> {{ track.artist["#text"] }}</td>
          <td>{{ track.album["#text"] }}</td>
          <td v-if="track.date?.['#text'] !== undefined">
            {{ computeTimeElapsed({lastPlayedTimestamp: track.date["#text"]}) }}
          </td>
          <td v-else> Now Listening...</td>
        </tr>
        </tbody>
      </table>
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
.e68_100 {
  width: 282px;
  height: 76px;
}

.e68_98 {
  background-color: rgba(24.000000469386578, 24.000000469386578, 24.000000469386578, 1);
  width: 282px;
  height: 76px;
  position: absolute;
  border-radius: 14px;
}

.e41_98 {
  width: 67px;
  height: 65px;
  left: 6px;
  top: 5px;
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

.profiletag {
  margin-top: 50px;
  margin-left: 50px;

}


.inter {
  font-family: "Inter Black", serif;
}
.paragraph{
  font-size: 13px;
}
th, td {
  font-size: 12px;
}
@media screen and (min-width: 992px) {
  .recent-tracks{
    max-width: 750px;
    overflow: hidden;
    margin-left: 50px;
    margin-right: 50px;
  }
  .class-iframe{
    margin-right: 20px;
  }
}

@media screen and (min-width: 768px){

}

@media screen and (max-width: 767px) {

  }


</style>