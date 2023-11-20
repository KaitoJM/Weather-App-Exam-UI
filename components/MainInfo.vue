<template>
  <div v-if="!busy">
    <div class="main-info">
      <img :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`" alt="">
      <div class="info-label">
        <div class="weather-info">
          <div class="weather">{{ weather.weather[0].main }}</div>
          <span>
            {{ weather.weather[0].description }}
          </span>
        </div>
        <div class="city">{{ data.village }} {{ data.city }}</div>
        <div class="country">{{ data.state }} {{ data.country }}</div>
      </div>
      <div class="temperature">
        <font-awesome-icon :icon="['fa', 'temperature-three-quarters']"/>
        {{ Math.round(weather.main.temp) }}&deg;
      </div>
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

  .weather-info {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      text-transform: capitalize;
      font-size: 0.9em;
      color: #8b8b8b;
      margin-top: 14px;
    }
  }
  .weather {
    font-size: 2.5em;
    font-weight: bold;
  }

  .temperature {
    font-size: 3em;
    font-weight: bolder;
    margin-left: 20px;
    color: #48484a;
    display: flex;
    gap: 10px;
    align-items: flex-start;

    svg {
      font-size: 1.3rem;
      margin-top: 10px;
    }
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