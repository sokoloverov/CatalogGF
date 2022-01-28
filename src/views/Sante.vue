<template>
  <div>
    <section-header :logo="logo" :banner="banner" :ifShow="true" />
    <div class="tmHeader__text">
      Продукты для здорового питания всей семьи. Французское слово Santé
      означает «здоровье». Произведены польской компанией основанной в 1992 году
      как семейный бизнес, с самого начала нацеленой на выпуск продуктов на
      рынке натурального питания. Продукты Sante разрабатываются на основании
      последних научных исследований и актуальных тенденциях в области питания.
      Продукция выпускается на современном заводе, соответствующем самым строгим
      стандартам европейского качества, подтвержденным международными
      сертификатами. Более половины выпускаемой продукции экпортируется в 18
      стран мира. ГУД-ФУД является эксклюзивным поставщиком продукции Sante на
      россиском рынке.
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

import logo from "../assets/logo/logo_sante_2.jpg";
import banner from "../assets/Baners/баннер4.jpg";

export default {
  name: "Sante",
  components: {
    SectionHeader,
    RouterWindow,
  },
  data() {
    return {
      header: "Вкусно и полезно",
      logo,
      banner,
      mainRout: "/sante",
      routs: [
        { rout: "/sante/mueslibar", name: "батончики мюсли" },
        { rout: "/sante/readybreakfast", name: "готовые завтраки" },
        { rout: "/sante/bread", name: "пресные хлебцы" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../css/style.scss";
</style>





