/* eslint-disable no-undef */
<template>
  <div id="app" @click="clickCheck()">
    <transition name="fade" mode="out-in" appear>
      <div v-if="check" key="main">
        <div id="nav">
          <div>
            <router-link to="/about">О компании</router-link>
            <router-link to="/gfgreen">GF Green</router-link>
          </div>
          <div>
            <router-link to="/goodfood">GOOD FOOD</router-link>
            <router-link to="/nutberry">NUTBERRY</router-link>
          </div>
          <div>
            <router-link to="/vival">Виваль</router-link>
            <router-link to="/sante">Sante</router-link>
          </div>
        </div>
        <router-view />
      </div>
      <div v-else key="saver">
        <screen-saver />
      </div>
    </transition>
  </div>
</template>

<script>
import ScreenSaver from "./components/ScreenSaver.vue";

export default {
  name: "App",
  components: {
    ScreenSaver,
  },
  data() {
    return {
      check: false,
    };
  },
  mounted() {
    setTimeout(this.clickCheck, 5000);
  },
  methods: {
    clickCheck() {
      this.check = true;

      //обнуление счетчиков с последнего клика
      let highestTimeoutId = setTimeout(";");
      for (let i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
      }
      //интервал до включения скринсейвера
      setTimeout(this.go, 180000);
    },
    go() {
      //включение скринсевера!
      this.check = false;
    },
  },
};
</script>

<style lang="scss">
@import "./css/style.css";
$superMinScreen: 420px;
$minScreen: 920px;
$largeScreen: 1081px;
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  padding: 20px;
  a {
    display: inline-block;
    text-decoration: none;
    margin: 0.15rem 0.3rem;
    @media (min-width: $largeScreen) {
      font-size: 1.4rem;
    }
    font-size: 1.2rem;
    font-weight: bold;
    color: #175ba0;
    &.router-link-active {
      color: #1e915d;
    }
  }
}
.banner {
  height: 860px;
  width: 1530px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>
