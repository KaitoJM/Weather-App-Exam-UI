<template>
	<div class="thumbnail-box box" v-if="!busy">
		<div class="thumb-head">
			<font-awesome-icon :icon="['fa', 'droplet']"/>
			Humidity
		</div>
		<div class="box-body">
			<div class="value">{{ data.main.humidity }}<span class="unit">%</span></div>
		</div>
    <div class="box-footer">
      Measure of the amount of moisture or water vapor present in the air
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