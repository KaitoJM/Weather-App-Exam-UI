<template>
	<div class="thumbnail-box box" v-if="!busy">
		<div class="thumb-head">
			<font-awesome-icon :icon="['fa', 'temperature-three-quarters']"/>
			Feels Like
		</div>
		<div class="box-body">
			<div class="value">{{ data.main.feels_like }}&deg;</div>
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