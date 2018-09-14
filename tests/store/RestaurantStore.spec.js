import RestaurantStore from '../../src/store/RestaurantStore';

describe('RestaurantStore', () => {
  describe('constructor', () => {
    it('sets up an empty restaurants list', () => {
      const store = new RestaurantStore();
      expect(store.restaurants).toEqual([]);
    });
  });

  describe('loadAll', () => {
    it('loads restaurants from the API', async () => {
      const api = {
        get() {
          return Promise.resolve({
            data: {
              data: [
                {
                  attributes: {
                    name: 'Burger Place',
                  },
                },
              ],
            },
          });
        },
      };
      const store = new RestaurantStore(api);

      await store.loadAll();

      expect(store.restaurants.length).toEqual(1);
      const restaurant = store.restaurants[0];
      expect(restaurant.name).toEqual('Burger Place');
    });
  });

  describe('addRestaurant', () => {
    it('adds a new Restaurant instance to the restaurant list', () => {
      const name = 'Sushi Place';
      const store = new RestaurantStore();
      store.addRestaurant(name);

      expect(store.restaurants.length).toEqual(1);
      const restaurant = store.restaurants[0];
      expect(restaurant.name).toEqual(name);
      expect(restaurant.dishNames).toEqual([]);
    });
  });
});
