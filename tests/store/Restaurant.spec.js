import Restaurant from '../../src/store/Restaurant';

describe('Restaurant', () => {
  describe('constructor', () => {
    it('initializes the name property', () => {
      const name = 'Sushi Place';
      const restaurant = new Restaurant(name);
      expect(restaurant.name).toEqual(name);
    });

    it('sets up an empty dishNames list', () => {
      const restaurant = new Restaurant();
      expect(restaurant.dishNames).toEqual([]);
    });
  });

  describe('addDish', () => {
    it('adds a new dish name to the dish names array', () => {
      const dish = 'Volcano Roll';
      const restaurant = new Restaurant();
      restaurant.addDish(dish);
      expect(restaurant.dishNames).toEqual([dish]);
    });
  });
});
