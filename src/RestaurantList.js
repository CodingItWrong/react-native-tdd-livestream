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
import AddRestaurantModal from './AddRestaurantModal';

export default class RestaurantList extends Component {
  static navigationOptions = {
    title: 'Restaurants',
  }

  state = {
    isAddModalVisible: false,
    restaurants: [],
  }

  showAddRestaurantModal = () => {
    this.setState({ isAddModalVisible: true });
  }

  handleAddRestaurant = (newRestaurantName) => {
    const newRestaurant = {
      name: newRestaurantName,
      dishNames: [],
    };
    this.setState(({ restaurants }) => ({
      isAddModalVisible: false,
      restaurants: [newRestaurant, ...restaurants],
    }));
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
    const { isAddModalVisible, restaurants } = this.state;
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
            data={restaurants}
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
