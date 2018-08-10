import React from 'react';
import { shallow } from 'enzyme';
import AddRestaurantModal from '../../src/AddRestaurantModal';

describe('AddRestaurantModal', () => {
  function testID(id) {
    return cmp => cmp.props().testID === id;
  }

  it('clears the text field when submitted', () => {
    const messageText = 'Hello, world!';

    const handleSave = jest.fn();
    const wrapper = shallow(
      <AddRestaurantModal
        visible={true}
        onSave={handleSave}
      />,
    );

    wrapper.findWhere(testID('restaurantNameTextField'))
      .simulate('changeText', messageText);
    wrapper.findWhere(testID('saveRestaurantButton'))
      .simulate('press');

    expect(wrapper.findWhere(
      testID('restaurantNameTextField'),
    ).props().value).toEqual('');
  });

  it('calls the onSave handler with the entered text', () => {
    const messageText = 'Hello, world!';

    const handleSave = jest.fn();
    const wrapper = shallow(
      <AddRestaurantModal
        visible={true}
        onSave={handleSave}
      />,
    );

    wrapper.findWhere(testID('restaurantNameTextField'))
      .simulate('changeText', messageText);
    wrapper.findWhere(testID('saveRestaurantButton'))
      .simulate('press');

    expect(handleSave).toHaveBeenCalledWith(messageText);
  });
});
