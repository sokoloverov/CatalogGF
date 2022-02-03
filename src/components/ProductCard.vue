<template>
  <div class="goods__window goods__window_ramka">
    <a class="goods__window goods__box_a" @click="changeShowProductCard">
      <div class="goods__window_position">
        <div
          class="goods__window_left"
          :class="chooseQuantity() > 1 ? width60 : width40"
        >
          <img
            class="goods__window_img"
            alt="Vue logo"
            :src="choosePicture()"
          />
        </div>
        <div
          class="goods__window_right"
          :class="chooseQuantity() > 1 ? width40 : width60"
        >
          <div class="goods__window_name">
            <span v-html="productCard.text"></span>
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
  data() {
    return {
      skuQuantity: 1,
      width60: "goods__window_width60",
      width40: "goods__window_width40",
    };
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
    chooseQuantity() {
      if (this.productCard.pictureMulti) {
        return (this.skuQuantity = 2);
      } else return (this.skuQuantity = 1);
    },
  },
};
</script>

<style lang="scss">
/*МОДАЛЬНОЕ ОКНО*/
.goods__window {
  position: fixed;
  top: 20%;
  left: 30%;
  width: 60%;
  height: 65%;
  display: flex;
}
.goods__window_position {
  display: flex;
  box-shadow: 8px 8px 12px 0px rgba(34, 60, 80, 0.2);
  border-radius: 0.5rem;
  padding: 0.5rem;
}
.goods__window_left {
  display: flex;
  align-items: center;
  justify-content: center;
}
.goods__window_img {
  display: flex;
  max-width: 80%;
  max-height: 100%;
  object-fit: cover;
  justify-content: space-around;
}
.goods__window_right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
}
.goods__window_width60 {
  width: 60%;
}
.goods__window_width40 {
  width: 40%;
}
.goods__window_name {
  font-size: 1.2rem;
  line-height: 1.2rem;
  padding: 1rem 0 0 0;
  text-align: left;
  font-weight: 600;
}

.goods__window_description {
  font-size: 0.8rem;
  line-height: 1.2rem;
  padding: 1rem 0;
  text-align: left;
}
/*РАМКА*/
.goods__window_ramka {
  //position: relative;
  z-index: 0;
  border-radius: 0.5rem;
  overflow: hidden;
}
.goods__window_ramka::before {
  content: "";
  position: absolute;
  z-index: -2;
  left: -50%;
  top: -150%;
  width: 200%;
  height: 400%;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-size: 50% 50%, 50% 50%;
  background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  // background-image: linear-gradient(#ffffff, #ffffff),
  //   linear-gradient(#333dd6, #333dd6), linear-gradient(#ffffff, #ffffff)
  background-image: linear-gradient(#ffffff, #2b559c),
    linear-gradient(#ffffff, #ffffff), linear-gradient(#ffffff, #ed302f);

  animation: anim-ramka 45s linear infinite;
}
.goods__window_ramka::after {
  content: "";
  position: absolute;
  z-index: -1;
  left: 6px;
  top: 6px;
  width: calc(100% - 12px);
  height: calc(100% - 12px);
  background: white;
  border-radius: 0.5rem;
}
@keyframes anim-ramka {
  50% {
    transform: rotate(360deg);
  }
  50% {
    transform: rotate(-360deg);
  }
}
</style>