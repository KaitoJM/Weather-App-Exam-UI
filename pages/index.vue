<template>
  <div>
    Test
    <pre>
      {{ data }}
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
    })
  },
    methods: {
      ...mapActions({
        setDefault: 'Location/setDefault',
        fetchData: 'Location/fetchData'
      }),
    },
    mounted() {
      this.setDefault();
    }
}
</script>
