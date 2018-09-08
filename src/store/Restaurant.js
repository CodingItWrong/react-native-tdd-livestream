export default class Restaurant {
  dishNames = [];

  constructor(name) {
    this.name = name;
  }

  addDish(name) {
    this.dishNames.push(name);
  }
}
