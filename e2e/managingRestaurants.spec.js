describe('Managing Restaurants', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should allow managing restaurants', async () => {
    await createRestaurant();
  });

  async function createRestaurant() {
    const restaurantName = 'Sushi Place';

    await element(by.id('newRestaurantButton')).tap();
    await element(by.id('restaurantNameTextField')).typeText(restaurantName);
    await element(by.id('saveRestaurantButton')).tap();

    await expect(element(by.label(restaurantName))).toBeVisible();
    await expect(element(by.id('restaurantNameTextField'))).toBeNotVisible();
  }
});
