export default {
  state: () => ({
    latitude: '',
    longitude: '',
    address_options: [],
    data: {},
    weather: {},
    forecast: [],
    fetching: false,
  }),
  getters: {
    latitude: state => {
      return state.latitude
    },
    longitude: state => {
      return state.longitude
    },
    address_options: state => {
      return state.address_options
    },
    data: state => {
        return state.data
    },
    weather: state => {
      return state.weather
    },
    forecast: state => {
      return state.forecast
    },
    fetching: state => {
      return state.fetching
    },
    busy: state => {
      let loading = true;

      if (state.weather?.weather?.length && state.data?.country) {
        loading = false;
      }

      return loading;
    }
  },
  mutations: {
    setDefault(state, params) {
      state.latitude = params.latitude;
      state.longitude = params.longitude;
    },
    editData(state, updated_data) {
      let current_data = state.data

      const indx = current_data.indexOf(current_data.find(item => {
        return item.id == updated_data.id
      }))

      current_data[indx] = updated_data;
      state.data = [];
      state.data = current_data;
    },
    setData(state, entities) {
      state.data = entities
    },
    setAddressOptions(state, entities) {
      state.address_options = entities
    },
    setWeather(state, entities) {
      state.weather = entities
    },
    setForecast(state, entities) {
      state.forecast = entities
    },
    startLoading(state) {
      state.fetching = true
    },
    stopLoading(state) {
      state.fetching = false
    },
    clearPlacesOptions(state) {
      state.address_options = [];
    }
  },
  actions: {
    setDefault(context) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          context.commit('setDefault', position.coords)
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    },
    fetchData(context) {
      context.commit('startLoading')

      let url = '/get-address-by-coordinates'

      return this.$axios
        .post(url, {
          latitude: context.state.latitude,
          longitude: context.state.longitude,
        })
        .then(response => {
          let data = null;

          if (response.data?.results?.length) {
            data = response.data.results[0];
          }

          context.commit('setData', data)
          context.commit('stopLoading')

          return data
        }
      )
    },
    fetchWeather(context) {
      context.commit('startLoading')

      let url = '/get-weather'

      return this.$axios
        .post(url, {
          latitude: context.state.latitude,
          longitude: context.state.longitude,
        })
        .then(response => {
          let data = response.data;

          context.commit('setWeather', data)
          context.commit('stopLoading')

          return data
        }
      )
    },
    fetchForecast(context) {
      context.commit('startLoading')

      let url = '/get-forecast'

      return this.$axios
        .post(url, {
          latitude: context.state.latitude,
          longitude: context.state.longitude,
        })
        .then(response => {
          let data = [];

          if (response.data?.list?.length) {
            data = response.data.list;
          }

          context.commit('setForecast', data)
          context.commit('stopLoading')

          return data
        }
      )
    },
    searchPlaces(context, search) {
      context.commit('startLoading')

      let url = '/search-address'

      return this.$axios
        .post(url, {
          search: search,
        })
        .then(response => {
          let data = [];

          if (response.data?.results?.length) {
            data = response.data.results;
          }

          context.commit('setAddressOptions', data)
          context.commit('stopLoading')

          return data
        }
      )
    }
  },
}