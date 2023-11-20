<template>
	<div class="thumbnail-box box" v-if="!busy">
		<div class="thumb-head">
			<font-awesome-icon :icon="['fa', 'eye']"/>
			Visibility
		</div>
		<div class="box-body">
			<div class="value">
        {{ getVisibility(data.visibility) }} 
        <span class="unit">km.</span>
      </div>
		</div>
    <div class="box-footer">
      The distance one can see ahead in the atmosphere.
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
  methods: {
    getVisibility() {
        return this.data.visibility / 1000;
    }
  }
}
</script>