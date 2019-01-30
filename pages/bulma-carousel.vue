<template>
  <div 
    class="carousel carousel-animated carousel-animate-slide" 
    data-size="4"
  >
    <div class="carousel-container">
      <div class="carousel-item is-active has-text-centered">
        <figure class="image"><img src="../static/el-referente.png"></figure>
        <p>“Apostamos por la psicología online porque era una necesidad real que ayuda a personas que quieren acudir a un profesional y tienen dificultades para hacerlo físicamente”</p>
      </div>
      <div class="carousel-item has-text-centered">
        <figure class="image"><img src="../static/reuters.png"></figure>
        <p>“Una creciente carga en la salud mental en todo el mundo solo puede ser abordada con éxito con una mayor expansión de recursos online como las clínicas virtuales”</p>
      </div>
      <div class="carousel-item">
        <figure class="image"><img src="../static/elmundo.jpg"></figure>
        <p>“Una creciente carga en la salud mental en todo el mundo solo puede ser abordada con éxito con una mayor expansión de recursos online como las clínicas virtuales”</p>
      </div>
    </div>
    <div class="carousel-navigation is-centered">
      <div class="carousel-nav-left">
        <i 
          class="fa fa-chevron-left" 
          aria-hidden="true"
        />
      </div>
      <div class="carousel-nav-right">
        <i 
          class="fa fa-chevron-right" 
          aria-hidden="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import bulmaCarousel from 'bulma-carousel';

export default {
  data() {
  },
	mounted() {
	bulmaCarousel.attach();
  //eslint-disable-next-line
  },
}
</script>

<style lang="css">
@import 'bulma-carousel/dist/css/bulma-carousel.min.css'
</style>
<style scoped>
.image {
  max-width: 14rem;
  margin: 2rem auto;
}

</style>