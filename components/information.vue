<template>
  <div class="column-principal-information">
    <div class="columns">
      <div class="column is-full has-text-weight-bold has-text-centered is-size-3-desktop is-size-3-tablet is-size-3-mobile ">¿POR QUÉ OPENTHERAPI?<hr></div>
    </div>
    <div class="columns columns-information">
      <div class="column is-4 has-text-centered">
        <i class="fa fa-cloud is-full"/> 
        <p class="is-full information has-text-weight-semibold">SIN DESCARGAS</p>
        <p class="is-full">OpenTherapi funciona de forma automática en navegadores populares, sin necesidad de descargar software o plugins adicionales.</p>
      </div>
      <div class="column is-4 has-text-centered">
        <i class="fa fa-money is-full"/>
        <p class="is-full information has-text-weight-semibold">ASEQUIBLE</p>
        <p class="is-full">El precio no volverá a ser un problema. OpenTherapi te ofrece tu propia consulta con un bajo coste.</p>
      </div>
      <div class="column is-4 has-text-centered">
        <i class="fa fa-key is-full"/>
        <p class="is-full information has-text-weight-semibold">ENCRIPTACIÓN</p>
        <p class="is-full">Usamos conexiones cifradas punto a punto con la última tecnología en seguridad y encriptación. Por lo que la privacidad se mantiene en todo momento.</p>
      </div>
    </div>
    <div class="columns columns-information">
      <div class="column is-4 has-text-centered">
        <i class="fa fa-credit-card"/>
        <p class="is-full information has-text-weight-semibold">PASARELA DE PAGOS</p>
        <p class="is-full">Gestiona el cobro de tus sesiones de manera rápida y segura. Ya sea tarjeta de crédito, PayPal u otra forma de pago, nosotros nos ocupamos de todo.</p>
      </div>
      <div class="column is-4 has-text-centered">
        <i class="fa fa-search"/> 
        <p class="is-full information has-text-weight-semibold">BÚSQUEDA</p>
        <p class="is-full">Hacemos que sea fácil encontrar a los profesionales de la salud mental y que cada paciente pueda aportar sus valoraciones.</p>
      </div>
      <div class="column is-4 has-text-centered">
        <i class="fa fa-calendar"/> 
        <p class="is-full information has-text-weight-semibold">AUTOMATIZACIÓN DE CITAS</p>
        <p class="is-full">Tanto profesional como paciente pueden programar la sesión con un solo clic. ¡Olvídate de la agenda!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
span {
	border-bottom: 1px solid #56B7E8;
	padding-bottom: 10px;
}

.fa{
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

.columns-information {
	padding-top: 20px;
  padding-right: 4rem;
  padding-left: 4rem;
}

.column-principal-information{
  padding-top: 2rem;
  padding-bottom: 4rem;
}

.information{
  padding: 1rem 0;
}

hr {
    display: block;
    height: 0.09rem;
    border: 0;
    width: 4rem;
    margin: 0.2em auto;
    padding: 0;
    margin-top: 1rem; 
    background-color: #56B7E8;
}
</style>