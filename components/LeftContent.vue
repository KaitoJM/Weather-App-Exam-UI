<template>
  <div class="left-container" :class="{open: open}" @click="open = !open">
    <div class="scroller">
      <button class="search-trigger">
        <v-icon v-if="!open">mdi-map-search</v-icon>
        <v-icon v-else>mdi-close</v-icon>
      </button>
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import SearchAddressAutoComplete from './SearchAddressAutoComplete.vue';
import RecommendedPlaces from './RecommendedPlaces.vue';
export default {
  data() {
    return {
      open: false
    }
  },
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
  margin-top: 20px;
  border: 3px solid #0d7db4;
  margin-bottom: 20px;
}

.search-container {
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
}

.search-trigger {
  position: absolute;
  top: 20px;
  left: 420px;
  display: none;
  height: 50px !important;
  width: 50px;
  border-radius: 0 5px 5px 0;
  background-color: #049be5 !important;
  
  i {
    color: #fff !important;
  }

  @media(max-width: 950px) {
    display: block;
    left: 400px;
  }
}
</style>