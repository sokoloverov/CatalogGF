<template>
  <div class="goods__box">
    <div class="goods__box_sku" v-for="product in sku" :key="product.picture">
      <a class="goods__box_a" @click="modalView(product.id)">
        <img class="goods__box_img" alt="Vue logo" :src="product.picture" />
        <p class="goods__box_name">{{ product.text }}</p>
      </a>
    </div>
    <product-card
      v-if="showProductCard"
      :productCard="sku"
      :idCard="id"
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
      id: 0,
      showProductCard: false,
    };
  },
  methods: {
    modalView(product) {
      this.id = product;
      this.showProductCard = true;
    },
    closeWindow(data) {
      this.showProductCard = data;
    },
  },
};
</script>

<style lang="scss">
@import "../css/style.scss";
</style>