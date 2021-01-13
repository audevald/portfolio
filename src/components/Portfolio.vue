<template>
  <div class="container-fluid portfolio" id="portfolio">
    <h1 class="text-center pb-5">Mes réalisations</h1>
    <div class="row d-flex align-items-center">
      <div class="col mb-5 d-flex justify-content-center" v-for="work in portfolio" :key="work.id">
        <ItemCard
          :title="work.title"
          :description="work.description"
          :url="work.url"
          :idModal="'work' + work.id"
          :imgUrl="work.imgUrl"
          :imgUrlSmall="work.imgUrlSmall"
          :descriptionText="work.descriptionText"
          :labelButton="work.labelButton"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ItemCard from "./ItemCard.vue";
import portfolio from "../assets/portfolio.json";

export default {
  data() {
    return {
      portfolio,
    };
  },
  components: {
    ItemCard,
  },
};
</script>

<style>
.portfolio {
  padding-bottom: 80px;
}
</style>