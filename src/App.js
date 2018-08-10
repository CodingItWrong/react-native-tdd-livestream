import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import RestaurantList from './RestaurantList';

const RootStack = createStackNavigator({
  Home: {
    screen: RestaurantList,
  },
});

export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}
