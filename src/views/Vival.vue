<template>
  <div>
    <section-header
      :logo="logo"
      :banner="checkRoute"
      :ifShow="true"
      :headerText="description"
    />
    <!-- <div class="tmHeader__text">
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

import logo from "../assets/logo/Vivallogo.jpg";
import banner0 from "../assets/Baners/Виваль.jpg";
import banner1 from "../assets/Baners/Виваль_кокос.jpg";
import banner2 from "../assets/Baners/Виваль_десерт.jpg";
import banner3 from "../assets/Baners/ФЖК.jpg";

export default {
  name: "Vival",
  components: {
    SectionHeader,
    RouterWindow,
  },
  data() {
    return {
      header: "Конфеты и драже с орехами и сухофруктами",
      description:
        "Шоколадные конфеты с натуральными ингредиентами для любителей конфет с сухофруктами и орехами. Конфеты Виваль - один из немногих лидеров этой категории. Основной принцип разработки и производства конфет под маркой Виваль - качество продукта выше, чем у прямых конкурентов. На основе нескольких сотен ежемесячных отзывов покупателей интернет-магазинов средняя оценка конфет за январь 2022 года - 4,78 из 5 возможных. В продукции используются ингредиенты, прошедшие трехступенчатый контроль качества сырья и соотвествия сопроводительной документации. По ряду кондитерских изделий имеются собственные патенты. В линии конфет Виваль есть продукты, такие как десертные конфеты, не имеющие аналогов на отечественном рынке.",
      logo,
      banner0,
      banner1,
      banner2,
      banner3,
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
  computed: {
    checkRoute() {
      console.log(this.$route.path);
      switch (this.$route.path) {
        case "/vival/fruitsweets":
          return banner0;
        case "/vival/coconutsweets":
          return banner1;
        case "/vival/jelly":
          return banner3;
        case "/vival/dessert":
          return banner2;
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