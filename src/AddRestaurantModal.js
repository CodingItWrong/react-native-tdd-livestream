import React, { Component } from 'react';
import {
  Modal,
} from 'react-native';
import {
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage,
  Text,
} from 'react-native-elements';

const initialState = {
  restaurantName: '',
  restaurantNameErrorMessage: null,
};

export default class AddRestaurantModal extends Component {
  state = initialState;

  handleChangeText = (restaurantName) => {
    this.setState({
      restaurantName,
      restaurantNameErrorMessage: null,
    });
  }

  handlePressSaveButton = () => {
    const { onSave } = this.props;
    const { restaurantName } = this.state;

    if (restaurantName === '') {
      this.setState({
        restaurantNameErrorMessage: 'Required',
      });
      return;
    }

    this.setState(initialState);

    onSave(restaurantName);
  }

  handlePressCancelButton = () => {
    const { onCancel } = this.props;
    this.setState(initialState);
    onCancel();
  }

  render() {
    const { visible } = this.props;
    const { restaurantName, restaurantNameErrorMessage } = this.state;

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
          autoFocus={true}
        />
        <FormValidationMessage
          testID="restaurantNameErrorMessage"
        >
          {restaurantNameErrorMessage}
        </FormValidationMessage>
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
