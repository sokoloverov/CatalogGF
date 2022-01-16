<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Навигация</router-link> |
      <router-link to="/about">О компании</router-link> |
      <router-link to="/gfgreen">GF Green</router-link> |
      <router-link to="/goodfood">GOOD FOOD</router-link> |
      <router-link to="/nutberry">NUTBERRY</router-link> |
      <router-link to="/vival">Виваль</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
