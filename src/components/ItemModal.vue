<template>
  <div class="modal fade" :id="id" tabindex="-1" :aria-labelledby="id + 'Label'" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="id + 'Label'">{{ title }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>{{ content }}</p>
          <img :src="require('../assets/img/' + imgUrl)" class="img-fluid" v-if="imgUrl" />
        </div>
        <div class="modal-footer d-flex justify-content-center" v-if="url">
          <a type="button" class="btn btn-secondary" :href="url" target="_blank" >Visiter</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "content", "title", "imgUrl", "url"],
};
</script>