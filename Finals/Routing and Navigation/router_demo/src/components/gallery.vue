<template>
  <div class="container mt-5">
    <h1 class="mb-4 text-center">Gallery</h1>
    <p class="mb-4 text-center">Explore our gallery of images related to web development and technology.</p>
    
    <div class="row">
      <div class="col-md-4 mb-4" v-for="image in images" :key="image.id">
        <div class="card">
          <img :src="require(`@/assets/${image.src}`)" :alt="image.alt" class="card-img-top" />
          <div class="card-body">
            <p class="card-text">{{ image.alt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { id: 1, src: 'img1.jpg' },
        { id: 2, src: 'img2.jpg' },
        { id: 3, src: 'img3.jpg' }
      ]
    };
  }
};
</script>


<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;

}
</style>


