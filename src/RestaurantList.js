import React, { Component } from 'react';
import {
  Button,
  FlatList,
  Text,
  View,
} from 'react-native';
import AddRestaurantModal from './AddRestaurantModal';

export default class RestaurantList extends Component {
  state = {
    isAddModalVisible: false,
    restaurantNames: [],
  }

  showAddRestaurantModal = () => {
    this.setState({ isAddModalVisible: true });
  }

  handleAddRestaurant = (newRestaurantName) => {
    this.setState(({ restaurantNames }) => ({
      isAddModalVisible: false,
      restaurantNames: [newRestaurantName, ...restaurantNames],
    }));
  }

  render() {
    const { isAddModalVisible, restaurantNames } = this.state;
    return (
      <View>
        <Button
          title="New Restaurant"
          testID="newRestaurantButton"
          onPress={this.showAddRestaurantModal}
        />
        <AddRestaurantModal
          visible={isAddModalVisible}
          onSave={this.handleAddRestaurant}
        />
        <FlatList
          data={restaurantNames}
          keyExtractor={item => item}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </View>
    );
  }
};
