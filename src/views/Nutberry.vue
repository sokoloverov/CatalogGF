<template>
  <div>
    <section-header
      :logo="logo"
      :banner="checkRoute"
      :ifShow="true"
      :headerText="description"
    />
    <!-- <div class="tmHeader__text">
      Удобный и полезный перекус в любых ситуациях. Оптимальное соотношение цены
      и качества для требовательного потребителя. В продуктах линейки подобраны
      калибры и сорта позволяющие получить качественный продукт по разумной
      цене. Все ингредиенты проходят трёхступенчатый контроль качества сырья и
      соотвествия сопроводительной документации. Для удобства многоразового
      закрытия на всех упаковках с весом более 100 г предусмотрена специальная
      лента для фиксации закрытия пакета. Указаны реалистичные сроки годности.
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

import logo from "../assets/logo/NUTBERRYlogo.jpg";
import banner0 from "../assets/Baners/Nutberry.jpg";
import banner1 from "../assets/Baners/Popcorn.jpg";

export default {
  name: "Nutberry",
  components: {
    SectionHeader,
    RouterWindow,
  },
  data() {
    return {
      header: "Оптимальное соотношение цены и качества",
      description:
        "Удобный и полезный перекус в любых ситуациях. Оптимальное соотношение цены и качества для требовательного потребителя. В продуктах линейки подобраны калибры и сорта позволяющие получить качественный продукт по разумной цене. Все ингредиенты проходят трёхступенчатый контроль качества сырья и соотвествия сопроводительной документации. Для удобства многоразового закрытия на всех упаковках с весом более 100 г предусмотрена специальная лента для фиксации закрытия пакета. Указаны реалистичные сроки годности.",
      logo,
      banner0,
      banner1,
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
  computed: {
    checkRoute() {
      switch (this.$route.path) {
        case "/nutberry/nuts":
          return banner0;
        case "/nutberry/driedfruits":
          return banner0;
        case "/nutberry/mix":
          return banner0;
        case "/nutberry/fruitbar":
          return banner0;
        case "/nutberry/nutbar":
          return banner0;
        case "/nutberry/corn":
          return banner1;
        case "/nutberry/pasta":
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