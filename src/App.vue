<template>
  <div id="app">
    <NavBar/>
    <Accueil/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Accueil from './components/Accueil.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: "App",
  components: {
    NavBar,
    Accueil,
    About,
    Skills,
    Portfolio,
    Contact,
    Footer
  },
};
</script>

<style>
</style>
