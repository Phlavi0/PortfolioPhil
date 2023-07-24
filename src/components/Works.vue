<template>
  <h1 class="title fixed-top inter">SOME OF <span  class="outlinetext">MY WORK</span></h1>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
              aria-label="Slide 4"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="post">
          <img src="../assets/vetclinic.png" class="post-thumb center" alt=""/>
          <div class="post-text">
            <h2 class="post-title inter">VETCARE</h2>
            <div class="post-excerpt">
              A WEB-BASED PET CARE MANAGEMENT SYSTEM FOR THE CATS N DOGS VETERINARY
              CLINIC IN DUMAGUETE CITY<br>
              - Developed using Laravel Framework and MySQL <br>
              - Hosted using Hostinger Hosting Services <br>
              - Assigned in backend, frontend, and documentation.
              <a class="float-end text-white" href="https://www.canva.com/design/DAFoaVAEKUI/3seoRasUpnuEBOd-49lZHw/view?utm_content=DAFoaVAEKUI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank"><u>View Project</u></a>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
          <div class="post">
            <img src="../assets/bloodbank.png" class="post-thumb center" alt=""/>
          <div class="post-text">
            <h3 class="post-title inter">BLOOD BANK SYSTEM</h3>
            <div class="post-excerpt">- Developed using Laravel Framework and PHP. <br>
              - Assigned in designing (UI) frontend of the system.
              <a class="float-end text-white" href="https://ccs82022.github.io/" target="_blank"><u>View Project</u></a>
            </div>
          </div>

        </div>
      </div>
      <div class="carousel-item">
        <div class="post">
          <img src="../assets/dentalsystem.png" class="post-thumb center" alt=""/>
          <div class="post-text">
            <h2 class="post-title inter">DENTAL INFORMATION AND APPOINTMENT SYSTEM</h2>
            <div class="post-excerpt">- Developed using Visual Basic and DB2 <br>
              - Assigned in planning, backend. and focusing more on the frontend of the system.
              <a class="float-end text-white" href="https://github.com/ryjaymes12/dentalinformationandappointmentsystem" target="_blank"><u>View Project</u></a>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="post">
          <img src="../assets/pharmsystem.png" class="post-thumb center" alt=""/>
          <div class="post-text">
            <h2 class="post-title inter">Pharmaceutical Drug Distributor System</h2>
            <div class="post-excerpt">- Developed using Visual Basic and DB2 <br>
              - Assigned with designing the database and the back-end.
              <a class="float-end text-white" href="https://github.com/ryjaymes12/pdds" target="_blank"><u>View Project</u></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script setup lang="ts">

</script>

<style scoped>
@media screen and (min-width: 1024px) {
  #carouselExampleCaptions {
    margin: 10%;
    height: 500px;
    width: 1000px;
  }
  .post-title{
    font-size: 25px;
  }
  .post-excerpt{
    font-size: 17px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {

}
@media screen and (max-width: 767px) {
  #carouselExampleCaptions {
    height: 350px;
    width: 300px;
  }
  .carousel{
    margin-top: 50px;
    max-width: 300px;
  }
  .post-thumb{
    max-width: 240px;
  }
  .post-title{
    font-size: 12px;
  }
  .post-excerpt{
    font-size: 8px;
  }
  .post-text{
    margin-left: 20px;
  }

}
.post-text{
  background-color: darkslategrey;
  border-radius: 10px;
  padding: 10px;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
}

.title{
  float: left;
  margin-left: 5%;
  margin-top: 2%;
  position: absolute;
  text-align:left;
  vertical-align:text-top;
}

.outlinetext{
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  -webkit-text-fill-color: transparent;
}

.post {
  margin-right: 15%;
  margin-left: 15%;
  margin-bottom: 5%;
}
.inter{
  font-family: "Inter Black",serif;
}

.carousel-indicators{
  margin-top: 10px;
}
</style>
