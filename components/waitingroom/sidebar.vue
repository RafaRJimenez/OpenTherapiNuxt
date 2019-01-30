<template>
  <aside class="background-transparent-dark sidebar">
    <div align="center">
      <a @click="$router.push(`/${user.id}`)">
        <div class="image">
          <img
            :src="avatarUrl"
            class="avatar"
          >
        </div>
      </a>

      <br>

      <a @click="$router.push(`/${user.id}`)">
        <p class="title is-4 text-white">
          {{ user.name }} {{ user.surname }}
        </p>
      </a>
      <br>
      <span
        :class="[ isOnline ? 'is-success' : 'is-danger' ]"
        class="tag is-large is-rounded fullwidth"
      >
        {{ isOnline ? 'Conectado' : 'Desconectado' }}
      </span>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    isOnline: {
      type: Boolean,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
    avatarUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.avatar {
  border-radius: 50%;
  max-width: 256px;
  max-height: 256px;
  min-width: 56px;
  min-height: 56px;
}

.fullwidth {
  width: 100%;
}

.text-white {
  color: white;
}

.sidebar {
  height: 100%;
  padding: 2em;
}

.background-dark {
  background-color: rgb(55, 71, 79);
}
</style>
