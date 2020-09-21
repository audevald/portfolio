<template>
  <div id="app">
    <NavBar/>
    <Accueil/>
    <Skills/>
    <Portfolio/>
    <Contact/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Accueil from './components/Accueil.vue'
import Skills from './components/Skills.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'

export default {
  name: "App",
  components: {
    NavBar,
    Accueil,
    Skills,
    Portfolio,
    Contact
  },
};
</script>

<style>
</style>
