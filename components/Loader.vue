<template>
  <div class="loader">
    <v-progress-circular
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    ></v-progress-circular>
    Loading content. Please wait...
  </div>
</template>

<style lang="scss" scoped>
.loader {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}
</style>