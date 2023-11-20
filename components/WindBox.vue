<template>
	<div class="thumbnail-box box" v-if="!busy">
		<div class="thumb-head">
			<font-awesome-icon :icon="['fa', 'wind']"/>
			Wind
		</div>
		<div class="box-body">
			<div class="value">
        {{ data.wind.gust ? data.wind.gust : 0 }} 
        <span class="unit">m/sec.</span>
      </div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      data: 'Location/weather',
      busy: 'Location/busy',
    }),
  },
}
</script>