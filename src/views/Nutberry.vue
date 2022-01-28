<template>
  <div>
    <section-header :logo="logo" :banner="banner" :ifShow="true" />
    <div class="tmHeader__text">
      Удобный и полезный перекус в любых ситуациях. Оптимальное соотношение цены
      и качества для требовательного потребителя. В продуктах линейки подобраны
      калибры и сорта позволяющие получить качественный продукт по разумной
      цене. Все ингредиенты проходят трёхступенчатый контроль качества сырья и
      соотвествия сопроводительной документации. Для удобства многоразового
      закрытия на всех упаковках с весом более 100 г предусмотрена специальная
      лента для фиксации закрытия пакета. Указаны реалистичные сроки годности.
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

import logo from "../assets/logo/NUTBERRYlogo.jpg";
import banner from "../assets/Baners/баннер4.jpg";

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
      banner,
      mainRout: "/nutberry",
      routs: [
        { rout: "/nutberry/nuts", name: "орехи" },
        { rout: "/nutberry/driedfruits", name: "сухофрукты, ягоды" },
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