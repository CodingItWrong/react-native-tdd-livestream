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
  dishName: '',
  dishNameErrorMessage: null,
};

export default class AddDishModal extends Component {
  state = initialState;

  handleChangeText = (dishName) => {
    this.setState({
      dishName,
      dishNameErrorMessage: null,
    });
  }

  handlePressSaveButton = () => {
    const { onSave } = this.props;
    const { dishName } = this.state;

    if (dishName === '') {
      this.setState({
        dishNameErrorMessage: 'Required',
      });
      return;
    }

    this.setState(initialState);

    onSave(dishName);
  }

  handlePressCancelButton = () => {
    const { onCancel } = this.props;
    this.setState(initialState);
    onCancel();
  }

  render() {
    const { visible } = this.props;
    const { dishName, dishNameErrorMessage } = this.state;

    return (
      <Modal
        visible={visible}
        animationType='slide'
      >
        <Text h3 style={{ margin: 20 }}>
          Add Dish
        </Text>
        <FormLabel>Dish Name</FormLabel>
        <FormInput
          testID="dishNameTextField"
          value={dishName}
          onChangeText={this.handleChangeText}
          autoFocus={true}
        />
        <FormValidationMessage
          testID="dishNameErrorMessage"
        >
          {dishNameErrorMessage}
        </FormValidationMessage>
        <Button
          testID="saveDishButton"
          title="Save Dish"
          onPress={this.handlePressSaveButton}
        />
        <Button
          testID="cancelAddDishButton"
          title="Cancel"
          onPress={this.handlePressCancelButton}
        />
      </Modal>
    );
  }
}
