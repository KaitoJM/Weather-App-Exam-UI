<template>
  <div>
    Left Side <br />
    Latitude: {{ latitude }} <br />
    Longitude: {{ longitude }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      latitude: 'Location/latitude',
      longitude: 'Location/longitude',
    })
  },
  watch: {
    latitude(val) {
      if (val) {
        this.fetchData();
      }
    },
    longitude(val) {
      if (val) {
        this.fetchData();
        this.fetchWeather();
      }
    }
  },
  methods: {
    ...mapActions({
      fetchData: 'Location/fetchData',
      fetchWeather: 'Location/fetchWeather'
    }),
  }
}
</script>