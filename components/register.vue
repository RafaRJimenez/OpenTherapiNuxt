<template>
  <div>
    <section class="container-fluid figure has-bg-img image is-2by1">
      <article class="titulo level-item has-text-centered is-vcentered is-overlay">
        <div class="container has-text-centered"> <h1 class="title has-text-weight-bold has-text-white is-size-1-desktop is-size-1-tablet is-size-3-mobile has-text-weight-bold has-text-centered">Descubre la psicología del futuro</h1> <hr>
          <h2 class="subtitle subtitle-register has-text-white has-text-centered is-size-3-desktop is-size-5-tablet is-size-5-mobile">Crea tu consulta online de forma fácil y segura</h2>
          <div class="div-button">
            <a class="button button-for-register is-normal is-overlay">REGISTRARSE</a>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped>
.container-fluid{
  background: url('/static/background-register.jpg')center center;
  background-size:cover;
  min-height: 21rem;
}


.titulo{
  float: none !important;
  margin: auto auto;
}


hr {
    display: block;
    height: 0.09rem;
    border: 0;
    width: 25%;
    margin: 0.2em auto;
    padding: 0;
    margin-top: 1rem; 
    background-color: #56B7E8;
}

.button-for-register{
  background-color: #56B7E8;
  padding: 1.5rem;
  color: white;
  border-color: #56B7E8;
}

.subtitle-register{
  padding-top: 30px;
}

.div-button{
  padding-top: 3rem;
}

.message{
  top: 10rem;
}
</style>

