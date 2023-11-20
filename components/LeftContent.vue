<template>
  <div class="left-container">
    <img src="~static/profile.png" class="profile" />
    <br />
    <div class="search-container">
      <search-address-auto-complete />
    </div>
    <br />
    <div>
      <recommended-places />
    </div>
    <br />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import SearchAddressAutoComplete from './SearchAddressAutoComplete.vue';
import RecommendedPlaces from './RecommendedPlaces.vue';
export default {
  components: { SearchAddressAutoComplete, RecommendedPlaces },
  mounted() {
    this.defaultPlaces();
  },
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
        this.fetchWeather();
        this.fetchForecast();
      }
    },
    longitude(val) {
      if (val) {
        this.fetchData();
        this.fetchWeather();
        this.fetchForecast();
      }
    }
  },
  methods: {
    ...mapActions({
      fetchData: 'Location/fetchData',
      fetchWeather: 'Location/fetchWeather',
      fetchForecast: 'Location/fetchForecast',
      defaultPlaces: 'Location/defaultPlaces'
    }),
  }
}
</script>

<style lang="scss" scoped>
.profile {
  width: 150px;
  border-radius: 20px;
  display: block;
  margin: auto;
  margin-top: 20px;
  border: 3px solid #0d7db4;
  margin-bottom: 20px;
}

.search-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
}
</style>