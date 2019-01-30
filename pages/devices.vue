<template>
  <div class="devices">
    <section class="container has-text-centered">
      <div class="columns">
        <div class="column">
          <div class="columns">
            <div class="column big-row has-text-weight-semibold is-size-3">ACCESIBLE EN CUALQUIER MOMENTO Y EN CUALQUIER LUGAR.<hr></div>
          </div>
          <div class="columns columns-middle is-mobile">
            <div class="column is-one-quarter"><i class="fa fa-mobile fa-devices"/></div>
            <div class="column has-text-left is-three-quarters"><p>DESDE TU ORDENADOR, TABLET O SMARTPHONE<br>
              Vea pacientes desde cualquier lugar con las aplicaciones para móviles. Soportamos smartphones y tablets de iOS y Android.</p></div>
          </div>
          <div class="columns columns-middle is-mobile">
            <div class="column is-one-quarter"><i class="fa fa-video-camera fa-devices"/></div>
            <div class="column is-three-quarters has-text-left"><p>CALIDAD DE VIDEO<br>
              Ofrecemos video y audio HD de alta calidad para asegurar que usted y su paciente tengan la mejor experiencia posible.</p></div>
          </div>
        </div>
        <div class="column">
          <figure class="image is-narrow image-mobile">
            <img src="../static/iphone_frontal_.png">
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.columns{
 
}

.column{

}

.big-row{
  padding: 1rem 5rem;
}

.fa-devices{
  font-size: 30px;
  color: #56B7E8;
  text-align: center;
    width: 70px;
    height: 70px;
    line-height: 75px;
    border: 1px solid #56B7E8;;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
}

.image-mobile{
  padding: 1.8rem;
  max-width: 336px;
  max-height: 570px;
  margin: 0 auto;
}

.columns-middle{
  padding: 1.7rem 0;
}

.devices{
  background-color: #f5f5f5;
}

hr {
    display: block;
    height: 0.5rem;
    border: 0;
    width: 3rem;
    border-top: 0.01rem solid #56B7E8;
    margin: 0.2em auto;
    padding: 0; 
}
</style>