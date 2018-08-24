import React from 'react';
import { shallow } from 'enzyme';
import {
  FormValidationMessage,
} from 'react-native-elements';
import AddRestaurantModal from '../../src/AddRestaurantModal';

describe('AddRestaurantModal', () => {
  function testID(id) {
    return cmp => cmp.props().testID === id;
  }

  describe('upon typing', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <AddRestaurantModal
          visible={true}
        />,
      );

      wrapper.findWhere(testID('saveRestaurantButton'))
        .simulate('press');
      wrapper.findWhere(testID('restaurantNameTextField'))
        .simulate('changeText', 'Hello wo');
    });

    it('clears validation errors', () => {
      expect(wrapper.contains(
        <FormValidationMessage
          testID="restaurantNameErrorMessage"
        >Required</FormValidationMessage>,
      )).toEqual(false);
    });
  });

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

      wrapper.findWhere(testID('saveRestaurantButton'))
        .simulate('press');
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

    it('clears validation errors', () => {
      expect(wrapper.contains(
        <FormValidationMessage
          testID="restaurantNameErrorMessage"
        >Required</FormValidationMessage>,
      )).toEqual(false);
    });

    it('calls the onSave handler with the entered text', () => {
      expect(handleSave).toHaveBeenCalledWith(messageText);
    });
  });

  describe('upon submit with invalid data', () => {
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

      wrapper.findWhere(testID('saveRestaurantButton'))
        .simulate('press');
    });

    it('displays a validation error', () => {
      expect(wrapper.contains(
        <FormValidationMessage
          testID="restaurantNameErrorMessage"
        >Required</FormValidationMessage>,
      )).toEqual(true);
    });

    it('does not call the onSave handler', () => {
      expect(handleSave).not.toHaveBeenCalled();
    });
  });

  describe('upon cancellation', () => {
    let handleCancel;
    let wrapper;

    beforeEach(() => {
      handleCancel = jest.fn();
      wrapper = shallow(
        <AddRestaurantModal
          visible={true}
          onCancel={handleCancel}
        />,
      );

      wrapper.findWhere(testID('saveRestaurantButton'))
        .simulate('press');
      wrapper.findWhere(testID('restaurantNameTextField'))
        .simulate('changeText', 'Hello, world!');
      wrapper.findWhere(testID('cancelAddRestaurantButton'))
        .simulate('press');
    });

    it('clears the text field', () => {
      expect(wrapper.findWhere(
        testID('restaurantNameTextField'),
      ).props().value).toEqual('');
    });

    it('clears validation errors', () => {
      expect(wrapper.contains(
        <FormValidationMessage
          testID="restaurantNameErrorMessage"
        >Required</FormValidationMessage>,
      )).toEqual(false);
    });

    it('calls the onCancel handler', () => {
      expect(handleCancel).toHaveBeenCalled();
    });
  });
});
