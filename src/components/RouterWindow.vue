<template>
  <div>
    <div class="router__window">
      <router-link class="goods__box_a" :to="mainLink">
        <img class="router__window_img" alt="Vue logo" :src="logo" />
      </router-link>
      <div
        class="router__window_link"
        v-for="link in routerlinks"
        :key="link.text"
      >
        <router-link class="goods__box_a" :to="link.rout" append>{{
          link.name
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RouterWindow",
  props: {
    logo: String,
    mainLink: String,
    routerlinks: [],
  },
};
</script>

<style lang="scss">
@import "../css/style.scss";
</style>