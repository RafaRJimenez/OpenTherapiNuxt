<template>
  <div class="color-opinion">
    <section class="container-fluid container-opinion">
      <div class="columns is-centered is-variable is-8 columns-opinion has-text-centered">
        <div class="column has-text-white column-opinion is-5">
          <p class="is-size-4 is-size-5-mobile">¿Quieres ayudarnos a mejorar?</p>
          <p><a class="button is-outlined is-info button-opinion">DANOS TU OPINIÓN</a></p>
        </div>
        <div class="column has-text-white column-opinion is-5">
          <p class="is-size-4 is-size-5-mobile">Contactar con nosotros</p>
          <p><a class="button is-outlined is-info button-opinion">CONTACTO</a></p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.column{
  margin: 2rem;
  border-radius: 2%;
}

.container-opinion{
  border: 1px solid #ccc;
  background: url('/static/urban.jpg')center center;
  background-size:cover;
  justify-content: center;
}


.columns-opinion{
	background-color: rgba(24, 24, 24, 0.3);
	padding: 4rem 3rem;
}

.column-opinion{
	padding:2rem 2rem;
	background: rgba(24, 24, 24, 0.8);
}

.color-opinion{
	background-color: rgba(24, 24, 24, 0.9);
}

.column-opinion p {
	padding: 0.5rem;
}

.columns:last-child {
 margin-bottom: 0;
  
}

.button-opinion{
  padding: 1.5rem;
}
</style>

