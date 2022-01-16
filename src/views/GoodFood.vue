<template>
  <div>
    <section-header
      :headerName="header"
      :logo="logo"
      :banner="banner"
      :ifShow="checkRoute"
    />
    <div class="tmHeader__text">
      Самые крупные калибры, самые лучшие сорта орехов и сухофруктов из
      возможных. GOOD FOOD для всех, кто может себе позволить лучшее. Продукты
      под маркой GOOD FOOD уже 25 лет являются эталоном лучшего из доступного на
      отечественном рынке.
    </div>
    <router-window :routerlinks="routs" :logo="logo" :mainLink="mainRout" />
    <router-view />
  </div>
</template>

<script>
import SectionHeader from "../components/SectionHeader.vue";
import RouterWindow from "../components/RouterWindow.vue";

import logo from "../assets/logo/GOOD-FOODlogo.png";
import banner from "../assets/Baners/баннер1.jpg";

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
      banner,
      mainRout: "/goodfood",
      routs: [
        { rout: "/goodfood/nuts", name: "орехи, семечки" },
        { rout: "/goodfood/driedfruits", name: "сухофрукты, ягоды" },
        { rout: "/goodfood/mix", name: "смеси" },
        { rout: "/goodfood/dragee", name: "драже" },
      ],
    };
  },
  computed: {
    checkRoute() {
      if (this.$route.path == this.mainRout) return true;
      else return false;
    },
  },
};
</script>

<style lang="scss">
@import "../css/style.scss";
</style>