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
import { observer } from 'mobx-react';

@observer
export default class DishList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('restaurant').name,
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      isAddModalVisible: false,
    };
  }

  showAddDishModal = () => {
    this.setState({ isAddModalVisible: true });
  }

  handleAddDish = (newDishName) => {
    const restaurant = this.props.navigation.getParam('restaurant');

    restaurant.addDish(newDishName);

    this.setState({
      isAddModalVisible: false,
    });
  }

  render() {
    const { isAddModalVisible } = this.state;
    const { dishNames } = this.props.navigation.getParam('restaurant');
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
            data={dishNames.slice()}
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
