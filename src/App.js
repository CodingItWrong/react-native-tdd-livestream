import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import RestaurantList from './RestaurantList';
import DishList from './DishList';

const RootStack = createStackNavigator({
  RestaurantList: {
    screen: RestaurantList,
  },
  DishList: {
    screen: DishList,
  },
});

export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}
