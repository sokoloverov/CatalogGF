<template>
  <div class="back">
    <div class="logo_position">
      <img class="logo" alt="Vue logo" src="../assets/logo/GFlogo.png" />
    </div>

    <svg viewBox="0 0 960 300">
      <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="80%">ГУД-ФУД</text>
      </symbol>

      <g class="g-ants">
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "ScreenSaver",
};
</script>

<style lang="scss" scoped>
.back {
  height: 100vh;
  font-weight: 800;
  background: #31319b;
}
.logo_position {
  padding-top: 5rem;
}
.logo {
  height: 10rem;
}

svg {
  display: block;
  //font: 10.5em "Montserrat";
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11rem;
  width: 80%;
  letter-spacing: 0.5rem;
  margin: 0 auto;
}

.text-copy {
  fill: none;
  stroke: white;
  stroke-dasharray: 6% 29%;
  stroke-width: 0.5rem;
  stroke-dashoffset: 0%;
  animation: stroke-offset 5.5s infinite linear;
}

.text-copy:nth-child(1) {
  stroke: #010981;
  animation-delay: -1s;
}

.text-copy:nth-child(2) {
  stroke: #840037;
  animation-delay: -2s;
}

.text-copy:nth-child(3) {
  stroke: #47b81a;
  animation-delay: -3s;
}

.text-copy:nth-child(4) {
  stroke: #ee0322;
  animation-delay: -4s;
}

.text-copy:nth-child(5) {
  stroke: #ffffff;
  animation-delay: -5s;
}

@keyframes stroke-offset {
  100% {
    stroke-dashoffset: -35%;
  }
}
</style>