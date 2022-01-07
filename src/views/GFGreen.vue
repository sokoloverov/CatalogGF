<template>
  <div>
    <section-header :headerName="header" :logo="logo" />
    <div class="tmHeader__text">
      Сочетание натурального и одновременно вкусного продукта без компромиссов.
      Используются только сухофрукты без консервантов, прошедшие проверку в
      лаборатории. Орехи и сухофрукты облиты натуральным шоколадом без
      применения пальмового масла, красителей и ароматизаторов. Пока никто из
      других производителей не делает такой натуральной комбинации чистых от
      обработки сухофурктов и натурального шоколада. Эта линейка сделана из
      соображений лучшего вкуса и экологичности. Получился натуральный в полном
      смысле этого термина, продукт, не имеющее пока на российском рынке прямых
      аналогов.
    </div>
    <router-window :routerlinks="routs" :logo="logo" />
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
      header: "Органические сладости",
      logo,
      routs: [
        { rout: "/gfgreen/sweets", name: "GF Green конфеты" },
        { rout: "/gfgreen/driedfruits", name: "GF Green сухофрукты" },
        { rout: "/gfgreen/dragee", name: "GF Green драже" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../css/style.scss";
</style>





