<template>

    <div class="container">

        <h1 class="title unifont">SOME OF <span class="outlinetext">MY WORK</span></h1>

      <div class="projects-container">

        <div class="post center" v-for="(project, index) in projects" :key="index">

          <img :src="project.src" class="post-thumb" alt=""/>

          <div class="post-text">

            <h2 class="post-title unifont">{{project.title}}</h2>

            <div class="post-excerpt">

              {{project.description}}

            </div>
            <a class="post-bottom border text-decoration-none" :href="project.dir" target="_blank">VIEW PROJECT</a>

          </div>



          <br>

        </div>

      </div>

    </div>

</template>


<script setup lang="ts">

import { ref } from 'vue';


const projects = ref<any>([

  {

    src: "../assets/vetcare.jpg",

    title: "VetCare",

    description: "A web-based pet care management system for the Cats N Dogs Veterinary Clinic in Dumaguete City. " +
        "The system features the following, clinic's management system. This features EMR analytics and visualization that compile the previous diagnosis based on current symptoms, notifications for low and expired supplies, SMS Bulk Messaging and Email for upcoming appointments and revaccinations, and a patient portal for pet owners.",

    dir: "https://www.canva.com/design/DAFoaVAEKUI/3seoRasUpnuEBOd-49lZHw/view?utm_content=DAFoaVAEKUI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"

  },

  {

    src: "../assets/bloodbank.png",

    title: "Blood Bank System",

    description: "Management System, Developed using Laravel Framework and PHP. Assigned in designing (UI) frontend of the system.",

    dir: "https://ccs82022.github.io/"

  },

  {

    src: "../assets/dentalsystem.png",

    title: "DENTAL INFORMATION AND APPOINTMENT SYSTEM",

    description: "CRUD management system, Developed using Visual Basic and DB2. Assigned in planning, backend. and focusing more on the frontend of the system.",

    dir: "https://github.com/ryjaymes12/dentalinformationandappointmentsystem"

  },

  {

    src: "../assets/pharmsystem.png",

    title: "Pharmaceutical Drug Distributor System",

    description: "Management system, Developed using Visual Basic and DB2. Assigned with designing the database and the back-end.",

    dir: "https://github.com/ryjaymes12/pdds"

  }

]);

</script>


<style>

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


.projects-container {

  padding: 100px 0;

}


.post {

  margin: 20px auto;

  padding: 20px;

  border-radius: 3px;

  width: 100%;

  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);

  display: flex;

  align-items: center;

}


.post-thumb {

  width: 400px;

  height: 200px;

  margin-right: 20px;

  border-radius: 3px;
  float: left;

}


.post-text {
  float: right;
  flex-grow: 1;
  color: #c5e8ef;
}


.post-title {

  margin: 0;

  padding: 0;

  font-size: 24px;

  margin-bottom: 10px;

}


.post-excerpt {

  margin: 0;

  padding: 0;

  font-size: 16px;

  line-height: 1.5;

}


.post-bottom{
  margin-left: 15px;
  bottom: 0;
  font-size: 15px;
  padding: 15px;
  color: white;
  transition: all 0.5s ease;
}
.post-bottom:hover{
  color: black;
  background-color: white;
  transition: all 0.5s ease;
}


@media (max-width: 767px) {

  .post-thumb {

    width: 100%;

    margin-right: 0;

  }

}

</style>