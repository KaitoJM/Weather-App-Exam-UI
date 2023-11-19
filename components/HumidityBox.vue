<template>
	<div class="thumbnail-box box" v-if="!busy">
		<div class="thumb-head">
			<font-awesome-icon :icon="['fa', 'droplet']"/>
			Humidity
		</div>
		<div class="box-body">
			<div class="value">{{ data.main.humidity }}%</div>
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