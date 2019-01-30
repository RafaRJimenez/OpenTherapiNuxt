<template>
  <div
    class="box column is-link is-six-seven"
    @click="$router.push()"
  >
    <section style="padding: 1em;">
      <div class="columns">
        <article class="column">
          <div
            class="content"
            align="center"
          >
            <figure class="photo-style">
              <div align="center">
                <div
                  :style="{ 'background-image': `url(${avatarUrl})`}"
                  align="center"
                  class="profile-image"
                />
              </div>
            </figure>

            <p v-if="result.collegeNumber">
              <span class="icon">
                <i class="fa fa-graduation-cap"/>
              </span>
              {{ result.collegeNumber }}
            </p>
            <p v-if="result.city">
              <span class="icon">
                <i class="fa fa-map"/>
              </span>
              {{ result.city }}
            </p>
          </div>
        </article>

        <article class="column is-two-thirds">
          <div
            class="subtitle is-3 is-size-3-mobile is-spaced contact-info is-black"
          ><a :href="`/${result.id}`">
            {{ result.name }} {{ result.surname }}
          </a>
          </div>
          <p
            v-for="(line, index) in (resume || '').split('\n')"
            :key="index"
            class="description"
          >
            {{ line }}
          </p>
          <br>
          <p class="title is-5">Especialidades</p>
          <div class="tags">
            <span
              v-for="specialty in result.specialties.slice(0,5)"
              :key="specialty.name"
              class="tag is-primary"
            >
              <span class="icon"><i class="fa fa-tag"/></span>
              <span> {{ specialty.name }} </span>
            </span>
          </div>

          <p class="title is-5">Atiendo a</p>
          <div class="tags">
            <span
              v-for="client in result.clients"
              :key="client.name"
              class="tag is-primary"
            >
              <span class="icon"> <i class="fa fa-tag"/> </span>
              <span> {{ client.name }} </span>
            </span>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    result: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      resume: '',
    };
  },

  computed: {
    avatarUrl() {
      return `${process.env.STATICS_URL}/avatars/${this.result.id}`;
    },
  },

  mounted() {
    if (this.result.description) {
      this.resume = this.result.description.substring(0, 150) + '...';
    }
  },
};
</script>
<style scoped>
.page {
  position: fixed;
  left: 0;
  right: 0;
  height: 100%;
  background-color: whitesmoke;
}

.profile-content {
  max-width: 960px;
  padding-top: 0px;
  padding-left: 0;
  padding-right: 0;
  box-shadow: 0 3px 20px 5px dimgray;
  background-color: white;
}

.profile-image {
  width: 70%;
  box-shadow: 0 0 8px 0 dimgray, 0 6px 20px 0 dimgray;
  border-radius: 50%;
  border: 2px double white;
  padding-top: 70%;
  background-size: cover;
}

.contact-header {
  background-size: cover;
  background-position: center;
}

.contact-info {
  color: black;
  font-weight: bold;
}

.description {
  text-align: justify;
}

.photo-style{
  max-width: 20rem;
}


 a {
  color:inherit;
  text-decoration: none;
 }

 a:hover{
  text-decoration: underline;
 }


</style>
