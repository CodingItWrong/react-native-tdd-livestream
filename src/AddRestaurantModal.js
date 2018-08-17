import React, { Component } from 'react';
import {
  Modal,
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

    this.setState({ restaurantName: '' });

    onSave(restaurantName);
  }

  handlePressCancelButton = () => {
    const { onCancel } = this.props;
    this.setState({ restaurantName: '' });
    onCancel();
  }

  render() {
    const { visible } = this.props;
    const { restaurantName } = this.state;

    return (
      <Modal
        visible={visible}
        animationType='slide'
      >
        <Text h3 style={{ margin: 20 }}>
          Add Restaurant
        </Text>
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
        <Button
          testID="cancelAddRestaurantButton"
          title="Cancel"
          onPress={this.handlePressCancelButton}
        />
      </Modal>
    );
  }
};
