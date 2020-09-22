<template>
  <div class="row p-4">
    <div class="col">
      <span class="h2">{{ label }}</span>
      <div class="progress mt-2">
        <div
          class="progress-bar progress-bar-striped bg-success progress-bar-animated"
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