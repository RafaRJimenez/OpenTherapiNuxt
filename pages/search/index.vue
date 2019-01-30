<template>
  <section>
    <div 
      :class="{classLessPadding: trigger==true}"
      class="hero is-primary"
    >
      <div class="overlay"/>
      <div class="section">
        <div 
          :class="{classLessPadding: trigger==true}"
          class="container container-principal"
        >
          <h1
            class="is-size-1-desktop h1-class is-size-3-tablet is-size-3-mobile"
            align="center"
          >
            Búsqueda de psicólogos
          </h1>
          <div class="columns is-centered">
            <div class="column has-text-centered is-12">
              <search-filters
                :specialties="specialties"
                @filters-update="search"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div 
      v-if="seen" 
      class="section section-psicologos"
    >
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-three-quarters">
            <search-results :results="results" />
          </div>
        </div>
      </div>
    </div>

    <b-loading
      :active.sync="isLoading"
      is-full-page
    />
  </section>
</template>

<script>
import SearchFilters from '~/components/searchFilters';
import SearchResults from '~/components/searchResults';

const SPECIALTIES_URL = `${process.env.API_URL}/specialties`;
const USERS_URL = `${process.env.API_URL}/users`;

export default {
  components: { SearchFilters, SearchResults },

  data() {
    return {
      isLoading: false,
      specialties: [],
      results: [],
      seen:false,
      windowWidth:0,
      trigger:false,
    };
  },

  async mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);
      //Init
      this.getWindowWidth()
    }),
    this.specialties = await this.$axios.$get(SPECIALTIES_URL);
  },

  methods: {
    getWindowWidth() {
        this.windowWidth = document.documentElement.clientWidth;
        if (document.documentElement.clientWidth < 1000){
          this.trigger=true;
        }
      },
    async search({ text, specialties }) {
      const filter = {
        include: ['specialties', 'clients'],
        where: {
          or: [
            { name: { regexp: `/${text}/i` } },
            { surname: { regexp: `/${text}/i` } },
          ],
        },
      };

      try {
        this.isLoading = true;
        const results = await this.$axios.$get(USERS_URL, {
          params: { filter },
        });

        if (!specialties || specialties.length === 0) {
          this.results = results;
          return;
        }

        this.results = results.filter(({ specialties: userSpecialties }) =>
          specialties
            .map(getId)
            .every(id => userSpecialties.map(getId).includes(id)),
        );
      } finally {
        this.isLoading = false;
        this.trigger = true;
        this.seen = true;
      }
    },
  },
};

const getId = ({ id }) => id;
</script>

<style scoped>
body {
  font-family: Raleway;
}

.container-principal{
  padding-top: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;

}

.section-psicologos{
  background-color: whitesmoke;
}

.h1-class{
  padding: 1rem;
}

.hero{
 background: url('/static/header.jpg')center center;
 background-size:cover;
 padding: 5rem 0;
 position: relative;
}

.overlay{
 background-color: #000000;
 position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)";
    filter: alpha(opacity=70);
    opacity: 0.5;
}

.classLessPadding{
  padding-top: 0;
  padding-bottom: 0;
}

</style>