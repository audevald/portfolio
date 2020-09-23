<template>
  <div class="container-fluid portfolio bg-light" id="portfolio">
    <h1 class="text-center pb-5 text-muted">Mes réalisations</h1>
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
  padding-top: 80px;
  padding-bottom: 80px;
}
</style>