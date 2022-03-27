<template>
  <div>
    <div class="router__window">
      <div>
        <img class="router__window_img" alt="Vue logo" :src="logo" />
        <div class="router__window_textCategory router__window_overflows">
          {{ headerName }}
        </div>
      </div>
      <div
        class="router__window_link"
        v-for="link in routerlinks"
        :key="link.text"
        @click="currentRouteName(link.name)"
      >
        <router-link
          :class="link.name === currentLink ? active : passive"
          :to="link.rout"
          append
          >{{ link.name }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
// import FallAnimation from "./FallAnimation.vue";

export default {
  name: "RouterWindow",
  components: {
    // FallAnimation,
  },
  props: {
    logo: String,
    mainLink: String,
    headerName: String,
    routerlinks: [],
  },
  data() {
    return {
      currentLink: this.routerlinks[0].name,
      passive: "router__link_passive",
      active: "router__link_active router__link_blink",
    };
  },
  methods: {
    currentRouteName(link) {
      this.currentLink = link;
    },
    // cleanMenuItem() {
    //   this.currentLink = "";
    // },
  },
};
</script>

<style lang="scss">
$superMinScreen: 420px;
$minScreen: 920px;
$largeScreen: 1081px;
/*МЕНЮ РОУТЕРОВ*/
.router__window {
  position: fixed;
  top: 20vh;
  left: 2vw;
  width: 20vw;
  background-color: rgb(255, 255, 255);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  display: inline-block;
  @media (max-width: $largeScreen) {
    position: static;
    width: 80vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1rem 0;
    margin: 1rem auto;
  }
  @media (max-width: $largeScreen) and (orientation: landscape) {
    width: 85vw;
  }
}
.router__window_link {
  margin: 2rem 1rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  @media (max-width: $largeScreen) {
    display: flex;
    margin: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
.router__window_img {
  width: 10vw;
  margin-top: 15%;
  @media (max-width: $largeScreen) {
    display: none;
  }
}
.router__window_textCategory {
  @media (max-width: $largeScreen) {
    display: none;
  }
  width: 80%;
  margin: 1rem auto;
  color: #003897;
  text-transform: uppercase;
  line-height: 1.5rem;
  font-weight: 900;
}
.router__link_passive {
  text-decoration-line: none;
  color: #3dae2b;
  cursor: pointer;
}
.router__link_active {
  position: relative;
  display: inline-block;
  text-decoration-line: none;
  color: #ed302f;
  font-weight: 700;
  cursor: pointer;
  @media (min-width: $largeScreen) {
    padding: 1rem 0;
    width: 17vw;
    height: 0.9rem;
    border: 3px solid #ed302f;
    border-radius: 5px;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  }
}

/*ПЕРЕЛИВАЮЩЙСЯ ТЕКСТ*/
.router__window_overflows {
  position: relative;
  background: white;
  overflow: hidden;
  text-align: center;
}
.router__window_overflows:before {
  content: "";
  position: absolute;
  filter: blur(5px);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: screen;
  background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 1em,
      #bfe2ff 1em,
      #337ab7 50%
    ),
    repeating-linear-gradient(45deg, #337ab7, #337ab7 1em, #fff 1em, #bfe2ff 50%);
  background-size: 3em 3em, 2em 2em;
  animation-name: ani;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes ani {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 0;
  }
}
/*МИГАЮЩИЙ ТЕКСТ*/
.router__link_blink {
  background: linear-gradient(to right, #337ab7 40%, rgb(252, 48, 48) 60%);
  background-repeat: no-repeat;
  color: transparent;
  background-clip: text;
  background-size: 500%;
  background-position: 30%;
  animation: 4s infinite transfusion;
}
@keyframes transfusion {
  0% {
    background-position: 30%;
  }

  20% {
    background-position: 30%;
  }

  50% {
    background-position: 70%;
  }

  80% {
    background-position: 70%;
  }

  100% {
    background-position: 30%;
  }
}
</style>
