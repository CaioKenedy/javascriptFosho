const person = new Object({
  name: "Caio",
  age: 26,
});

const car = {
  wheels: 4,
  init(value) {
    this.brand = value;
    return this;
  },
  year: 2020,
  speed() {
    return this.brand + " speed up";
  },
  honk() {
    return this.brand + " honk";
  },
};

const camaro = Object.create(car);
camaro.init("Camaro");

const ferrari = Object.create(car).init("Ferrari");

const autoFunction = {
  speedUp() {
    return "speed up";
  },
  honk() {
    return "honk";
  },
};

const bike = {
  wheels: 2,
  helmet: true,
};

const auto = {
  wheels: 4,
  trunk: true,
};

Object.assign(bike, autoFunction);

// Object.defineProperties(bike, {
//   tankCapacity: {
//     value: 30,
//     enumerable: false,
//   },
// });

Object.defineProperties(bike, {
  tankCapacity: {
    get() {
      return this.capacity;
    },
    set(valor) {
      return (this.capacity = valor * 4 + " L");
    },
  },
});

Object.getOwnPropertyDescriptors(Array);
Object.getOwnPropertyDescriptors(Array.prototype);
Object.getOwnPropertyDescriptor(window, "innerHeight");
Object.getOwnPropertyNames(Array);

const fruit = ["Banana"];

Object.getPrototypeOf(fruit);

Object.prototype.toString.call(); // verifica o tipo de dado
