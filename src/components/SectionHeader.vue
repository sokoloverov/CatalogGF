<template>
  <div class="tmHeader">
    <div v-if="ifShow">
      <img class="tmHeader__header_banner" alt="Vue logo" :src="banner" />
    </div>
    <div class="tmHeader__header">
      <img class="tmHeader__header_img" alt="Vue logo" :src="logo" />
      <div class="tmHeader__header_text">{{ headerName }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionHeader",
  props: {
    logo: String,
    headerName: String,
    banner: String,
    ifShow: Boolean,
  },
};
</script>

<style lang="scss">
@import "../css/style.scss";
</style>