<template>
  <div class="forecast-item box">
    <div class="date-label">{{ formatDate(item.dt_txt) }}</div>
    <div class="icon-container">
      <img :src="`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`" alt="">
    </div>
    <div class="weather-label">{{ item.weather[0].main }}</div>
    <div class="temp-label">{{ item.main.temp }}&deg;</div>
  </div>
</template>

<script>
import DateFormatter from '~/mixins/DateFormatter.js'
export default {
  props: {
    item: {}
  },
  mixins: [DateFormatter],
}
</script>

<style lang="scss" scoped>
.forecast-item {
  height: 100%;
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-shadow: none;
  padding: 15px;
  box-sizing: border-box;

  .icon-container {
    background-color: #e7f2f7;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 20px;
  }

  .weather-label {
    font-weight: bold;
    text-transform: uppercase;
  }

  .temp-label {
    font-size: 1.2em;
  }
}
</style>