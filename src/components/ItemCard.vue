<template>
  <div class="card shadow" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p
        class="card-text"
      >{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'url']
};
</script>