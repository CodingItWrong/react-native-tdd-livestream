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
import AddDishModal from './AddDishModal';

export default class DishList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('restaurant').name,
    };
  };

  constructor(props) {
    super(props);

    const { navigation } = this.props;
    const { dishNames } = navigation.getParam('restaurant');

    this.state = {
      isAddModalVisible: false,
      dishNames,
    };
  }

  showAddDishModal = () => {
    this.setState({ isAddModalVisible: true });
  }

  handleAddDish = (newDishName) => {
    this.setState(({ dishNames }) => ({
      isAddModalVisible: false,
      dishNames: [newDishName, ...dishNames],
    }));
  }

  render() {
    const { isAddModalVisible, dishNames } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Button
          title="New Dish"
          testID="newDishButton"
          onPress={this.showAddDishModal}
        />
        <AddDishModal
          visible={isAddModalVisible}
          onSave={this.handleAddDish}
        />
        <List containerStyle={{ flex: 1 }}>
          <FlatList
            data={dishNames}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <ListItem
                title={item}
              />
            )}
          />
        </List>
      </View>
    );
  }
}
