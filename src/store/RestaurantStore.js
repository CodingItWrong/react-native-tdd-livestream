import { observable } from 'mobx';
import Restaurant from "./Restaurant";

export default class RestaurantStore {
  @observable restaurants = []

  constructor(api) {
    this.api = api;
  }

  async loadAll() {
    const response = await this.api.get('/restaurants');
    const restaurantsJson = response.data.data;
    this.restaurants = restaurantsJson.map(restaurantJson => (
      new Restaurant(restaurantJson.attributes.name)
    ));
  }

  addRestaurant(name) {
    const newRestaurant = new Restaurant(name);
    this.restaurants.push(newRestaurant);
  }
}
