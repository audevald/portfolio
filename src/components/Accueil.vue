<template>
  <div
    class="container-fluid accueil d-flex justify-content-center align-items-center"
    id="acceuil"
  >
    <div class="text-light">
      <h1 class="text-center">Denis AUDEVAL</h1>
      <h2 class="text-center">Développeur Web FULL STACK</h2>
      <div class="d-flex justify-content-around mt-4">
        <a href="https://www.linkedin.com/in/denis-audeval-673429161/"
          ><img src="../assets/img/linkedin.png" class="img-fluid logo"
        /></a>
        <a href="https://github.com/audevald/"
          ><img src="../assets/img/github.png" class="img-fluid logo"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.accueil {
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