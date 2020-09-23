<template>
<div>
  <div class="card shadow item" style="width: 18rem;" data-toggle="modal" :data-target="'#' + idModal">
    <img :src="require('../assets/img/' + imgUrlSmall)" class="card-img-top img-fluid" v-if="imgUrlSmall">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
    </div>    
  </div>
  <div>
    <ItemModal :id="idModal" :content="descriptionText" :title="title" :imgUrl="imgUrl" :url="url" />
  </div>
</div>
  
</template>

<script>
import ItemModal from './ItemModal.vue'
export default {
  props: ["title", "description", "descriptionText", "url", "idModal", "imgUrl", "imgUrlSmall"],
  components: {
    ItemModal
  }
};
</script>

<style>
.item {
  cursor: pointer;
  transition: 0.1s;
}
.item:hover {
  transform: scale(1.1);
}
</style>