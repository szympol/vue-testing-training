import { describe, it, expect } from "vitest";

describe("Pass", () => {
  it("passes", () => {
    expect(2 + 2).toEqual(4);
  });
});

/*
import { describe, it, expect } from "vitest";
import Dealer from "../dealer";

// wrong implementation with real API calls to a server
describe("Dealer", () => {
  it("fetches data properly", async () => {
    expect.assertions(2);

    const dealer = new Dealer();

    await dealer.fetchCustomer();
    await dealer.fetchAvailableCars();

    expect(dealer.currentCustomer).toBeTruthy();
    expect(dealer.currentAvailableCars).toBeTruthy();
  });

  it("tells that a dealer can sell a car potentially", async () => {
    expect.assertions(1);

    const dealer = new Dealer();

    await dealer.fetchCustomer();
    await dealer.fetchAvailableCars();

    expect(dealer.isPotentialBuyer).toEqual(true);
  });

  it("disallows a dealer to sell a car when no customer is available", async () => {
    expect.assertions(1);

    const dealer = new Dealer();

    await dealer.fetchAvailableCars();

    expect(dealer.isPotentialBuyer).toEqual(false);
  });
});
*/

/*
import { describe, it, expect, vi, beforeEach } from "vitest";
import Dealer from "../dealer";
import Driver from "../driver";
import { driverCredentialsBEResponse } from "../mockData";

// correct implementation with mocked API calls responses
describe("Correct Dealer Unit tests", () => {
  let dealer!: Dealer;

  const mockDataCustomer = new Driver(driverCredentialsBEResponse);

  beforeEach(() => {
    vi.spyOn(Dealer.prototype, "fetchCustomer").mockImplementation(() =>
      Promise.resolve(mockDataCustomer)
    );

    dealer = new Dealer();
  });

  // afterEach(() => {
  // vi.restoreAllMocks();
  // });

  it("fetches customer", async () => {
    expect.assertions(3);
    await dealer.fetchCustomer();
    expect(dealer.fetchCustomer).toBeCalled();

    await dealer.fetchCustomer();
    await dealer.fetchCustomer();
    expect(dealer.fetchCustomer).toHaveBeenCalledTimes(3);

    const data = await dealer.fetchCustomer();

    expect(data).toEqual(mockDataCustomer);
  });

  it("assigns a customer", async () => {
    expect.assertions(2);

    const data = await dealer.fetchCustomer();
    expect(dealer.fetchCustomer).toHaveBeenCalledTimes(1);

    dealer.updateCustomer = data;

    expect(dealer.currentCustomer).toEqual(mockDataCustomer);
  });

  // Training section --> please implement the below tests

  // it("fetches cars")
  // it("assigns cars")

  // it("indicates if the dealer can sell a car potentially")
});

*/
