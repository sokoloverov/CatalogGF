<template>
  <div>
    <show-case :sku="santeBread" />
  </div>
</template>

<script>
import ShowCase from "../components/ShowCase.vue";

import SanteBread from "../assets/Sante/SanteBread/Maca_Razowa_180g.jpg";

export default {
  name: "SanteBread",
  components: {
    ShowCase,
  },
  data() {
    return {
      header: "Пресные хлебцы",
      santeBread: [
        {
          picture: SanteBread,
          text: "Sante пресные хлебцы 180&nbspг",
          id: 1,
          description:
            "Состав: Мука (пшеничная мука, мука грубого помола, рисовая мука 2%), морская соль.<br>Зерна пшеницы содержат глютен.<br>Пищевая ценность в 100 г: белки 12,0г, углеводы 80,0г, из них сахара 0,35г; жиры 1,3г, из них насыщенные 0,2г, клетчатка 4,9г, натрий 0,87г.<br>Энергетическая ценность 390 Ккал.<br>Хранить в сухом месте при температуре не более +40С и относительной влажности воздуха не более 75%. Срок годности 12 месяцев.<br>Страна изготовитель: Польша",
        },
      ],
    };
  },
};
</script>
