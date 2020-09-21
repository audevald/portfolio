<template>
  <div class="container-fluid skills bg-dark d-flex align-items-center" id="skills">
    <div class="container">
      <div class="row">
        <div class="col-6 text-center">
          <Progress />
          <Progress />
          <Progress />
          <Progress />
        </div>
        <div class="col-6 text-center">
          <Progress />
          <Progress />
          <Progress />
          <Progress />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Progress from "./Progress.vue";
export default {
  components: {
    Progress,
  },
};
</script>

<style>
.skills {
  padding-top: 80px;
  height: 100vh;
}
</style>