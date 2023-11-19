<template>
  <div class="main-content">
    <main-info />
    <div class="other-details">
      <forecast-box />
    </div>
  </div>
</template>

<script>
import LeftContent from '../components/LeftContent.vue';
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import MainInfo from '../components/MainInfo.vue';
import ForecastBox from '../components/ForecastBox.vue';

export default {
  name: 'IndexPage',
  components: { LeftContent, MainInfo, ForecastBox },
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
