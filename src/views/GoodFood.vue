<template>
  <div>
    <section-header :headerName="header" :logo="logo" />
    <div class="tmHeader__text">
      Самые крупные калибры, самые лучшие сорта орехов и сухофруктов из
      возможных. GOOD FOOD для всех, кто может себе позволить лучшее. Продукты
      под маркой GOOD FOOD уже 26 лет являются эталоном лучшего из доступного на
      отечественном рынке.
    </div>
    <router-window :routerlinks="routs" :logo="logo" :mainLink="mainRout" />
    <router-view />
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
      mainRout: "/goodfood",
      routs: [
        { rout: "/goodfood/nuts", name: "орехи" },
        { rout: "/goodfood/driedfruits", name: "сухофрукты" },
        { rout: "/goodfood/mix", name: "смеси" },
        { rout: "/goodfood/dragee", name: "драже" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../css/style.scss";
</style>