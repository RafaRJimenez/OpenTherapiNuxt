<template>
  <section class="detail">
    <div class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-9 is-narrow">
              <div align="center">
                <div v-show="patientName && !errorMessage && !isOnline">
                  <div class="notification background-transparent-dark">
                    <p class="title text-white">
                      Hola {{ patientName }}, bienvenido a la sala de espera
                    </p>
                    <br>
                    <p
                      v-if="user.gender === 'male'"
                      class="subtitle text-white"
                    >
                      Actualmente {{ user.name }} {{ user.surname }} no se encuentra conectado
                    </p>
                    <p
                      v-else
                      class="subtitle text-white"
                    >
                      Actualmente {{ user.name }} {{ user.surname }} no se encuentra conectada
                    </p>
                  </div>
                </div>

                <div v-show="!errorMessage && isOnline">
                  <div class="notification background-transparent-dark">

                    <p class="title text-white">
                      {{ user.name }} {{ user.surname }} ya sabe que te has conectado.
                    </p>
                    <br>
                    <p
                      v-if="user.gender === 'male'"
                      class="subtitle text-white"
                    >
                      En breve te dará paso a la conferencia para atenderte. Ten lista por favor tu cámara y micrófono.
                    </p>
                    <p
                      v-else
                      class="subtitle text-white"
                    >
                      En breve te dará paso a la conferencia para atenderte. Ten lista por favor tu cámara y micrófono.
                    </p>
                  </div>
                </div>

                <div v-show="errorMessage">
                  <div class="notification is-danger">
                    <p class="title">
                      Error conectando a la sala de espera
                    </p>
                    <br>
                    <p class="subtitle white-text">
                      {{ errorMessage }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: '',
    },
    patientName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.text-white {
  color: white !important;
}

.button.spinner {
  font-size: 75pt;
}
</style>
