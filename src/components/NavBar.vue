<template>
  <nav class="navbar navbar-expand-lg navbar-dark shadow-sm fixed-top">
    <a class="navbar-brand" href="/">Denis AUDEVAL</a>
    <button
      class="navbar-toggler text-light"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#acceuil" v-smooth-scroll>
            Accueil
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about" v-smooth-scroll>A propos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skills" v-smooth-scroll>Compétences</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#portfolio" v-smooth-scroll>Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact" v-smooth-scroll>Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="cv.pdf">Curriculum Vitae</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  background-color:  #19181B;
}
.navbar a {
  color: #ececec;
}
</style>