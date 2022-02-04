<template>
  <div>
    <section-header
      :logo="logo"
      :banner="checkRoute"
      :ifShow="true"
      :headerText="description"
    />
    <!-- <div class="tmHeader__text">
      Самые крупные калибры, самые лучшие сорта орехов и сухофруктов из
      возможных. Линия продуктов для всех, кто может себе позволить платить за
      качество. Продукты под маркой GOOD FOOD уже 25 лет являются эталоном
      лучшего из доступного на отечественном рынке. Основная часть орехов и
      сухофруктов поступает напрямую от сертифицированных производителей,
      имеющих международные сертификаты пищевой безопасности. Все ингредиенты
      проходят трёхступенчатый контроль качества сырья и соотвествия
      сопроводительной документации. ГУД-ФУД - одна из немногих отечественных
      компаний предъявляет повышенные требования к исходному сырью. Например, не
      закупает ингреиенты с содержанием искуственных красителей или с
      превышением норм по сернистому ангидриду. Указаны реалистичные сроки
      годности.
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

import logo from "../assets/logo/GOOD-FOODlogo.jpg";
import banner0 from "../assets/Baners/Good_Food-2.jpg";

export default {
  name: "GFGreen",
  components: {
    SectionHeader,
    RouterWindow,
  },
  data() {
    return {
      header: "Лучшее из возможного",
      description:
        "Самые крупные калибры, самые лучшие сорта орехов и сухофруктов из возможных. Линия продуктов для всех, кто может себе позволить платить за качество. Продукты под маркой GOOD FOOD уже 25 лет являются эталоном лучшего из доступного на отечественном рынке. Основная часть орехов и сухофруктов поступает напрямую от сертифицированных производителей, имеющих международные сертификаты пищевой безопасности. Все ингредиенты проходят трёхступенчатый контроль качества сырья и соотвествия сопроводительной документации. ГУД-ФУД - одна из немногих отечественных компаний предъявляет повышенные требования к исходному сырью. Например, не закупает ингредиенты с содержанием искусственных красителей или с превышением норм по сернистому ангидриду. Указаны реалистичные сроки годности.",
      logo,
      banner0,
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
      switch (this.$route.path) {
        case "/goodfood/nuts":
          return banner0;
        case "/goodfood/driedfruits":
          return banner0;
        case "/goodfood/mix":
          return banner0;
        case "/goodfood/dragee":
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