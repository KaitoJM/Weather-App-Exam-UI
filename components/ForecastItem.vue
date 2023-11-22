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

  @media(max-width: 767px) {
    padding: 10px;
  }

  .icon-container {
    background-color: #e7f2f7;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: 0px 4px 0px 1px #dfedf3;
    border: 1px solid #dfedf3;

    img {
      filter: drop-shadow(2px 5px 0px orange)
    }

    @media(max-width: 767px) {
      padding: 8px;

      img {
        width: 60px
      }
    }
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