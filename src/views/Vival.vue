<template>
  <div>
    <section-header :headerName="header" :logo="logo" />
    <div class="tmHeader__text">
      Удобный и полезный перекус в любых ситуациях. Оптимальное соотношение цены
      и качества для требовательного потребителя.
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
  name: "Vival",
  components: {
    SectionHeader,
    RouterWindow,
  },
  data() {
    return {
      header: "Конфеты и драже с орехами и сухофруктами",
      logo,
      mainRout: "/vival",
      routs: [
        { rout: "/vival/fruitsweets", name: "фруктовые конфеты" },
        { rout: "/vival/coconutsweets", name: "кокосовые конфеты" },
        { rout: "/vival/dragee", name: "конфеты драже" },
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