<template>
  <h1 class="title fixed-top unifont">SOME OF <span class="outlinetext">MY WORK</span></h1>
  <div class="projcard-container">
    <div class="projcard" v-for="(project, index) in projects" :key="index" @click="openProject(project.href)">
        <div class="projcard-innerbox">
          <img class="projcard-img" :src="project.src" alt="" />
          <div class="projcard-textbox">
            <div class="projcard-title">{{project.title}}</div>
            <div class="projcard-subtitle">{{project.subtitle}}</div>
            <div class="projcard-bar"></div>
            <div class="projcard-description">{{project.description}}</div>
            <div class="projcard-tagbox">
              <span class="projcard-tag" v-for="(lang, index) in project.langs" :key="index">{{lang}}</span>
            </div>         
          </div>
        </div>     
    </div>

  </div>
</template>
<script setup lang="ts">

import { ref } from 'vue';


const openProject = (url: string) => {
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

const projects = ref<any>([
  {

    src: "https://github.com/Phlavi0/PortfolioPhil/blob/master/src/assets/JewishCourses.png?raw=true",

    title: "Jewish Courses",
    subtitle: "A Modern Learning Management System with Affiliate Marketing.",

    description: "A custom-built Learning Management System featuring user auth, course management, and a comprehensive affiliate engine. The backend, built with Node.js and Express, handles complex financial logic: calculating affiliate commissions, processing student payments via Stripe, and automating split payouts to instructors and affiliates.",

    dir: "https://www.canva.com/design/DAFoaVAEKUI/3seoRasUpnuEBOd-49lZHw/view?utm_content=DAFoaVAEKUI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    langs:[
      "React",
      "Node.js",
      "Stripe payment API",
    ],
    href: "https://jewishcourses-backend-1061871693366.us-central1.run.app",

  },

  {

    src: "https://github.com/Phlavi0/PortfolioPhil/blob/master/src/assets/vetcare.jpg?raw=true",

    title: "VetCare",
    subtitle: "A web-based pet care management system for the Cats N Dogs Veterinary Clinic in Dumaguete City. ",

    description: "The system features the following, clinic's management system. This features EMR analytics and visualization that compile the previous diagnosis based on current symptoms, notifications for low and expired supplies, SMS Bulk Messaging and Email for upcoming appointments and revaccinations, and a patient portal for pet owners.",

    dir: "https://www.canva.com/design/DAFoaVAEKUI/3seoRasUpnuEBOd-49lZHw/view?utm_content=DAFoaVAEKUI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    langs:[
      "Laravel/PHP",
      "Bootstrap",
      "Restfull API",
    ]

  },

  {

    src: "https://github.com/Phlavi0/PortfolioPhil/blob/master/src/assets/bloodbank.png?raw=true",

    title: "Blood Bank System",
    subtitle: "",

    description: "Management System, Developed using Laravel Framework and PHP. Assigned in designing (UI) frontend of the system.",

    dir: "https://ccs82022.github.io/",
    langs:[
      "Vue",
      "Bootstrap",
      "Restfull API",
    ]

  },

  {

    src: "https://github.com/Phlavi0/PortfolioPhil/blob/master/src/assets/dentalsystem.png?raw=true",

    title: "DENTAL INFORMATION AND APPOINTMENT SYSTEM",
    subtitle: "",

    description: "CRUD management system, Developed using Visual Basic and DB2. Assigned in planning, backend. and focusing more on the frontend of the system.",

    dir: "https://github.com/ryjaymes12/dentalinformationandappointmentsystem",
    langs:[
      "VB",
      "DB2",
    ]

  },

  {

    src: "https://github.com/Phlavi0/PortfolioPhil/blob/master/src/assets/pharmsystem.png?raw=true",

    title: "Pharmaceutical Drug Distributor System",
    subtitle: "",

    description: "Management system, Developed using Visual Basic and DB2. Assigned with designing the database and the back-end.",

    dir: "https://github.com/ryjaymes12/pdds",
    langs:[
      "VB",
      "DB2",
    ]

  }

]);

</script>

<style scoped>
.title{
  float: left;
  margin-left: 5%;
  margin-top: 2%;
  position: absolute;
  text-align:left;
  vertical-align:text-top;
}


.outlinetext {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #ffffff;
  -webkit-text-fill-color: transparent;
}

.projcard-container {
  margin: 100px 0;
}

/* Actual Code: */
.projcard-container,
.projcard-container * {
  box-sizing: border-box;
}
.projcard-container {
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
}
.projcard {
  position: relative;
  width: 100%;
  height: 300px;
  margin-bottom: 40px;
  border-radius: 10px;
  font-size: 18px;
  overflow: hidden;
  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, .66);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.projcard:hover {
  box-shadow: 0 34px 32px -33px rgba(0, 0, 0, .18);
  transform: translate(0px, -3px);
}
.projcard::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(-70deg, #424242, transparent 50%);
  opacity: 0.07;
}
.projcard:nth-child(2n)::before {
  background-image: linear-gradient(-250deg, #424242, transparent 50%);
}
.projcard-innerbox {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.projcard-img {
  position: absolute;
  height: 300px;
  width: 450px;
  top: 0;
  left: 0;
  transition: transform 0.2s ease;
}
.projcard:nth-child(2n) .projcard-img {
  left: initial;
  right: 0;
}
.projcard:hover .projcard-img {
  transform: scale(1.05) rotate(1deg);
}
.projcard:hover .projcard-bar {
  width: 70px;
}
.projcard-textbox {
  position: absolute;
  top: 7%;
  bottom: 7%;
  left: 470px;
  width: calc(100% - 470px);
  font-size: 17px;
}
.projcard:nth-child(2n) .projcard-textbox {
  left: initial;
  right: 430px;
  margin-right: 30px;
}
.projcard-textbox::before,
.projcard-textbox::after {
  content: "";
  position: absolute;
  display: block;
  top: -20%;
  left: -55px;
  height: 140%;
  width: 60px;
  transform: rotate(8deg);
}
.projcard:nth-child(2n) .projcard-textbox::before {
  display: none;
}
.projcard-textbox::after {
  display: none;
  left: initial;
  right: -55px;
}
.projcard:nth-child(2n) .projcard-textbox::after {
  display: block;
}
.projcard-textbox * {
  position: relative;
}
.projcard-title {
  font-family: 'Voces', 'Open Sans', arial, sans-serif;
  font-size: 24px;
}
.projcard-subtitle {
  font-family: 'Voces', 'Open Sans', arial, sans-serif;
  color: #888;
}
.projcard-bar {
  left: -2px;
  width: 50px;
  height: 5px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: #424242;
  transition: width 0.2s ease;
}
.projcard-description {
  z-index: 10;
  font-size: 15px;
  color: #888;
  height: 125px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.projcard-tagbox {
  position: absolute;
  bottom: 3%;
  font-size: 14px;
  cursor: default;
  user-select: none;
  pointer-events: none;
}
.projcard-tag {
  display: inline-block;
  background: darkslategray;
  color: white;
  border-radius: 3px 0 0 3px;
  line-height: 26px;
  padding: 0 10px 0 23px;
  position: relative;
  margin-right: 20px;
  cursor: default;
  user-select: none;
  transition: color 0.2s;
}
.projcard-tag::before {
  content: '';
  position: absolute;
  background: #fff;
  border-radius: 10px;
  box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
  height: 6px;
  left: 10px;
  width: 6px;
  top: 10px;
}
.projcard-tag::after {
  content: '';
  position: absolute;
  border-bottom: 13px solid transparent;
  border-left: 10px solid darkslategray;
  border-top: 13px solid transparent;
  right: -10px;
  top: 0;
}


</style>

<!--<template>-->

<!--    <div class="container">-->

<!--        <h1 class="title unifont">SOME OF <span class="outlinetext">MY WORK</span></h1>-->

<!--      <div class="projects-container">-->

<!--        <div class="post center" v-for="(project, index) in projects" :key="index">-->

<!--          <img :src="project.src" class="post-thumb" alt=""/>-->

<!--          <div class="post-text">-->

<!--            <h2 class="post-title unifont">{{project.title}}</h2>-->

<!--            <div class="post-excerpt">-->

<!--              {{project.description}}-->

<!--            </div>-->
<!--            <a class="post-bottom border text-decoration-none" :href="project.dir" target="_blank">VIEW PROJECT</a>-->

<!--          </div>-->



<!--          <br>-->

<!--        </div>-->

<!--      </div>-->

<!--    </div>-->

<!--</template>-->


<!--<script setup lang="ts">-->

<!--import { ref } from 'vue';-->


<!--const projects = ref<any>([-->

<!--  {-->

<!--    src: "https://github.com/Phlavi0/PortfolioPhil/blob/master/src/assets/vetcare.jpg?raw=true",-->

<!--    title: "VetCare",-->

<!--    description: "A web-based pet care management system for the Cats N Dogs Veterinary Clinic in Dumaguete City. " +-->
<!--        "The system features the following, clinic's management system. This features EMR analytics and visualization that compile the previous diagnosis based on current symptoms, notifications for low and expired supplies, SMS Bulk Messaging and Email for upcoming appointments and revaccinations, and a patient portal for pet owners.",-->

<!--    dir: "https://www.canva.com/design/DAFoaVAEKUI/3seoRasUpnuEBOd-49lZHw/view?utm_content=DAFoaVAEKUI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"-->

<!--  },-->

<!--  {-->

<!--    src: "https://github.com/Phlavi0/PortfolioPhil/blob/master/src/assets/bloodbank.png?raw=true",-->

<!--    title: "Blood Bank System",-->

<!--    description: "Management System, Developed using Laravel Framework and PHP. Assigned in designing (UI) frontend of the system.",-->

<!--    dir: "https://ccs82022.github.io/"-->

<!--  },-->

<!--  {-->

<!--    src: "https://github.com/Phlavi0/PortfolioPhil/blob/master/src/assets/dentalsystem.png?raw=true",-->

<!--    title: "DENTAL INFORMATION AND APPOINTMENT SYSTEM",-->

<!--    description: "CRUD management system, Developed using Visual Basic and DB2. Assigned in planning, backend. and focusing more on the frontend of the system.",-->

<!--    dir: "https://github.com/ryjaymes12/dentalinformationandappointmentsystem"-->

<!--  },-->

<!--  {-->

<!--    src: "https://github.com/Phlavi0/PortfolioPhil/blob/master/src/assets/pharmsystem.png?raw=true",-->

<!--    title: "Pharmaceutical Drug Distributor System",-->

<!--    description: "Management system, Developed using Visual Basic and DB2. Assigned with designing the database and the back-end.",-->

<!--    dir: "https://github.com/ryjaymes12/pdds"-->

<!--  }-->

<!--]);-->

<!--</script>-->


<!--<style>-->

<!--.title{-->
<!--  float: left;-->
<!--  margin-left: 5%;-->
<!--  margin-top: 2%;-->
<!--  position: absolute;-->
<!--  text-align:left;-->
<!--  vertical-align:text-top;-->
<!--}-->


<!--.outlinetext {-->

<!--  -webkit-text-stroke-width: 1px;-->

<!--  -webkit-text-stroke-color: #ffffff;-->

<!--  -webkit-text-fill-color: transparent;-->

<!--}-->


<!--.projects-container {-->

<!--  padding: 100px 0;-->

<!--}-->


<!--.post {-->

<!--  margin: 20px auto;-->

<!--  padding: 20px;-->

<!--  border-radius: 3px;-->

<!--  width: 100%;-->

<!--  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);-->

<!--  display: flex;-->

<!--  align-items: center;-->

<!--}-->


<!--.post-thumb {-->

<!--  width: 400px;-->

<!--  height: 200px;-->

<!--  margin-right: 20px;-->

<!--  border-radius: 3px;-->
<!--  float: left;-->

<!--}-->


<!--.post-text {-->
<!--  float: right;-->
<!--  flex-grow: 1;-->
<!--  color: #c5e8ef;-->
<!--}-->


<!--.post-title {-->

<!--  margin: 0;-->

<!--  padding: 0;-->

<!--  font-size: 24px;-->

<!--  margin-bottom: 10px;-->

<!--}-->


<!--.post-excerpt {-->

<!--  margin: 0;-->

<!--  padding: 0;-->

<!--  font-size: 16px;-->

<!--  line-height: 1.5;-->

<!--}-->


<!--.post-bottom{-->
<!--  margin-left: 15px;-->
<!--  bottom: 0;-->
<!--  font-size: 15px;-->
<!--  padding: 15px;-->
<!--  color: white;-->
<!--  transition: all 0.5s ease;-->
<!--}-->
<!--.post-bottom:hover{-->
<!--  color: black;-->
<!--  background-color: white;-->
<!--  transition: all 0.5s ease;-->
<!--}-->


<!--@media (max-width: 767px) {-->

<!--  .post-thumb {-->

<!--    width: 100%;-->

<!--    margin-right: 0;-->

<!--  }-->

<!--}-->

<!--</style>-->
