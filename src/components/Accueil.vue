<template>
  <div
    class="container-fluid accueil d-flex justify-content-center align-items-center"
    id="acceuil"
  >
    <div class="text-light">
      <h1 class="text-center">Denis AUDEVAL</h1>
      <h2 class="text-center">Développeur Web FULL STACK</h2>
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
      rgba(22, 20, 46, 0.5),
      rgba(22, 20, 46, 0.5)
    ),
    url("../assets/img/background.jpg");
  background-size: auto, cover;
  background-attachment: fixed;
}
</style>