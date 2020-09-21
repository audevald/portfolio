<template>
  <div class="container-fluid portfolio" id="portfolio">
    <div class="row">
      <div class="col">
        <ItemCard />
      </div>
      <div class="col">
        <ItemCard />
      </div>
      <div class="col">
        <ItemCard />
      </div>
      <div class="col">
        <ItemCard />
      </div>
      <div class="col">
        <ItemCard />
      </div>
    </div>
  </div>
</template>

<script>
import ItemCard from "./ItemCard.vue";
export default {
  components: {
    ItemCard,
  },
};
</script>

<style>
.portfolio {
  padding-top: 80px;
  min-height: 100vh;
}
</style>