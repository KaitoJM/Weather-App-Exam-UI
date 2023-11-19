<template>
  <div class="main-info" v-if="!busy">
    <img :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`" alt="">
    <div class="info-label">
      <div class="weather">{{ weather.weather[0].main }}</div>
      <div class="city">{{ data.village }} {{ data.city }}</div>
      <div class="country">{{ data.country }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      data: 'Location/data',
      weather: 'Location/weather',
      busy: 'Location/busy',
    }),
  },
}
</script>

<style lang="scss" scoped>
.main-info {
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  width: 100%;

  .weather {
    font-size: 2.5em;
    font-weight: bold;
  }

  .city {
    font-size: 1.5em;
  }

  .country {
    color: #8b8b8b;
    font-size: 0.9em;
  }
}
</style>