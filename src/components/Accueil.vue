<template>
  <div
    class="container-fluid accueil d-flex justify-content-center align-items-center"
    id="acceuil"
  >
    <div class="text-light">
      <h1 class="text-center">Denis AUDEVAL</h1>
      <h2 class="text-center">DEVELOPPEUR WEB FULL STACK</h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.accueil {
  padding-top: 80px;
  min-height: 100vh;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("../assets/img/background.jpg");
  background-size: auto, cover;
  background-attachment: fixed;
}
</style>