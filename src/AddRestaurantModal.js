import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import {
  Button,
  FormLabel,
  FormInput,
  Text,
} from 'react-native-elements';

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
        <Text h3>Add Restaurant</Text>
        <FormLabel>Restaurant Name</FormLabel>
        <FormInput
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
