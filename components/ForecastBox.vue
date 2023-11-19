<template>
  <div class="forecast-box">
    <vue-horizontal>
      <forecast-item
        v-for="(forecast_item, key) in data"
        :key="'forecast-item-' + key"
        :item="forecast_item"
      />
    </vue-horizontal>
    <!-- <pre>{{ data }}</pre> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ForecastItem from './ForecastItem.vue'
import VueHorizontal from 'vue-horizontal';

export default {
  components: { ForecastItem, VueHorizontal },
  computed: {
    ...mapGetters({
      data: 'Location/forecast',
    }),
  },
}
</script>

<style lang="scss" scoped>
.forecast-box {
  widows: 100%;
  padding: 20px;
  box-sizing: border-box;
}
</style>