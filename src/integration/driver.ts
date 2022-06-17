import type { BEDriverResponse } from "./types";

class Driver {
  private driverName!: BEDriverResponse["name"];
  private driverAge!: BEDriverResponse["age"];
  private driverCarMakePreference!: BEDriverResponse["car_make_preference"];

  constructor(fields: BEDriverResponse) {
    ({
      name: this.driverName,
      age: this.driverAge,
      car_make_preference: this.driverCarMakePreference,
    } = fields);
  }

  get name(): Driver["driverName"] {
    return this.driverName;
  }

  get age(): Driver["driverAge"] {
    return this.driverAge;
  }

  get carMakePreference(): Driver["driverCarMakePreference"] {
    return this.driverCarMakePreference;
  }
}

export default Driver;
