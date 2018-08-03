import React, { Component } from 'react';
import {
  Button,
  TextInput,
  View,
} from 'react-native';

export default class AddRestaurantModal extends Component {
  state = {
    restaurantName: '',
  }

  handleChangeText = (restaurantName) => {
    this.setState({ restaurantName });
  }

  handlePressSaveButton = () => {
    const { onSave } = this.props;
    const { restaurantName } = this.state;

    onSave(restaurantName);
  }

  render() {
    const { visible } = this.props;
    const { restaurantName } = this.state;

    if (!visible) {
      return null;
    }

    return (
      <View>
        <TextInput
          testID="restaurantNameTextField"
          value={restaurantName}
          onChangeText={this.handleChangeText}
        />
        <Button
          testID="saveRestaurantButton"
          title="Save Restaurant"
          onPress={this.handlePressSaveButton}
        />
      </View>
    );
  }
};
