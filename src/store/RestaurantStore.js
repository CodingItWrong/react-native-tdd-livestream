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

  async addRestaurant(name) {
    try {
      const newRestaurant = new Restaurant(name);
      await this.api.post('/restaurants', {
        data: {
          type: 'restaurants',
          attributes: { name },
        },
      });
      this.restaurants.push(newRestaurant);
    } catch (e) {
      console.error(JSON.stringify(e));
      throw e;
    }
  }
}
