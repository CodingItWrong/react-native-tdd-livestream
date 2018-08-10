import React from 'react';
import { shallow } from 'enzyme';
import AddRestaurantModal from '../../src/AddRestaurantModal';

describe('AddRestaurantModal', () => {
  function testID(id) {
    return cmp => cmp.props().testID === id;
  }

  describe('upon submit', () => {
    const messageText = 'Hello, world!';
    let handleSave;
    let wrapper;

    beforeEach(() => {
      handleSave = jest.fn();
      wrapper = shallow(
        <AddRestaurantModal
          visible={true}
          onSave={handleSave}
        />,
      );

      wrapper.findWhere(testID('restaurantNameTextField'))
        .simulate('changeText', messageText);
      wrapper.findWhere(testID('saveRestaurantButton'))
        .simulate('press');
    });

    it('clears the text field', () => {
      expect(wrapper.findWhere(
        testID('restaurantNameTextField'),
      ).props().value).toEqual('');
    });

    it('calls the onSave handler with the entered text', () => {
      expect(handleSave).toHaveBeenCalledWith(messageText);
    });
  });
});
