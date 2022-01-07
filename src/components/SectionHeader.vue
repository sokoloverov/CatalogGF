<template>
  <div class="tmHeader">
    <img class="tmHeader__header_img" alt="Vue logo" :src="logo" />
    <div class="tmHeader__header">{{ headerName }}</div>
  </div>
</template>

<script>
export default {
  name: "SectionHeader",
  props: {
    logo: String,
    headerName: String,
  },
};
</script>

<style lang="scss">
@import "../css/style.scss";
</style>