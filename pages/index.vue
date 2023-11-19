<template>
  <div class="main-content">
    <main-info />
  </div>
</template>

<script>
import LeftContent from '../components/LeftContent.vue';
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import MainInfo from '../components/MainInfo.vue';

export default {
  name: 'IndexPage',
  components: { LeftContent, MainInfo },
  computed: {
    ...mapGetters({
      busy: 'Location/busy',
    }),
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
