import type { BECarResponse } from "./types";

class Car {
  private carMake!: BECarResponse["make"];
  private carYearOfProduction!: BECarResponse["year_of_production"];

  constructor(fields: BECarResponse) {
    ({ make: this.carMake, year_of_production: this.carYearOfProduction } =
      fields);
  }

  get make(): Car["carMake"] {
    return this.carMake;
  }

  get yearOfProduction(): Car["carYearOfProduction"] {
    return this.carYearOfProduction;
  }
}

export default Car;
