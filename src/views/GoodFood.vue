<template>
  <div>
    <section-header :headerName="header" :logo="logo" />
    <div class="tmHeader__text">
      Самые крупные калибры, самые лучшие сорта орехов и сухофруктов из
      возможных. GOOD FOOD для всех, кто может себе позволить лучшее. Продукты
      под маркой GOOD FOOD уже 26 лет являются эталоном лучшего из доступного на
      отечественном рынке.
    </div>
    <router-window :routerlinks="routs" :logo="logo" />
  </div>
</template>

<script>
import SectionHeader from "../components/SectionHeader.vue";
import RouterWindow from "../components/RouterWindow.vue";
import logo from "../assets/logo/logo.png";

export default {
  name: "GFGreen",
  components: {
    SectionHeader,
    RouterWindow,
  },
  data() {
    return {
      header: "Лучшее из возможного",
      logo,
      routs: [
        { rout: "/goodfood/nuts", name: "GOOD FOOD орехи" },
        { rout: "/goodfood/driedfruits", name: "GOOD FOOD сухофрукты" },
        { rout: "/goodfood/mix", name: "GOOD FOOD смеси" },
        { rout: "/goodfood/dragee", name: "GOOD FOOD драже" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../css/style.scss";
</style>