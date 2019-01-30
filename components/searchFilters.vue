<template>
  <section class="field">
    <div class="columns has-text-centered is-centered">
      <div class="column is-5">
        <div class="wrapper">
          <b-field
            class="control centered-field input-style"
          >
            <b-input
              v-model="text"
              placeholder="Inserta el nombre del psicólogo"
              autofocus
              @keyup.native.enter="submit()"
            />
          </b-field>
        </div>
      </div>
      <div class="column is-5">
        <div class="wrapper">
          <b-select
            v-model="specialty"
            placeholder="Especialidades"
            class="bselect-style centered-field"
          >
            <option value="">Todas</option>
            <option
              v-for="specialty in specialties"
              :value="specialty"
              :key="specialty.name"
            >
              {{ specialty.name }}
            </option>
          </b-select>
        </div>
      </div>
    </div>

    <!-- <b-select
      v-model="filters.clients[0]"
      placeholder="Atiendo a"
    >
      <option value="">Todas</option>
      <option
        v-for="client in clients"
        :value="client.name"
        :key="client.name"
      >
        {{ client.name }}
      </option>
    </b-select> -->
    <div class="columns is-centered has-text-centered">
      <div class="column is-one-fifth is-mobile column-buscar">
        <button
          keywords
          class="button is-outlined is-info control button-buscar"
          @click="submit()"
        >
          <span>BUSCAR</span>
          <span class="icon"> <i class="fa fa-search"/>
          </span>
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    specialties: {
      type: Array,
      required: true,
    },
    // clients: {
    //   type: Array,
    //   required: true,
    // },
  },
  data() {
    return {
      text: '',
      specialty: null,
      clients: '',
    };
  },
  methods: {
    submit() {
      this.$emit('filters-update', {
        text: this.text,
        specialties: !this.specialty ? [] : [this.specialty],
      });
    },
  },
};
</script>

<style scoped>
.column-buscar{
  margin-top:1rem;
  border-radius: 10%;
}

.button-buscar{
  
}

.input-style{
    width: 100%;
    max-width: 23rem;
}

.column{

}


.bselect-style{
 max-width: 100%;
}

.centered-field{
  margin: auto;
}

.wrapper{
  display: inline-flex;
  width: 100%;
}

</style>
