describe('Managing Restaurants', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should allow managing restaurants', async () => {
    const restaurantName = 'Sushi Place';

    await confirmInitialRestaurantPresent('Burger Place');
    await createRestaurant(restaurantName);
    await createDish(restaurantName);
  });

  async function confirmInitialRestaurantPresent(restaurantName) {
    await expect(element(by.label(restaurantName))).toBeVisible();
  }

  async function createRestaurant(restaurantName) {
    await element(by.id('newRestaurantButton')).tap();
    await element(by.id('restaurantNameTextField')).typeText(restaurantName);
    await element(by.id('saveRestaurantButton')).tap();

    await expect(element(by.label(restaurantName))).toBeVisible();
    await expect(element(by.id('restaurantNameTextField'))).toBeNotVisible();
  }

  async function createDish(restaurantName) {
    const dishName = 'Volcano Roll';

    await element(by.label(restaurantName)).tap();

    await element(by.id('newDishButton')).tap();
    await element(by.id('dishNameTextField')).typeText(dishName);
    await element(by.id('saveDishButton')).tap();

    await expect(element(by.label(dishName))).toBeVisible();
    await expect(element(by.id('dishNameTextField'))).toBeNotVisible();

    // ensure dishes persist
    await element(
      by.traits(['button'])
        .withDescendant(by.label('Restaurants')),
    ).tap();
    await element(by.label(restaurantName)).tap();
    await expect(element(by.label(dishName))).toBeVisible();
  }
});
