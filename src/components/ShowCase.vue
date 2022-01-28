<template>
  <div>
    <transition name="fade" mode="out-in" appear>
      <div class="goods__box">
        <div
          class="goods__box_sku"
          v-for="product in sku"
          :key="product.picture"
        >
          <a class="goods__box_a" @click="modalView(product)">
            <img class="goods__box_img" alt="Vue logo" :src="product.picture" />
            <p class="goods__box_name"><span v-html="product.text"></span></p>
          </a>
        </div>
      </div>
    </transition>
    <product-card
      v-if="showProductCard"
      :productCard="productInWindow"
      @closeWindow="closeWindow"
    />
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "ShowCase",
  components: {
    ProductCard,
  },
  props: {
    sku: [],
  },
  data() {
    return {
      productInWindow: [],
      showProductCard: false,
    };
  },
  methods: {
    modalView(product) {
      this.productInWindow = product;
      this.showProductCard = true;
    },
    closeWindow(data) {
      this.showProductCard = data;
    },
  },
};
</script>

<style lang="scss">
//@import "../css/style.scss";
/*ВИТРИНА ТОВАРОВ*/
.goods__box {
  position: relative;
  width: 70%;
  margin-left: 25%;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  text-decoration-line: none;
  overflow-y: hidden;
}
.goods__box_sku {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.4rem 0.5rem 0;
  min-width: 175px;
  max-width: 15%;
}
.goods__box_img {
  max-width: 100%;
  max-height: 15rem;
  object-fit: cover;
}
.goods__box_name {
  font-size: 0.6rem;
  line-height: 0.8rem;
  padding: 0 1rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>