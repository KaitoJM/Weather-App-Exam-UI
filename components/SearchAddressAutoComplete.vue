<template>
  <div class="auto-complete">
    <v-text-field
      outlined
      label="Search Places"
      v-model="form.search"
      @keyup="handleSearch"
      prepend-inner-icon="mdi-map-search"
      :loading="loading"
      hide-details="" 
      class="search-place-text"
    >
      <v-icon
        slot="append"
        v-if="address_options && address_options.length"
        @click="clearPlacesOptions"
      >
        mdi-close
      </v-icon>
    </v-text-field>
    <ul class="options-container" v-if="address_options && address_options.length">
      <li
        class="option-item"
        v-for="(item, key) in address_options"
        :key="'place-item-' + key"
      >
        <a href="#" @click.prevent="handleChangeLocation(item)">
          <font-awesome-icon :icon="['fa', 'location-dot']"/>
          {{ item.formatted }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      form: {
        search: ''
      },
      searchTimer: null,
      delay: 2000, // 3 seconds delay
    }
  },
  computed: {
    ...mapGetters({
      address_options: 'Location/address_options',
    }),
    loading() {
      if(this.searchTimer != null) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    ...mapActions({
      searchPlaces: 'Location/searchPlaces',
    }),
    ...mapMutations({
      setDefault: 'Location/setDefault',
      clearPlacesOptions: 'Location/clearPlacesOptions'
    }),
    handleSearch() {
      clearTimeout(this.searchTimer);

      this.searchTimer = setTimeout(() => {
        this.searchTimer = null;
        this.searchPlaces(this.form.search);
      }, this.delay);
    },
    handleChangeLocation(item) {
      const lat = item.lat
      const lon = item.lon

      this.setDefault({
        latitude: lat,
        longitude: lon
      })

      this.clearPlacesOptions();
    }
  }
}
</script>

<style lang="scss" scoped>
.auto-complete {
  position: relative;
  .options-container {
    position: absolute;
    top: 60px;
    left: 0px;
    width: 100%;
    background-color: #fff;
    padding: 0px;
    box-sizing: border-box;
    border-radius: 10px;
    color: #333;
    margin: 0px;
    list-style: none;
    box-shadow: 0px 5px 18px -12px black;

    li {
      border-bottom: 1px solid #0a70a2;
      padding: 10px;

      &:last-child {
        border: none;
      }

      a {
        padding: 10px;
        display: block;
        text-decoration: none;
        color: #333;
        border-radius: 10px;

        &:hover {
          background-color: #f39547;
          color: white;
        }
      }
    }
  }
}
</style>