// import { render, screen, fireEvent } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/vue";
import { mount, flushPromises } from "@vue/test-utils";
import ProductList from "@/components/ProductList.vue";
import { products } from "./mockedData";

// bug with asynchronous queuing
const floodWithFlushPromises = async () => {
  for (let i = 0; i < 50; i++) {
    await flushPromises();
  }
};

describe("product-list", () => {
  it("render products correctly", async () => {
    expect.assertions(8);
    const wrapper = mount(ProductList, {
      global: {
        stubs: {
          HelloWorld: {
            template: "<span class='I am a stub' />",
          },
        },
      },
    });

    // console.log("VUe test utils wrapper: ", wrapper);

    expect(wrapper.text()).not.toContain("Loading");

    const button = wrapper.find("button");
    // const button = wrapper.get('[data-test-id="download-products-button"]');

    await button.trigger("click");

    expect(wrapper.text()).toContain("Loading");

    await floodWithFlushPromises();

    // expect(wrapper.text()).not.toContain("Loading");

    const allProducts = wrapper.findAll('[data-test-id="product"]');

    expect(allProducts).toHaveLength(products.length);

    const firstProduct = allProducts[0];
    const secondProduct = allProducts[1];
    await firstProduct.trigger("click");
    await secondProduct.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("selectedProduct");

    const selectedProductEvent = wrapper.emitted("selectedProduct");
    expect(selectedProductEvent).toHaveLength(2);

    expect((selectedProductEvent as unknown[])[0]).toEqual([products[0]]);
    expect((selectedProductEvent as unknown[])[1]).toEqual([products[1]]);

    const productTitle = products[0].title;

    expect(wrapper.text()).toContain(productTitle);
  });

  it("renders products correctly with testing-library", async () => {
    render(ProductList);

    // const wrapper = render(ProductList);
    // console.log("Testing library wrapper: ", wrapper);

    const productList = await screen.findByText("Download products");

    await fireEvent.click(productList);

    const productTitle = products[0].title;

    const value = await screen.findByText(productTitle);

    expect(value.innerHTML).toContain(productTitle);

    // Training --> please rewrite here the testing implementation from 16-62 lines using testing-library/vue API
  });

  it("matches snapshot", () => {
    const wrapper = mount(ProductList);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
