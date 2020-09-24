<template>
  <div class="container-fluid gb-light pb-5 about" id="about">
    <div class="container">
      <div class="row">
        <div class="col">
            <h1 class="text-center pb-3">A propos de moi</h1>
          <p>{{ about.p1 }}</p>
          <p>{{ about.p2 }}</p>
          <p>{{ about.p3 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import about from "../assets/about.json";
export default {
  data() {
    return {
      about,
    };
  },
};
</script>

<style>
.about {
  padding-top: 80px;
}
</style>