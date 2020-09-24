<template>
  <div class="container-fluid skills d-flex align-items-center text-light pb-5" id="skills">
    <div class="container">
      <h1 class="text-center">Mes compétences</h1>
      <div class="row">
        <div class="col-6 text-center">
          <div v-for="skill in skills.languages" :key="skill.id">
            <Progress :label="skill.label" :percent="skill.percent" />
          </div>
        </div>
        <div class="col-6 text-center">
          <div v-for="skill in skills.frameworks" :key="skill.id">
            <Progress :label="skill.label" :percent="skill.percent" />
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import Progress from "./Progress.vue";
import skills from "../assets/skills.json";

export default {
  data() {
    return {
      skills,
    };
  },
  components: {
    Progress
  },
};
</script>

<style>
.skills {
  padding-top: 80px;
}
</style>