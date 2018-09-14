import React, { Component } from 'react';
import {
  FlatList,
  View,
} from 'react-native';
import {
  Button,
  List,
  ListItem,
} from 'react-native-elements';
import { observer, inject } from 'mobx-react';
import AddRestaurantModal from './AddRestaurantModal';

@inject('restaurantStore') @observer
export default class RestaurantList extends Component {
  static navigationOptions = {
    title: 'Restaurants',
  }

  state = {
    isAddModalVisible: false,
  }

  showAddRestaurantModal = () => {
    this.setState({ isAddModalVisible: true });
  }

  handleAddRestaurant = (newRestaurantName) => {
    const { restaurantStore } = this.props;

    restaurantStore.addRestaurant(newRestaurantName);

    this.setState({
      isAddModalVisible: false,
    });
  }

  handleCancelAddRestaurant = () => {
    this.setState({
      isAddModalVisible: false,
    });
  }

  handleChooseRestaurant = (restaurant) => {
    const { navigation } = this.props;

    navigation.navigate('DishList', { restaurant });
  }

  render() {
    const { restaurants } = this.props.restaurantStore;
    const { isAddModalVisible } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Button
          title="New Restaurant"
          testID="newRestaurantButton"
          onPress={this.showAddRestaurantModal}
        />
        <AddRestaurantModal
          visible={isAddModalVisible}
          onSave={this.handleAddRestaurant}
          onCancel={this.handleCancelAddRestaurant}
        />
        <List containerStyle={{ flex: 1 }}>
          <FlatList
            data={restaurants.slice()}
            keyExtractor={item => item.name}
            renderItem={({ item: restaurant }) => (
              <ListItem
                title={restaurant.name}
                onPress={() => this.handleChooseRestaurant(restaurant)}
              />
            )}
          />
        </List>
      </View>
    );
  }
};
