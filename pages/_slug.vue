<template>
  <div>
    <header class="page" />
    <article class="box">
      <div class="container profile-content">
        <section
          :style="{ 'background-image': `linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.7)), url(${headerUrl})` }"
          class="contact-header"
        >
          <div class="columns is-centered">
            <div class="column is-narrow">
              <div class="hero">
                <div class="hero-body">
                  <div
                    align="center"
                    class="subtitle is-2 is-spaced contact-info"
                  >
                    {{ user.name }} {{ user.surname }}
                  </div>
                  <div class="subtitle is-5 is-spaced contact-info">
                    <div align="center">
                      <a
                        class="button is-link is-inverted is-medium is-outlined"
                        @click="$router.push(`/waitingroom/${user.id}`)"
                      >
                        Acceder a la sala de espera
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="columns">
            <article class="column">
              <div class="content">
                <figure>
                  <div align="center">
                    <div
                      :style="{ 'background-image': `url(${avatarUrl})`}"
                      align="center"
                      class="profile-image"
                    />
                  </div>
                </figure>

                <p class="title is-5">Información</p>
                <div
                  v-if="user.collegeNumber"
                  class="info-entry"
                >
                  <span class="icon" >
                    <i class="fa fa-graduation-cap"/>
                  </span>
                  {{ user.collegeNumber }}
                </div>
                <div
                  v-if="user.phone"
                  class="info-entry"
                >
                  <span class="icon">
                    <i class="fa fa-phone"/>
                  </span>
                  {{ user.phone }}
                </div>
                <div
                  v-if="user.address"
                  class="info-entry"
                >
                  <span class="icon">
                    <i class="fa fa-map"/>
                  </span>
                  {{ user.address }}
                </div>
              </div>

              <google-maps
                v-if="user.address"
                :address="user.address"
              />
            </article>

            <article class="column is-two-thirds">
              <p
                v-for="(line, index) in (user.description || '').split('\n')"
                :key="index"
                class="description"
              >
                {{ line }}
              </p>
              <br>
              <p class="title is-5">Especialidades</p>
              <div class="tags">
                <span
                  v-for="specialty in specialties"
                  :key="specialty"
                  class="tag is-primary"
                >
                  <span class="icon"><i class="fa fa-tag"/></span>
                  <span> {{ specialty }} </span>
                </span>
              </div>

              <p class="title is-5">Atiendo a</p>
              <div class="tags">
                <span
                  v-for="client in clients"
                  :key="client"
                  class="tag is-primary"
                >
                  <span class="icon"> <i class="fa fa-tag"/> </span>
                  <span> {{ client }} </span>
                </span>
              </div>
            </article>
          </div>
        </section>
      </div>
    </article>
  </div>
</template>

<script >
import { getUserData } from './profiles/user';
import GoogleMaps from '~/components/google-maps';

export default {
  components: {
    GoogleMaps,
  },

  async asyncData({ app, params, route, redirect }) {
    let specialties;
    let user;
    let clients;

    try {
      user = await getUserData(app.$axios, params.slug);
      specialties = await app.api.getSpecialties(user.id);
      clients = await app.api.getClients(user.id);
    } catch (e) {
      redirect(`${process.env.REDIRECTION}/${route.fullPath}`);
    }

    let avatarUrl = `${process.env.STATICS_URL}/avatars/${user.id}`;
    let headerUrl = `${process.env.STATICS_URL}/headers/${user.id}`;

    try {
      await app.$axios.head(avatarUrl);
    } catch (e) {
      avatarUrl = '/user-admin.png';
    }

    try {
      await app.$axios.head(headerUrl);
    } catch (e) {
      headerUrl = process.env.DEFAULT_HEADER_URL;
    }

    return { avatarUrl, headerUrl, specialties, user, clients };
  },

  data() {
    return {
      online: false,
    };
  },

  head() {
    return {
      title: `${this.user.name} ${this.user.surname} | OpenTherapi`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.user.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          keywords: this.specialties.map(s => s.toLowerCase()).join(),
        },
        {
          property: 'og:title',
          content: `${this.user.name} ${this.user.surname}`,
        },
        {
          property: 'og:description',
          content: this.user.description,
        },
        {
          property: 'og:image',
          content: this.avatarUrl,
        },
        {
          property: 'og:type',
          content: 'profile',
        },
      ],
    };
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
  padding-top: 12px;
  padding-left: 0;
  padding-right: 0;
  box-shadow: 0 3px 20px 5px dimgray;
  background-color: white;
}

.profile-image {
  width: 100%;
  box-shadow: 0 0 8px 0 dimgray, 0 6px 20px 0 dimgray;
  border-radius: 50%;
  border: 2px double white;
  padding-top: 100%;
  background-size: cover;
}

.contact-header {
  background-size: cover;
  background-position: center;
}

.contact-info {
  color: white;
}

.description {
  text-align: justify;
}

.info-entry {
  margin-top: 0.5em;
}

figure{
  max-width: 20rem;
}
</style>
