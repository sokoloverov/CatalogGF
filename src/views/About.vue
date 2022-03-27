<template>
  <div class="about">
    <div>
      <img
        class="navigation_img"
        alt="Vue logo"
        src="../assets/Baners/Good_Food_3.2.jpg"
      />
    </div>
    <div class="navigation_text">
      <p class="navigation_typewriter">
        "ГУД-ФУД" - это здоровое питание качественными продуктами
      </p>
      <beating-heart class="navigation_heart" />
      <p class="scale-up-hor-center navigation_focus_1">
        Группа компаний "ГУД-ФУД" поставляет в Россию орехи и сухофрукты для 150 ведущих
        предприятий кондитерской, молочной и хлебобулочной промышленности.
      </p>

      <p class="scale-up-hor-center navigation_focus_2">
        Журнал Forbes в 2014 году назвал группу компаний "ГУД-ФУД" «ведущим поставщиком
        орехов и сухофруктов в России». Группа "ГУД-ФУД" создана в 1996 году. Главной
        задачей была и остается – удовлетворение запросов потребителей качественной
        продукцией.
      </p>
      <p class="scale-up-hor-center navigation_focus_3">
        Несколько миллионов россиян по всей стране являются постоянными покупателями
        продукции под марками GOOD FOOD, NUTBERRY, Виваль. Группа компаний выступает за
        здоровый образ жизни и здоровое питание, предлагает натуральные и полезные
        продукты.
      </p>
      <p class="scale-up-hor-center navigation_focus_4">
        Главное преимущество "ГУД-ФУД" – качество продукции. Компания имеет собственное
        высокотехнологичное производство, лабораторию, современный складской комплекс и
        собственный парк грузовых автомобилей. Обеспечивает наилучшие условия
        изготовления, контроля и хранения продукции в соответствии с мировыми стандартами.
      </p>
      <p class="scale-up-hor-center navigation_focus_5">
        Компания ГУД-ФУД одна из первых в России получила международный сертификат пищевой
        безопасности и качества Food Safety System Certification 22000. Он позволяет
        поставлять готовую продукцию по всему миру. Фабрика "ГУД-ФУД", как крупный
        поставщик продуктов питания, регулярно проверяется ведущими торговыми сетями
        России и регулярно получает наивысшие баллы соответствия международным стандартам
        качества, имеет собственные патенты на производство пищевых продуктов.
      </p>
    </div>
  </div>
</template>

<script>
import BeatingHeart from "../components/BeatingHeart.vue";

export default {
  name: "About",
  components: {
    BeatingHeart,
  },
};
</script>

<style lang="scss">
$superMinScreen: 420px;
$minScreen: 920px;
$largeScreen: 1081px;
/*ЗАГОЛОВОК О КОМПАНИИ И НАВИГАЦИИ*/
.navigation_img {
  max-width: 80vw;
}
.navigation_header {
  font-size: 2rem;
  margin: 1.4rem;
  text-align: center;
}
.navigation_text {
  font-size: 1rem;
  text-align: center;
  @media (min-width: $largeScreen) and (orientation: landscape) {
    margin: 1.4rem 12vw;
  }
  margin: 1.4rem 10vw;
  @media (min-width: $minScreen) and (orientation: landscape) {
    line-height: 1.4rem;
  }
  line-height: 1.2rem;
}
.navigation_heart {
  height: 10vh;
}

/*ПЕЧАТНАЯ МАШИНКА*/
.navigation_typewriter {
  color: rgb(44, 43, 43);
  margin: 1.5rem auto;
  text-transform: uppercase;
  font-weight: 700;
  @media (min-width: $minScreen) and (orientation: landscape) {
    overflow: hidden;
    white-space: nowrap;
    animation: typing 1.5s steps(30, end), step-end infinite;
  }
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
/*ПОЯВЛЕНИЕ*/
// .navigation_focus {
//   animation: focus-in-expand-fwd 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
// }
@media (min-width: $minScreen) and (orientation: landscape) {
  .scale-up-hor-center {
    animation: scale-up-hor-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  .navigation_focus_1 {
    animation-delay: 1s;
  }
  .navigation_focus_2 {
    animation-delay: 1.5s;
  }
  .navigation_focus_3 {
    animation-delay: 2s;
  }
  .navigation_focus_4 {
    animation-delay: 2.5s;
  }
  .navigation_focus_5 {
    animation-delay: 3s;
  }
}
@-webkit-keyframes focus-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    transform: translateZ(-800px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    filter: blur(0);
    opacity: 1;
  }
}
@keyframes focus-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    transform: translateZ(-800px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    filter: blur(0);
    opacity: 1;
  }
}

@-webkit-keyframes scale-up-hor-center {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes scale-up-hor-center {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
</style>
