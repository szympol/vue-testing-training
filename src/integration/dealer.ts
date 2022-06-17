import Driver from "./driver";
import Car from "./car";
import {
  driverCredentialsBEResponse,
  car1BEResponse,
  car2BEResponse,
} from "./mockData";

type TCustomer = Driver;

const LATENCY = 1000;

class CarDealer {
  private customer!: TCustomer;
  private availableCars!: Car[];

  fetchCustomer(): Promise<TCustomer> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.customer = new Driver(driverCredentialsBEResponse); // separation of concern, fetch should not update the customer data
        resolve(this.customer);
      }, LATENCY);
    });
  }

  fetchAvailableCars(): Promise<Car[]> {
    // this method should be mocked in test suites. No calls to a real server in unit tests are allowed.
    return new Promise((resolve) => {
      setTimeout(() => {
        this.availableCars = [new Car(car1BEResponse), new Car(car2BEResponse)];
        resolve(this.availableCars);
      }, LATENCY);
    });
  }

  get currentCustomer(): CarDealer["customer"] {
    return this.customer;
  }

  updateCustomer(): void {
    this.customer = new Driver(driverCredentialsBEResponse);
  }

  get currentAvailableCars(): CarDealer["availableCars"] {
    return this.availableCars;
  }

  get isPotentialBuyer(): boolean {
    if (!this.customer) {
      return false;
    }

    const availableCarMakes = new Set(
      this.availableCars.map((car) => car.make)
    );

    return availableCarMakes.has(this.customer.carMakePreference);
  }
}

export default CarDealer;

/*
import Driver from "./driver";
import Car from "./car";
import {
  driverCredentialsBEResponse,
  car1BEResponse,
  car2BEResponse,
} from "./mockData";

type TCustomer = Driver;

const LATENCY = 1000;

class CarDealer {
  private customer!: TCustomer;
  private availableCars!: Car[];

  get currentCustomer(): CarDealer["customer"] {
    return this.customer;
  }

  get currentAvailableCars(): CarDealer["availableCars"] {
    return this.availableCars;
  }

  get isPotentialBuyer(): boolean {
    if (!this.customer) {
      return false;
    }

    const availableCarMakes = new Set(
      this.availableCars.map((car) => car.make)
    );

    return availableCarMakes.has(this.customer.carMakePreference);
  }

  set updateCustomer(customer: CarDealer["customer"]) {
    this.customer = customer;
  }

  set updateCurrentAvailableCars(cars: CarDealer["availableCars"]) {
    this.availableCars = cars;
  }

  fetchCustomer(): Promise<CarDealer["customer"]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(new Driver(driverCredentialsBEResponse));
      }, LATENCY);
    });
  }

  fetchAvailableCars(): Promise<CarDealer["availableCars"]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([new Car(car1BEResponse), new Car(car2BEResponse)]);
      }, LATENCY);
    });
  }
}

export default CarDealer;
*/
