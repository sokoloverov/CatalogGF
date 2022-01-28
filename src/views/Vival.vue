<template>
  <div>
    <section-header :logo="logo" :banner="banner" :ifShow="true" />
    <div class="tmHeader__text">
      Шоколадные конфеты с нутарльными ингредиентами для любителей конфет с
      сухофруктами и орехами. Конфеты Виваль - один из немногих лидеров этой
      категории. Основной принцип разработки и производства конфет под маркой
      Виваль - качество продукта выше, чем у прямых конкурентов. На основе
      нескольких сотен ежемесячных отзывов покупателей интернет-магазинов
      средняя оценка конфет за январь 2022 года - 4,78 из 5 возможных. В
      продукции используются ингредиенты прошедшие трехступенчатый контроль
      качества сырья и соотвествия сопроводительной документации. По ряду
      кондитерских изделий имеются собственные патенты. В линии конфет Виваль
      есть продукты, такие как десертные конфеты, не имеющие аналогов на
      отечественном рынке.
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

import logo from "../assets/logo/Vivallogo.jpg";
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