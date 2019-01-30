<template>
  <div
    :class="{ 'is-active' : active }"
    class="modal"
  >

    <div class="modal-background" />
    <div class="modal-content">
      <div class="box">
        <div align="center">
          <img
            :src="avatarUrl"
            class="is-avatar"
          >
        </div>

        <br>

        <form @submit.prevent>
          <div class="field">
            <label class="label">
              A continuación, introduce un nombre para que {{ user.name }} {{ user.surname }} sepa que le
              estás esperando.
            </label>

            <div class="control">
              <input
                v-model="name"
                class="input"
                type="text"
                autofocus
              >
            </div>
          </div>

          <div class="field">
            <p class="control">
              <button
                class="button is-primary is-fullwidth"
                @click="submit"
              >
                Entrar en la sala de espera
              </button>
            </p>
          </div>

          <div
            v-show="!isOnline"
            class="notification is-info"
          >
            Aunque {{ user.name }} {{ user.surname }} no se encuentre conectado, puedes pasar
            y esperar mientras llega.
          </div>
        </form>
      </div>
    </div>

    <button
      class="modal-close is-large"
      @click="$router.back(-1)"
    />
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    avatarUrl: {
      type: String,
      required: true,
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      name: '',
    };
  },

  methods: {
    submit() {
      this.$emit('name-submited', this.name);
    },
  },
};
</script>

<style scoped>
.is-avatar {
  border-radius: 50%;
  min-height: 256px;
  min-width: 256px;
  max-height: 256px;
  max-width: 256px;
}
</style>
