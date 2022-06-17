import type { BEDriverResponse, BECarResponse } from "./types";
import { CarMakesEnum } from "./types";

export const driverCredentialsBEResponse: BEDriverResponse = {
  name: "Adam",
  age: 26,
  car_make_preference: CarMakesEnum.BMW,
};

export const car1BEResponse: BECarResponse = {
  make: CarMakesEnum.BMW,
  year_of_production: 2014,
};

export const car2BEResponse: BECarResponse = {
  make: CarMakesEnum.Ford,
  year_of_production: 1999,
};
