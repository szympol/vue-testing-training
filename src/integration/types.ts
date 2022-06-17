export enum CarMakesEnum {
  "Ford" = "ford",
  "BMW" = "bwm",
  "Fiat" = "fiat",
}

export interface BECarResponse {
  make: CarMakesEnum;
  year_of_production: number;
}

export interface BEDriverResponse {
  name: string;
  age: number;
  car_make_preference: CarMakesEnum;
}
