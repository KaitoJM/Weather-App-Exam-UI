<template>
  <div>
    <br />
    <h4>Here are some popular cities you can look into.</h4>
    <div class="places-group">
      <button
        class="place"
        v-for="city in default_cities" 
        :key="'city-' + city.city"
        @click="setDefault(city)"
      >
        {{ city.city }}
        <span>({{ city.description }})</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      default_cities: [
        {
          city: 'Tokyo',
          latitude: 35.652832,
          longitude: 139.839478,
          description: 'Kōtō'
        },
        {
          city: 'Yokohama',
          latitude: 35.4443947,
          longitude: 139.6367727,
          description: 'Kannai Sakura-dori Avenue'
        },
        {
          city: 'Kyoto',
          latitude: 35.021041,
          longitude: 135.7556075,
          description: 'Chudoji-Yabunouchicho'
        },
        {
          city: 'Osaka',
          latitude: 34.6937569,
          longitude: 135.5014539,
          description: 'Nakanoshima 1-chome'
        },
        {
          city: 'Sapporo',
          latitude: 43.066666,
          longitude: 141.350006,
          description: 'Sapporo-shi'
        },
        {
          city: 'Nagoya',
          latitude: 35.1851045,
          longitude: 136.8998438,
          description: 'Naka Ward'
        }
      ]
    }
  },
  methods: {
    ...mapMutations({
      setDefault: 'Location/setDefault',
    }),
  }
}
</script>

<style lang="scss" scoped>
.places-group {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  .place {
    width: calc(50% - 10px);
    height: 70px;
    background-color: #43b4ec;
    border-radius: 10px;
    outline: none;
    text-transform: uppercase;
    font-weight: bold;
    box-shadow: 0 3px 0px 1px #0286c7;
    border: 2px solid #0286c7;
    text-shadow: 1px 1px #0073abbf;

    span {
      display: block;
      font-size: 0.6em;
      font-weight: normal;
      text-shadow: none;
    }
  }
}
</style>