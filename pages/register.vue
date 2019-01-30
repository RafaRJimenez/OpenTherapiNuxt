<template>
  <div>
    <section class="figure has-bg-img image is-5by3">
      <!-- <div class="container texto-prueba has-text-centered has-text-white">Descubre la psicología del futuro</div>	-->
      <div class="hero is-overlay has-text-centered">
        <div class="container has-text-centered">
          <article 
            :message-body-pre-code-background-color="black" 
            class="message is-dark"
          >
            <div class="message-header">
              <p><i class="fa fa-exclamation"/> Política de cookies</p>
              <button 
                class="delete is-small" 
                aria-label="delete"
              />
            </div>
            <div class="message-body">
              Utilizamos cookies propias y de terceros para mejorar la experiencia de navegación, y ofrecer contenidos y publicidad de interés. Al continuar con la navegación entendemos que se acepta nuestra política de cookies.
            </div>
          </article>

          <h1 class="title has-text-white is-size-1-desktop is-size-1-tablet is-size-5-mobile has-text-centered">Descubre<span> la psicología </span> del futuro</h1> <h2 class="subtitle has-text-white has-text-centered is-size-5-tablet is-size-5-mobile">Crea tu consulta online de forma fácil y segura</h2> 
          <a class="button is-normal is-overlay is-primary">REGISTRARSE</a>
        </div>
      </div>
    </section>
    
  </div>
</template>


<style>
.has-bg-img 
{ background: url('/static/background-register.jpg')center center; background-size:cover;
  min-height: 250px;
}

.container{
}

.hero{
	top: 60px;
}

h2 {
	padding-top: 30px;
}

span {
border-bottom: 1px solid #56B7E8;
padding-bottom: 10px;

}




</style>