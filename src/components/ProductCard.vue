<template>
  <div class="goods__window">
    <a class="goods__window goods__box_a" @click="changeShowProductCard">
      <div class="goods__window_position">
        <div class="goods__window_left">
          <img
            class="goods__window_img"
            alt="Vue logo"
            :src="choosePicture()"
          />
        </div>
        <div class="goods__window_right">
          <div class="goods__window_name">
            {{ productCard.text }}
          </div>
          <div
            class="goods__window_description"
            v-html="productCard.description"
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
  },
  methods: {
    changeShowProductCard() {
      this.$emit("closeWindow", false);
    },
    choosePicture() {
      if (this.productCard.pictureMulti) {
        return this.productCard.pictureMulti;
      } else return this.productCard.picture;
    },
  },
};
</script>

<style lang="scss">
@import "../css/style.scss";
</style>