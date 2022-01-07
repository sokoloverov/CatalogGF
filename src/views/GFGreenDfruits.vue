<template>
  <div>
    <div class="tmHeader__header_small">{{ header }}</div>
    <show-case :sku="gfGreenDfruitsCards" />
    <router-window :routerlinks="routs" :logo="logo" />
  </div>
</template>

<script>
import ShowCase from "../components/ShowCase.vue";
import RouterWindow from "../components/RouterWindow.vue";

import logo from "../assets/logo/logo.png";

import gfGreenDFapricot from "../assets/GFGreen/GFGreenDF/GF_Green_конфеты_абрикос_в_шоколаде_front.jpg";
import gfGreenDFbanana from "../assets/GFGreen/GFGreenDF/GF_Green_конфеты_банан_в_шоколаде_front.jpg";

export default {
  name: "GFGreenDfruits",
  components: {
    ShowCase,
    RouterWindow,
  },
  data() {
    return {
      header: "Сухофрукты в шоколаде",
      logo,
      routs: [
        { rout: "/gfgreen/sweets", name: "GF Green конфеты" },
        { rout: "/gfgreen/driedfruits", name: "GF Green сухофрукты" },
        { rout: "/gfgreen/dragee", name: "GF Green драже" },
      ],
      gfGreenDfruitsCards: [
        {
          picture: gfGreenDFapricot,
          text: "GOOD FOOD Green Абрикос в шоколаде 150 г",
          id: 1,
          description:
            "Состав: абрикос  сушеный без косточки, шоколадная масса (сахар, масло какао, тёртое какао, какао -порошок, эмульгатор - лецитин соевый, ванильный порошок (молотые стручки ванили)).<br>Содержание общего сухого остатка какао - продуктов в шоколадной массе -  не менее 44%, содержание какао - масла не менее 34,5%.<br>Продукт может содержать следы молочного белка, фрагменты косточек, следы арахиса, кунжута и орехов.<br>Пищевая ценность в 100 г: Белки - 3,3 г, Жиры 14,5 г, Углеводы 57,3 г.<br>Энергетическая ценность 373 Ккал.<br>Хранить при температуре от +15°С до +21°С и относительной влажности воздуха не более 75%.<br>ТУ 9123-008-60458573-15<br>Страна изготовитель: Россия",
        },
        {
          picture: gfGreenDFbanana,
          text: "GOOD FOOD Green Банан в шоколаде 150 г",
          id: 2,
          description:
            "Состав: банан  сушеный, шоколадная масса (сахар, масло какао, тёртое какао, какао - порошок, эмульгатор - лецитин соевый, ванильный порошок (молотые стручки ванили)).<br>Содержание общего сухого остатка какао - продуктов в шоколадной массе -  не менее 44%, содержание какао - масла не менее 34,5%.<br>Продукт может содержать следы молочного белка, следы арахиса, кунжута и орехов.<br>Пищевая ценность в 100 г: Белки - 4,5 г, Жиры 13,0 г, Углеводы 61,0 г.<br>Энергетическая ценность 379 Ккал.<br>Хранить при температуре от +15°С до +21°С и относительной влажности воздуха не более 75%.<br>ТУ 9123-008-60458573-15<br>Страна изготовитель: Россия",
        },
      ],
    };
  },
};
</script>
