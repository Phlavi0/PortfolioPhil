<script setup>
import Top from "@/components/Top.vue";
import Languages from "@/components/Languages.vue";
import Works from "@/components/Works.vue";
import Interests from "@/components/Interests.vue";
import Contact from "@/components/Contact.vue";

</script>

<template>
  <main>
    <nav className="Quick-navigation">
      <a href="#A" className="Quick-navigation-item pad">Home</a>
      <a href="#B" className="Quick-navigation-item pad">Languages</a>
      <a href="#C" className="Quick-navigation-item pad">Works</a>
      <a href="#D" className="Quick-navigation-item pad">Interests</a>
      <a href="#E" className="Quick-navigation-item pad">Contact</a>
      <div className="Scroll-progress-indicator"></div>
    </nav>

    <section id="A" className="js-scroll-step">
      <Top/>
    </section>

    <section id="B" className="js-scroll-step">
      <languages/>
    </section>

    <section id="C" className="js-scroll-step">
      <works/>
    </section>

    <section id="D" className="js-scroll-step">
      <interests/>
    </section>

    <section id="E" className="js-scroll-step" style="height: 250px">
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
    <button className="Scroll-to-top">Scroll To Top</button>
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
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-10 col-lg-offset-1">
              <h2>Experience</h2>
            </div>
          </div>
          <div class="row mb-15">
            <div class="col-md-3 col-lg-2 col-lg-offset-1">
              <p class="year">2012 - Present</p>
            </div>
            <div class="col-md-9 col-lg-8">
              <h4>Freelancer</h4>
              <p class="mb-0"><strong>Too Much Sauce - Web Design and Development</strong></p>
              <p>Designed and developed a website using Bootstrap to help show off a series of animated GIFs. Currently
                working on converting into a Wordpress theme.</p>
              <p class="mb-0"><strong>Ryan Bechtel - Web Design and Development</strong></p>
              <p>Redesigned and developed a responsive website that better highlights the client’s work reel.</p>
              <p class="mb-0"><strong>Kaelyn Benham - Web Consultation</strong></p>
              <p>Automated process of capturing new subscribers’ email addresses by integrating Eventbrite and MailChimp
                using Zapier. Coded temporary “Coming Soon” page with MailChimp signup form. Helped set up hosting
                service with domain transfers and FTP accounts.</p>
              <p class="mb-0"><strong>MK Education - Web and Graphic Design</strong></p>
              <p>Designed a set of header banners for website. Helped customize and complete website using Wix.</p>
              <p class="mb-0"><strong>Chef Arun - Graphic Design</strong></p>
              <p>Developed a logo for the upcoming line of Thai packaged foods. Created artwork for rice bag
                packaging.</p>
              <p class="mb-0"><strong>East China Inn - Graphic Design</strong></p>
              <p>Designed punch card coupons to increase customer loyalty.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-lg-2 col-lg-offset-1">
              <p class="year">2016</p>
            </div>
            <div class="col-md-9 col-lg-8">
              <h4>Inside Sales / Customer Service Representative</h4>
              <p><strong>D&amp;H Granite and Marble Supply</strong></p>
              <ul>
                <li>Standardized the order fulfillment workflow to establish consistency between team members.</li>
                <li>Responsible for assisting customers with project inquiries and estimates, coordinating fabrication
                  and installation schedules, and conflict resolution.
                </li>
                <li>Other duties included managing inventory and training new employees.</li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-5 col-lg-offset-1">
              <div class="row">
                <div class="col-xs-12">
                  <h2>Education</h2>
                </div>
              </div>
              <div class="row mb-15">
                <div class="col-sm-3 col-md-4">
                  <p class="year">2012 - 2015</p>
                </div>
                <div class="col-sm-9 col-md-8">
                  <p class="mb-0"><strong>MFA in Web Design &amp; New Media</strong></p>
                  <p>Academy of Art University</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3 col-md-4">
                  <p class="year">2007 - 2010</p>
                </div>
                <div class="col-sm-9 col-md-8">
                  <p class="mb-0"><strong>BFA in Industrial Design</strong></p>
                  <p>Columbia College Chicago</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-5">
              <div class="row">
                <div class="col-xs-12">
                  <h2>Skills</h2>
                </div>
              </div>
              <div class="row">
                <ul>
                  <li><strong>Web:</strong> HTML, CSS, JavaScript, jQuery, PHP (limited)</li>
                  <li><strong>UX/UI Tools:</strong> Sketch, Balsamiq, Axure, InVision</li>
                  <li><strong>Adobe CC:</strong> Illustrator, InDesign, Photoshop</li>
                  <li><strong>Other:</strong> Positive, adaptable, attentive, resourceful</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row text-center">
            <a class="btn td-btn outline green mb-30"
               href="https://github.com/tiffanyadu/portfolio/blob/master/assets/docs/Tiffany_Du_Resume.pdf"
               target="_blank" download><span class="glyphicon glyphicon-download-alt"></span> Download PDF</a>
            <a class="btn td-btn outline green iconBtn mb-30" href="https://www.linkedin.com/in/tiffanyadu/"
               target="_blank"><span class="glyphicon glyphicon-user"></span> View LinkedIn Profile</a>
          </div>
          <div class="modal-footer center">
            <button type="button" class="btn td-btn outline small" data-bs-dismiss="modal">Close Resume</button>
          </div><!-- /.modal-footer -->
        </div><!-- /.modal-body -->
      </div><!-- /.modal-content -->
    </div>
  </div>
  <div className="animateme">
    <ul className="bg-bubbles">
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

.contact .button-icon {
  padding-left: 10px;
}

.contact-text {
  font-family: "Lato", serif;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.33rem;
  padding-left: 7%;
}

.pad {
  margin-top: 35%;
  margin-right: 15%;
  text-align: right;
}

.animateme {
  position: fixed;
  top: 0px;
  left: 0px;
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
  display: block;
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
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-700px) rotate(600deg);
    transform: translateY(-700px) rotate(600deg);
    opacity: 1;
  }
}

@keyframes square {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-700px) rotate(600deg);
    transform: translateY(-700px) rotate(600deg);
    opacity: 0;
  }
}

</style>