<template>
  <div class="container-fluid bg-dark text-muted pb-5 contact" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-4 d-flex align-items-center">
          <img src="../assets/img/linkedin.png" class="img-fluid logo" />
          <img src="../assets/img/github.png" class="img-fluid logo" />
        </div>
        <div class="col-4 d-flex align-items-center">
          <ul class="liste">
            <li class="pb-2"><strong>Denis AUDEVAL</strong></li>
            <li>12 résidence la prairie</li>
            <li class="pb-2">31530 MONTAIGUT SUR SAVE</li>
            <li>audeval.denis@gmail.com</li>
          </ul>
        </div>
        <div class="col-4">
          <div class="map-responsive shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.9920169627735!2d1.2404530154118991!3d43.68992935807302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aeac8d10e0615d%3A0xc1196cb7e0e73d01!2s12%20R%C3%A9sidence%20la%20Prairie%2C%2031530%20Montaigut-sur-Save!5e0!3m2!1sfr!2sfr!4v1600881867876!5m2!1sfr!2sfr"
              width="400"
              height="300"
              frameborder="0"
              style="border: 0"
              allowfullscreen
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contact {
  padding-top: 80px;
}
.map-responsive {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}
.map-responsive iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
.logo {
  width: 50px;
}
.liste {
  list-style: none;
}
</style>