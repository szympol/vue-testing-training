<script setup lang="ts">
import ProductList from "@/components/ProductList.vue";
import type { IProduct } from "@/services/fetchProducts";

const selectProduct = (product: IProduct) => {
  console.log(product);
};
</script>

<template>
  <ProductList @selectedProduct="selectProduct" />
</template>
