import { beforeAll, afterEach, afterAll } from "vitest";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { products } from "./components/__tests__/mockedData";
import "whatwg-fetch";

const url = import.meta.env.VITE_API_URL_PRODUCTS;

export const restHandlers = [
  rest.get(url, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products));
  }),
];
const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
