<template>
  <div>
    Location: 
    <pre>
      {{ data }}
    </pre>
    Weather: 
    <pre>
      {{ weather }}
    </pre>
  </div>
</template>

<script>
import LeftContent from '../components/LeftContent.vue';
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    name: 'IndexPage',
    components: { LeftContent },
    computed: {
    ...mapGetters({
      data: 'Location/data',
      weather: 'Location/weather',
    })
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
