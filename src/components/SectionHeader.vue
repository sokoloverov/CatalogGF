<template>
  <div class="tmHeader">
    <div v-if="ifShow">
      <img class="tmHeader__header_banner" alt="Vue logo" :src="banner" />
    </div>
    <div class="tmHeader__header">
      <!-- <img class="tmHeader__header_img" alt="Vue logo" :src="logo" /> -->
      <!-- <div class="tmHeader__header_text">{{ headerName }}</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionHeader",
  props: {
    logo: String,
    banner: String,
    ifShow: Boolean,
  },
};
</script>

<style lang="scss">
/*ЗАГОЛОВОК РАЗДЕЛА*/
.tmHeader {
  display: flex;
  margin-left: 20%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.tmHeader__header {
  display: flex;
  flex-direction: row;
}
.tmHeader__header_banner {
  max-width: 90%;
}
.tmHeader__header_img {
  height: 4rem;
}
.tmHeader__header_text {
  font-size: 2rem;
  padding: 0 2rem;
  text-align: center;
}
.tmHeader__header_small {
  margin-left: 20%;
  font-size: 1rem;
  text-align: center;
}
.tmHeader__text {
  margin-left: 20%;
  font-size: 0.8rem;
  line-height: 1rem;
  padding: 1rem 3rem;
  text-align: justify;
}
</style>