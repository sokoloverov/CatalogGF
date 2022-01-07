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

import gfGFpeanutRHS from "../assets/GOODFOOD/GFNuts/Арахис-жар.-с-медом-и-кунжутом.jpg";
import gfGFpeanutRwS from "../assets/GOODFOOD/GFNuts/Арахис-жареный-соленый.jpg";
import gfGFbraziliannut from "../assets/GOODFOOD/GFNuts/Бразильский-орех.jpg";
import gfGFwalnut from "../assets/GOODFOOD/GFNuts/Грецкий-орех.jpg";
import gfGFcashewRHS from "../assets/GOODFOOD/GFNuts/Кешью-жареный-с-медом-и-кунжутом.jpg";
import gfGFcashewR from "../assets/GOODFOOD/GFNuts/Кешью-жареный.jpg";
import gfGFalmondR from "../assets/GOODFOOD/GFNuts/Миндаль-жареный.jpg";
import gfGFsunflower from "../assets/GOODFOOD/GFNuts/Семечки-подсолнечника-сушеные.jpg";
import gfGFpumpkin from "../assets/GOODFOOD/GFNuts/Тыквенные-семечки-сушеные.jpg";
import gfGFpistachiosR from "../assets/GOODFOOD/GFNuts/Фундук-жареный.jpg";
import gfGFpistachiosRHS from "../assets/GOODFOOD/GFNuts/Фундук-жареный-с-медом-и-кунжутом.jpg";
import gfGFhuzelnutR from "../assets/GOODFOOD/GFNuts/Фундук-жареный.jpg";
import gfGFhuzelnutRHS from "../assets/GOODFOOD/GFNuts/Фундук-жареный-с-медом-и-кунжутом.jpg";
import gfGFcashewD from "../assets/GOODFOOD/GFNuts/GF-кешью_суш_130.jpg";
import gfGFalmondD from "../assets/GOODFOOD/GFNuts/GF-миндаль_суш_130.jpg";
import gfGFpistachiosRS from "../assets/GOODFOOD/GFNuts/GF-фисташки_жс_130.jpg";
import gfGFhuzelnutD from "../assets/GOODFOOD/GFNuts/GF-фундук_суш_130.jpg";
import gfGFpeanut from "../assets/GOODFOOD/GFNuts/GF-DP-орехи-арахс-жар-без-соли.jpg";
import gfGFpinenut from "../assets/GOODFOOD/GFNuts/GF-DP-орехи-кедровый.jpg";
import gfGFmacadamia from "../assets/GOODFOOD/GFNuts/GF-DP-орехи-макадамия.jpg";

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
