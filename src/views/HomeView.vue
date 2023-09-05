<script setup lang="ts">
import {ref} from "vue";
import Top from "../components/Top.vue";
import Languages from "../components/Languages.vue";
import Works from "../components/Works.vue";
import Interests from "../components/Interests.vue";
import Contact from "../components/Contact.vue";
import Spotify from "@/components/spotify.vue";
import Recenttracks from "@/components/recenttracks.vue";

const isDropdownOpen = ref(false);
const isSubmenuOpen = ref(false);

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function toggleSubmenu() {
  isSubmenuOpen.value = !isSubmenuOpen.value;
}
</script>

<template>
  <main>
    <input id="burger" type="checkbox" hidden=""/>
    <label for="burger">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <nav class="Quick-navigation">
      <a href="#Top" class="Quick-navigation-item pad">Home</a>
      <a href="#Languages" class="Quick-navigation-item pad">Languages</a>
      <a href="#Works" class="Quick-navigation-item pad">Works</a>
      <a href="#Interests" class="Quick-navigation-item pad">Interests</a>
      <a href="#Contact" class="Quick-navigation-item pad">Contact</a>
      <div class="Scroll-progress-indicator"></div>
    </nav>

    <section id="Top" class="js-scroll-step">
      <Top/>
    </section>

    <section id="Languages" class="js-scroll-step">
      <languages/>
    </section>

    <section id="Works" class="js-scroll-step">
      <works/>
    </section>

    <section id="Interests" class="js-scroll-step">
      <interests/>
    </section>
    <section id="Spotify" class="js-scroll-step">
      <spotify/>
    </section>


    <section id="Contact" class="js-scroll-step" style="height: 250px">
      <contact/>
    </section>
    <footer class="bg-black">
      <div class="container">
        <h2 class="text-center">Get in touch</h2>
        <div class="row contact">
          <div class="col-md-6 text-right">
            <div class="contacts-data">
              <h3>Ready to hire me?</h3>
              <button class="btn btn-default transparent" data-bs-toggle="modal" data-bs-target="#resumeModal">View My
                Resume <i class="fa-regular fa-file"></i></button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="contacts-data">
              <i class="fa fa-paper-plane fa-2xl"></i>
              <span class="contact-text">philipcads@gmail.com</span>
            </div>
            <div class="contacts-data">
              <i class="fa-regular fa-phone fa-2xl"></i>
              <span class="contact-text">+63 976 043 9449</span>
            </div>
            <div class="contacts-data">
              <i class="fa fa-skype fa-2xl"></i>
              <span class="contact-text">live:philipcads</span>
            </div>
          </div>
        </div>
        <p class="text-center">
          PHILIP AUGUSTINE B. CADUNGOG <br>
          <span style="font-size: 12px; opacity: 0.5">ALL RIGHTS RESERVED. 2023</span>
        </p>
      </div>
    </footer>
    <button class="Scroll-to-top">Scroll To Top</button>
  </main>
  <!-- Modal -->
  <div class="modal fade" id="resumeModal" tabindex="-1" aria-labelledby="resumeTitle">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title text-md-center" id="resumeTitle">Resume</h3>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div><!-- /.modal-header -->
        <embed src="https://github.com/Phlavi0/PortfolioPhil/blob/master/src/assets/PHILIP%20AUGUSTINE%20CADUNGOG.pdf"
               frameborder="0" width="100%" height="500px">
          <div class="row text-center">
            <a class="btn td-btn outline green iconBtn mb-30" href="https://www.linkedin.com/in/philip-augustine-cadungog-823777262"
               target="_blank"><span class="glyphicon glyphicon-user"></span> View LinkedIn Profile</a>
          </div><!-- /.modal-footer -->
        </div><!-- /.modal-body -->
      </div><!-- /.modal-content -->
    </div>
  <div class="animateme">
    <ul class="bg-bubbles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>

</template>
<style scoped>

input + label {
  position: fixed;
  top: 20px;
  right: 40px;
  height: 20px;
  width: 15px;
  z-index: 6;
}
input + label span {
  position: absolute;
  width: 100%;
  height: 2px;
  top: 50%;
  margin-top: -1px;
  left: 0;
  display: block;
  background: white;
  transition: 0.5s;
}
input + label span:first-child {
  top: 3px;
}
input + label span:last-child {
  top: 16px;
}
label:hover {
  cursor: pointer;
}
input:checked + label span {
  opacity: 0;
  top: 50%;
}
input:checked + label span:first-child {
  opacity: 1;
  transform: rotate(405deg);
}
input:checked + label span:last-child {
  opacity: 1;
  transform: rotate(-405deg);
}
input ~ nav {
  z-index: 5;
  overflow: hidden;
}
input ~ nav > ul > li {
  opacity: 0;
  transition: 0.5s;
  transition-delay: 0s;
}
input ~ nav > ul > li > a {
  text-decoration: none;
  text-transform: uppercase;
  color: #020304;
  font-weight: 700;
  font-family: sans-serif;
  display: block;
  padding: 30px;
}

footer {
  background: rgba(25, 25, 25, 0.9);
  color: #fff;
  padding: 10px;
}

.text-center {
  margin-top: 20px;
}

.contact {
  margin: 2% 0;
}

.contacts-data {
  margin: 3% 7%;
}

.contacts-data .btn {
  background: transparent;
  padding: 15px 20px;
  color: #fff;
  text-transform: uppercase;
  margin-top: 7%;
}

.contacts-data .btn:hover {
  background: #ffb424;
  color: #fff;
}

.contact-text {
  font-family: "Lato", serif;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.33rem;
  padding-left: 7%;
}

.animateme {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.bg-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.bg-bubbles li {
  position: absolute;
  list-style: none;
  width: 40px;
  height: 40px;
  background-color: #353535;
  bottom: 60px;
  -webkit-animation: square 25s infinite;
  animation: square 25s infinite;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
  opacity: 0;
}

.bg-bubbles li:nth-child(1) {
  left: 3%;
  border-radius: 50em;
  background: transparent;
  border: 4px solid #353535;
}

.bg-bubbles li:nth-child(2) {
  left: 6%;
  width: 75px;
  height: 75px;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
  -webkit-animation-duration: 17s;
  animation-duration: 17s;
}

.bg-bubbles li:nth-child(3) {
  left: 15%;
  width: 175px;
  height: 175px;
  -webkit-animation-delay: 4s;
  animation-delay: 4s;
}

.bg-bubbles li:nth-child(4) {
  left: 40%;
  width: 90px;
  height: 90px;
  -webkit-animation-duration: 22s;
  animation-duration: 22s;
}

.bg-bubbles li:nth-child(5) {
  left: 70%;
  background: transparent;
  border: 4px solid #353535;
}

.bg-bubbles li:nth-child(6) {
  left: 90%;
  width: 90px;
  height: 90px;
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
  border-radius: 50em;
  background: transparent;
  border: 4px solid #353535;
}

.bg-bubbles li:nth-child(7) {
  left: 32%;
  width: 60px;
  height: 60px;
  -webkit-animation-delay: 7s;
  animation-delay: 7s;
  background: transparent;
  border: 4px solid #353535;
}

.bg-bubbles li:nth-child(8) {
  left: 55%;
  width: 50px;
  height: 50px;
  -webkit-animation-delay: 15s;
  animation-delay: 15s;
  -webkit-animation-duration: 40s;
  animation-duration: 40s;
}

.bg-bubbles li:nth-child(9) {
  left: 30%;
  width: 140px;
  height: 140px;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
  -webkit-animation-duration: 40s;
  animation-duration: 40s;
  border-radius: 50em;
  background: transparent;
  border: 4px solid #353535;
}

.bg-bubbles li:nth-child(10) {
  left: 90%;
  width: 60px;
  height: 60px;
  -webkit-animation-delay: 11s;
  animation-delay: 11s;
}

.bg-bubbles li:nth-child(11) {
  left: 10%;
  width: 40px;
  height: 40px;
  -webkit-animation-delay: 13s;
  animation-delay: 13s;
  border-radius: 50em;
}

.bg-bubbles li:nth-child(12) {
  left: 55%;
  width: 175px;
  height: 175px;
  -webkit-animation-delay: 7s;
  animation-delay: 7s;
  background: transparent;
  border: 4px solid #353535;
}

.bg-bubbles li:nth-child(13) {
  left: 65%;
  width: 100px;
  height: 100px;
  -webkit-animation-delay: 8s;
  animation-delay: 8s;
  border-radius: 50em;
}

@-webkit-keyframes square {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-700px) rotate(600deg);
    opacity: 1;
  }
}

@keyframes square {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-700px) rotate(600deg);
    opacity: 0;
  }
}

</style>