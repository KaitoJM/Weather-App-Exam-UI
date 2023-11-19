export default {
  state: () => ({
    latitude: '',
    longitude: '',
    data: {},
    fetching: false,
  }),
  getters: {
    latitude: state => {
      return state.latitude
    },
    longitude: state => {
      return state.longitude
    },
    data: state => {
        return state.data
    },
    fetching: state => {
      return state.fetching
    },
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
    startLoading(state) {
      state.fetching = true
    },
    stopLoading(state) {
      state.fetching = false
    },
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

      let url = '/get-weather'

      return this.$axios
        .post(url, {
          latitude: context.state.latitude,
          longitude: context.state.longitude,
        })
        .then(response => {
          let data = response.data;

          context.commit('setData', data)
          context.commit('stopLoading')

          return data
        })
    },
  },
}