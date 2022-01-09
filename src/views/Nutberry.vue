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
  name: "Nutberry",
  components: {
    SectionHeader,
    RouterWindow,
  },
  data() {
    return {
      header: "Оптимальное соотношение цены и качества",
      logo,
      mainRout: "/nutberry",
      routs: [
        { rout: "/nutberry/nuts", name: "орехи" },
        { rout: "/nutberry/driedfruits", name: "сухофрукты" },
        { rout: "/nutberry/mix", name: "смеси" },
        { rout: "/nutberry/fruitbar", name: "фруктовые батончики" },
        {
          rout: "/nutberry/nutbar",
          name: "орехово-фруктовые батончики",
        },
        { rout: "/nutberry/corn", name: "попкорн" },
        { rout: "/nutberry/pasta", name: "ореховая паста" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../css/style.scss";
</style>