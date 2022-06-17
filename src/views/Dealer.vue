<script setup lang="ts">
import CarDealer from "../integration/dealer";
import { ref } from "vue";

const isPotentialBuyer = ref(false);

const carDealer = new CarDealer();
Promise.all([carDealer.fetchCustomer(), carDealer.fetchAvailableCars()]).then(
  () => {
    isPotentialBuyer.value = carDealer.isPotentialBuyer;
  }
);
</script>

<template>
  <div class="dealer">
    The dealer {{ isPotentialBuyer ? "can" : "cannot" }} sell a car
  </div>
</template>

<style>
.dealer {
  margin-top: 50px;
  text-align: center;
  font-size: 32px;
}
@media (min-width: 1024px) {
  .dealer {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
