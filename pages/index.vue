<template>
  <div class="main-content">
    <template v-if="!busy">
      <main-info />
      <div class="other-details">
        <forecast-box />
        <div class="thumbs">
          <FeelsLikeBox />
          <humidity-box />
          <visibility-box />
          <wind-box />
        </div>
      </div>
    </template>
    <loader v-else />
  </div>
</template>

<script>
import LeftContent from '../components/LeftContent.vue';
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import MainInfo from '../components/MainInfo.vue';
import ForecastBox from '../components/ForecastBox.vue';
import FeelsLikeBox from '../components/FeelsLikeBox.vue';
import HumidityBox from '../components/HumidityBox.vue';
import VisibilityBox from '../components/VisibilityBox.vue';
import WindBox from '../components/WindBox.vue';
import Loader from '../components/Loader.vue';

export default {
  name: 'IndexPage',
  components: { LeftContent, MainInfo, ForecastBox, FeelsLikeBox, HumidityBox, VisibilityBox, WindBox, Loader },
  computed: {
    ...mapGetters({
      busy: 'Location/busy',
    }),
  },
    methods: {
      ...mapActions({
        setDefault: 'Location/setDefault',
      }),
    },
    mounted() {
      this.setDefault();
    }
}
</script>
