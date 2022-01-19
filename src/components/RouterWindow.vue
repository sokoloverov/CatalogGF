<template>
  <div>
    <div class="router__window">
      <div @click="cleanMenuItem">
        <!-- <router-link class="goods__box_a" :to="mainLink"> -->
        <img class="router__window_img" alt="Vue logo" :src="logo" />
        <!-- </router-link> -->
      </div>
      <div
        class="router__window_link"
        v-for="link in routerlinks"
        :key="link.text"
        @click="currentRouteName(link.name)"
      >
        <router-link
          :class="link.name === currentLink ? order1 : order"
          :to="link.rout"
          append
          >{{ link.name }}</router-link
        >
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
  data() {
    return {
      currentLink: this.routerlinks[0].name,
      order: "goods__box_a",
      order1: "goods__box_a1",
    };
  },
  methods: {
    currentRouteName(link) {
      this.currentLink = link;
      //console.log(this.currentLink);
    },
    cleanMenuItem() {
      this.currentLink = "";
      //console.log("hrr", this.currentLink);
    },
  },
};
</script>

<style lang="scss">
@import "../css/style.scss";
</style>