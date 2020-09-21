<template>
  <div id="app">
    <NavBar/>
    <Accueil/>
    <Skills/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Accueil from './components/Accueil.vue'
import Skills from './components/Skills.vue'

export default {
  name: "App",
  components: {
    NavBar,
    Accueil,
    Skills
  },
};
</script>

<style>
</style>
