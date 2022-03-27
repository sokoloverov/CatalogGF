<template>
  <div class="back">
    <div class="logo_position">
      <img class="logoBig neonText" alt="Vue logo" src="../assets/logo/GFlogo2.png" />
    </div>
    <div class="catalog">КАТАЛОГ<span class="flare"></span></div>
    <!-- <div class="pulse"> -->
    <!-- <img class="hand" alt="Vue logo" src="../assets/logo/1-01.png" /> -->
    <!-- <img
        class="hand"
        alt="Vue logo"
        src="../assets/img/png-clipart-white-mouse-pointer-computer-mouse-pointer-cursor-window-pointing-device-mouse-cursor-miscellaneous-angle-removebg-preview.png"
      /> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "ScreenSaver",
};
</script>

<style lang="scss" scoped>
$superMinScreen: 420px;
$minScreen: 920px;
$largeScreen: 1081px;

.back {
  height: 100vh;
  background: url("../assets/Baners/Good_Food-main-background.jpg");
  background-position: center;
  background-size: cover;
  width: 100%;
}
.logo_position {
  padding-top: 15vh;
  height: 45vh;
  @media (max-width: $minScreen) and (orientation: portrait) {
    height: 30vh;
  }
  @media (min-width: $superMinScreen) and (max-width: $minScreen) and (orientation: portrait) {
    height: 30vh;
  }
  @media (max-width: $superMinScreen) and (orientation: portrait) {
    height: 25vh;
  }
}

.logoBig {
  max-height: 100%;
  margin: 0 auto;
}
.neonText {
  animation: shadowAnimation 5s infinite;
}
@keyframes shadowAnimation {
  0% {
    filter: drop-shadow(0 0 3rem rgb(255, 255, 255));
  }
  50% {
    filter: drop-shadow(0 0 3rem rgb(110, 110, 110));
  }
  100% {
    filter: drop-shadow(0 0 3rem rgb(255, 255, 255));
  }
}
.pulse {
  position: absolute; // Нужно будет в будущем, для позиционирования эффекта
  text-align: center;
  padding: 1rem; // Отступ
  border-radius: 50%; // Делаем икноку круглой
  background: #003897;
  width: 3rem;
  height: 3rem;
  z-index: 0;
  animation: handMovie 20s linear infinite;
  animation-direction: alternate-reverse;
}
.pulse::after,
.pulse::before {
  content: ""; // Нужно для отображения псевдокласса
  position: absolute;
  border: 0.1rem solid #003897; // Ширина обводки
  left: -1rem;
  opacity: 0;
  right: -1rem;
  top: -1rem;
  bottom: -1rem;
  border-radius: 50%;
  z-index: -1;
  animation: pulse 2.5s linear infinite; // Указываем название анимации, время, тип, и нужно ли её повторять
}
.pulse::after {
  animation-delay: 1.25s;
}
@keyframes pulse {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}
@keyframes handMovie {
  0% {
    top: 45vh;
    left: 2vw;
  }
  25% {
    top: 55vh;
    left: 22.5vw;
  }
  50% {
    top: 65vh;
    left: 45vw;
  }
  75% {
    top: 55vh;
    left: 67.5vw;
  }
  100% {
    top: 45vh;
    left: 90vw;
  }
}
.hand {
  position: absolute;
  //left: -2.7rem; рука
  left: -0.75rem; //мышка
  //top: 1.7rem; рука
  top: 2.1rem; //мышка
  height: 17rem; //рука
  height: 13rem; //мышка
  z-index: 10;
  animation: handSkew 7s linear infinite;
}
@keyframes handSkew {
  0% {
    transform: skewX(0deg);
  }
  25% {
    transform: skewX(3deg);
  }
  50% {
    transform: skewX(0deg);
  }
  75% {
    transform: skewX(-3deg);
  }
  100% {
    transform: skewX(0deg);
  }
}
.catalog {
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 10vh;
  @media (orientation: portrait) and (max-width: $largeScreen) {
    margin-top: 25vh;
  }
  @media (max-width: $superMinScreen) and (orientation: portrait) {
    margin-top: 25vh;
    font-size: 2.6rem;
    letter-spacing: 0.6rem;
  }
  @media (max-width: $minScreen) and (orientation: landscape) {
    margin-top: 10vh;
    font-size: 2.6rem;
    letter-spacing: 0.8rem;
  }
  @media (min-width: $superMinScreen) and (max-width: $minScreen) and (orientation: portrait) {
    font-size: 5rem;
  }
  @media (min-width: $largeScreen) {
    font-size: 6rem;
    letter-spacing: 2rem;
  }
  width: 100vw;
  position: relative;
  overflow: hidden;
  background: #003897;
  color: #ffffff;
  font-size: 5rem;
  font-weight: 800;
  letter-spacing: 1rem;
}

.flare {
  position: absolute;
  top: 0;
  height: 100%;
  width: 4rem;
  transform: skewX(-45deg); // Наклон
  animation: flareAnimation;
  left: -150%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.4));
  animation: flareAnimation 5s infinite linear;
}
@keyframes flareAnimation {
  0% {
    left: -150%;
  }
  100% {
    left: 150%;
  }
}
</style>
