<template >
  <div>
    <name-form-modal
      :active="!patientName"
      :user="user"
      :avatar-url="avatar"
      @name-submited="updateName"
    />

    <div class="image-background">
      <div class="container-fluid">
        <div class="columns is-gapless" >

          <div class="column is-4">
            <waitingroom-sidebar
              :user="user"
              :is-online="isOnline"
              :avatar-url="avatar"
            />
          </div>

          <div class="column is-9">
            <waitingroom-detail
              :user="user"
              :patient-name="patientName"
              :is-online="isOnline"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Socket from 'socket.io-client';

import { getUserData } from '../profiles/user';
import NameFormModal from '~/components/waitingroom/name-modal';
import WaitingroomSidebar from '~/components/waitingroom/sidebar';
import WaitingroomDetail from '~/components/waitingroom/detail';

export default {
  layout: 'fullscreen',

  components: {
    NameFormModal,
    WaitingroomSidebar,
    WaitingroomDetail,
  },

  async asyncData({ app, params, error }) {
    let user;

    try {
      user = await getUserData(app.$axios, params.userId);
    } catch (e) {
      error(e.message);
    }

    return { user };
  },

  data() {
    return {
      isOnline: false,
      error: '',
      patientName: '',
      avatar: '',
    };
  },

  created() {
    this.socket = Socket(`${process.env.STATUS_URL}/waitingroom`);

    this.socket.on('exception', error => (this.error = error.message));

    this.socket.on('room-updated', ({ users }) => {
      if (!users) {
        this.isOnline = false;
        return;
      }

      if (users.filter(user => user.isOwner).length === 0) {
        this.isOnline = false;
        return;
      }

      this.isOnline = true;
    });

    this.socket.on('session-started', ({ token }) => {
      if (!token) {
        this.error = 'Invalid token received';
        return;
      }

      window.location = token;
    });
  },

  async mounted() {
    const url = `${process.env.STATICS_URL}/avatars/${this.user.id}`;

    try {
      await this.$axios.head(url);
      this.avatar = url;
    } catch (e) {
      this.avatar = '/user-admin.png';
    }
  },

  beforeDestroy() {
    this.socket.disconnect();
  },

  methods: {
    updateName(patientName) {
      if (patientName) {
        this.patientName = patientName;
        this.socket.emit('join-room', {
          roomId: this.user.id,
          name: patientName,
        });
      }
    },
  },

  head() {
    return {
      title: `${this.user.name} ${this.user.surname} | OpenTherapi`,
    };
  },
};
</script>

<style>
.image-background {
  background-image: url('/waitingroom.jpg');
}

.background-transparent-dark {
  background-color: rgba(55, 71, 79, 0.8);
}
</style>
