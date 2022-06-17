import { ref } from "vue";

export interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  count: number;
  rate: number;
  title: string;
}

const url = import.meta.env.VITE_API_URL_PRODUCTS;

const useFetchProducts = () => {
  const products = ref<IProduct[]>([]);
  const error = ref(false);
  const loading = ref(false);

  async function getProductList() {
    try {
      loading.value = true;

      const data = await fetch(url);

      products.value = await data.json();
      loading.value = false;

      return products.value;
    } catch (err) {
      console.error(err);
      error.value = true;
      loading.value = false;
    }
  }

  return {
    get: getProductList,
    results: products,
    error,
    loading,
  };
};

export default useFetchProducts;
