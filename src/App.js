import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import RestaurantList from './RestaurantList';

export default class App extends Component {
  render() {
    return (
      <View>
        <RestaurantList />
      </View>
    );
  }
}
