<template>
  <div class="row p-3">
    <div class="col">
      <span class="h2">{{ label }}</span>
      <div class="progress mt-2">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          :style="'width: '+ percent +'%'"
          :aria-valuenow="percent"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['label', 'percent']
};
</script>

<style>
.progress {
  background-color: #aaaaaa;
}
.progress-bar {
  background-color:   #f2a365;
}
.h2 {
  color: #ececec;
}
</style>