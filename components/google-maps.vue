<template lang="html">
  <div>
    <GmapMap
      v-show="location.lat !== 0 && location.long !== 0"
      ref="mapRef"
      :center="location"
      :zoom="15"
      map-type-id="terrain"
      class="map"
    >
      <GmapMarker :position="location" />
    </GmapMap>
  </div>
</template>

<script>
import { gmapApi } from 'vue2-google-maps';

export default {
  props: {
    address: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      location: { lat: 0, lng: 0 },
    };
  },

  computed: {
    google: gmapApi,

    geocoder() {
      return new this.google.maps.Geocoder();
    },
  },

  async mounted() {
    await this.$refs.mapRef.$mapPromise;

    this.geocoder.geocode({ address: this.address }, (results, status) => {
      if (status === 'OK' && results[0]) {
        this.location = results[0].geometry.location;
      }
    });
  },
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 250px;
}
</style>
