<template>
  <section id="contact">
    <section class="social-footer text-center scroll" id="contacts">
      <div class="container">
        <h2>Social links</h2>
        <ul class="social-list">
          <li><a href="https://github.com/Phlavi0" target="_blank"><i class="fa fa-github fa-xl" title="GitHub" aria-hidden="true"></i>
          </a></li>
          <li><a href="https://www.instagram.com/phil.austine/" target="_blank"><i class="fa fa-instagram fa-xl" title="Code Pen" aria-hidden="true"></i>
          </a></li>
          <li> <a href="https://www.linkedin.com/in/philip-augustine-cadungog-823777262" target="_blank"><i class="fa fa-linkedin fa-xl" title="LinkedIn" aria-hidden="true"></i>
          </a></li>
          <li> <a href="https://www.facebook.com/Phil.Austin28"><i class="fa fa-facebook fa-xl" title="Facebook" aria-hidden="true"></i>
          </a></li>
        </ul>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
h2 {
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 0.7rem;
  font-family: "Arial Black",serif;
}
/*social list main*/
.social-footer h2 {
  margin: 1% 0 3%;
}
.social-footer .social-list {
  display: inline-block;
  padding: 0;
  margin-bottom: 5%;
}
.social-footer .social-list li a{
  display: block;
  position: relative;
  border: 2px solid white;
  transform: rotate(45deg);
  width: 70px;
  height: 70px;
}
.social-footer .social-list li {
  display: inline-block;
  list-style: none;
  margin-left: 15px;
}
.social-footer .social-list li a i {
  transform: rotate(315deg);
  margin-top: 30px;
  color: white;
}
.social-footer .social-list li:hover i {
  color: #ffb424;
}
.social-footer .social-list .fa-facebook {
  padding: 2px 0 0 0;
}
</style>