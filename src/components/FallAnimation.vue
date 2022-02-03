<template>
  <div class="fall-container">
    <img class="" alt="Vue logo" :src="leaf" />
  </div>
</template>

<script>
import leaf from "../assets/img/1.png";

export default {
  name: "FallAnimation",
  data() {
    return {
      leaf,
    };
  },
};
</script>

 <style type="text/css" scoped>
.fall-container {
  height: 180vh;
  width: 23vw;
  overflow: hidden;
  position: absolute;
  perspective-origin: center;
  perspective: 1800px;
  /* border: 3px solid black; */
  top: -5vh;
}
img {
  position: absolute;
  width: 25%;
  top: 0;
  left: 8vw;
  transform-origin: 0px -400px 0px;
  animation-name: fall, sway, fadeout;
  animation-duration: 13s, 13s, 13s;
  animation-fill-mode: both;
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: infinite;
  animation-delay: 1.5s;
}
@keyframes sway {
  0% {
    transform: rotateZ(-5deg) rotateX(55deg);
  }
  30% {
    transform: rotateZ(15deg) rotateX(60deg);
    animation-timing-function: ease-in-out;
  }
  60% {
    transform: rotateZ(-15deg) rotateX(55deg);
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: rotateZ(0deg) rotateX(58deg);
    animation-timing-function: cubic-bezier(0.99, 0, 0.89, 0.435);
  }
}
@keyframes fall {
  60% {
    /* filter: drop-shadow(0px 60px 40px rgba(0, 0, 0, 0)); */
  }
  100% {
    margin-top: 180vh;
    /* filter: drop-shadow(0px 5px 8px rgba(0, 0, 0, 0.6)); */
  }
}
@keyframes fadeout {
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0.4;
  }
  100% {
    opacity: 0;
  }
}
</style>