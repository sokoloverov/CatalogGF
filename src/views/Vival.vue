<template>
  <div>
    <section-header :logo="logo" :banner="banner" :ifShow="true" />
    <div class="tmHeader__text">
      Шоколадные конфеты с нутарльными ингредиентами для настоящих ценителей.
    </div>
    <router-window
      :routerlinks="routs"
      :logo="logo"
      :mainLink="mainRout"
      :headerName="header"
    />
    <router-view />
  </div>
</template>

<script>
import SectionHeader from "../components/SectionHeader.vue";
import RouterWindow from "../components/RouterWindow.vue";

import logo from "../assets/logo/Vivallogo.png";
import banner from "../assets/Baners/баннер4.jpg";

export default {
  name: "Vival",
  components: {
    SectionHeader,
    RouterWindow,
  },
  data() {
    return {
      header: "Конфеты и драже с орехами и сухофруктами",
      logo,
      banner,
      mainRout: "/vival",
      routs: [
        { rout: "/vival/fruitsweets", name: "фруктовые конфеты" },
        { rout: "/vival/coconutsweets", name: "кокосовые конфеты" },
        // { rout: "/vival/dragee", name: "конфеты драже" },
        { rout: "/vival/jelly", name: "фруктово-желейные конфеты" },
        { rout: "/vival/dessert", name: "десертные конфеты" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../css/style.scss";
</style>