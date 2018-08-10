import React, { Component } from 'react';
import {
  FlatList,
  View,
} from 'react-native';
import {
  Button,
  List,
  ListItem,
  Text,
} from 'react-native-elements';
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
        <Text h2>Restaurants</Text>
        <Button
          title="New Restaurant"
          testID="newRestaurantButton"
          onPress={this.showAddRestaurantModal}
        />
        <AddRestaurantModal
          visible={isAddModalVisible}
          onSave={this.handleAddRestaurant}
        />
        <List>
          <FlatList
            data={restaurantNames}
            keyExtractor={item => item}
            renderItem={({ item }) => <ListItem title={item} />}
          />
        </List>
      </View>
    );
  }
};
