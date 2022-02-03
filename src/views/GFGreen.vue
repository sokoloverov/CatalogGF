<template>
  <div>
    <section-header
      :logo="logo"
      :banner="checkRoute"
      :ifShow="true"
      :headerText="description"
    />
    <!-- <div class="tmHeader__text">
      Сочетание натурального и одновременно вкусного продукта без компромиссов.
      Используются только сухофрукты без консервантов, прошедшие проверку в
      лаборатории. Орехи и сухофрукты облиты натуральным шоколадом без
      применения пальмового масла, красителей и ароматизаторов. Дражировка
      осуществляется без глянцевания, что позволяет избежать появления е-шек в
      составе продукта. Пока никто из других производителей не делает такой
      комбинации чистых от обработки ингредиентов и натурального шоколада. Линия
      продуктов Green сделана в целях достижения сочетания яркого вкуса и
      натуральности. Продукт не имеет по стоястоянию на 1 февраля 2022 года
      прямых аналогов на российском рынке.
    </div> -->
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

import logo from "../assets/logo/GFGreenlogo2.jpg";
import banner0 from "../assets/Baners/Green.jpg";

export default {
  name: "GFGreen",
  components: {
    SectionHeader,
    RouterWindow,
  },
  data() {
    return {
      header: "Органические сладости",
      description:
        "Сочетание натурального и одновременно вкусного продукта без компромиссов. Используются только сухофрукты без консервантов, прошедшие проверку в лаборатории. Орехи и сухофрукты облиты натуральным шоколадом без применения пальмового масла, красителей и ароматизаторов. Дражировка осуществляется без глянцевания, что позволяет избежать появления е-шек в составе продукта. Пока никто из других производителей не делает такой комбинации чистых от обработки ингредиентов и натурального шоколада. Линия продуктов Green сделана в целях достижения сочетания яркого вкуса и натуральности. Продукт не имеет по стоястоянию на 1 февраля 2022 года прямых аналогов на российском рынке.",
      logo,
      banner0,
      mainRout: "/gfgreen",
      currentRout: "",
      routs: [
        { rout: "/gfgreen/sweets", name: "конфеты" },
        { rout: "/gfgreen/driedfruits", name: "сухофрукты" },
        { rout: "/gfgreen/dragee", name: "драже" },
      ],
    };
  },
  computed: {
    checkRoute() {
      switch (this.$route.path) {
        case "/gfgreen/sweets":
          return banner0;
        case "/gfgreen/driedfruits":
          return banner0;
        case "/gfgreen/dragee":
          return banner0;
        default:
          return banner0;
      }
    },
  },
};
</script>

<style lang="scss">
@import "../css/style.scss";
</style>





