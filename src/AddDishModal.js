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

const initialState = {
  dishName: '',
};

export default class AddDishModal extends Component {
  state = initialState;

  handleChangeText = (dishName) => {
    this.setState({
      dishName,
    });
  }

  handlePressSaveButton = () => {
    const { onSave } = this.props;
    const { dishName } = this.state;

    onSave(dishName);
  }

  render() {
    const { visible } = this.props;
    const { dishName } = this.state;

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
        <Button
          testID="saveDishButton"
          title="Save Dish"
          onPress={this.handlePressSaveButton}
        />
      </Modal>
    );
  }
}
