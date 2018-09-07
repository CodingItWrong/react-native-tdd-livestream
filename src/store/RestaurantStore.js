import { observable } from 'mobx';
import Restaurant from "./Restaurant";

export default class RestaurantStore {
  @observable restaurants = []

  addRestaurant(name) {
    const newRestaurant = new Restaurant(name);
    this.restaurants.push(newRestaurant);
  }
}
