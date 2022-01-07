<template>
  <div class="goods__window">
    <a class="goods__window goods__box_a" @click="changeShowProductCard">
      <div class="goods__window_position">
        <div class="goods__window_left">
          <img
            class="goods__window_img"
            alt="Vue logo"
            :src="productCard[idCard - 1].picture"
          />
        </div>
        <div class="goods__window_right">
          <div class="goods__window_name">
            {{ productCard[idCard - 1].text }}
          </div>
          <div
            class="goods__window_description"
            v-html="productCard[idCard - 1].description"
          ></div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    productCard: [],
    idCard: Number,
  },
  methods: {
    changeShowProductCard() {
      this.$emit("closeWindow", false);
    },
  },
};
</script>

<style lang="scss">
@import "../css/style.scss";
</style>