import React from 'react';
import { shallow } from 'enzyme';
import {
  FormValidationMessage,
} from 'react-native-elements';
import AddDishModal from '../../src/AddDishModal';

describe('AddDishModal', () => {
  function testID(id) {
    return cmp => cmp.props().testID === id;
  }

  describe('upon typing', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <AddDishModal
          visible={true}
        />,
      );

      wrapper.findWhere(testID('saveDishButton'))
        .simulate('press');
      wrapper.findWhere(testID('dishNameTextField'))
        .simulate('changeText', 'Hello wo');
    });

    it('clears validation errors', () => {
      expect(wrapper.contains(
        <FormValidationMessage
          testID="dishNameErrorMessage"
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
        <AddDishModal
          visible={true}
          onSave={handleSave}
        />,
      );

      wrapper.findWhere(testID('saveDishButton'))
        .simulate('press');
      wrapper.findWhere(testID('dishNameTextField'))
        .simulate('changeText', messageText);
      wrapper.findWhere(testID('saveDishButton'))
        .simulate('press');
    });

    it('clears the text field', () => {
      expect(wrapper.findWhere(
        testID('dishNameTextField'),
      ).props().value).toEqual('');
    });

    it('clears validation errors', () => {
      expect(wrapper.contains(
        <FormValidationMessage
          testID="dishNameErrorMessage"
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
        <AddDishModal
          visible={true}
          onSave={handleSave}
        />,
      );

      wrapper.findWhere(testID('saveDishButton'))
        .simulate('press');
    });

    it('displays a validation error', () => {
      expect(wrapper.contains(
        <FormValidationMessage
          testID="dishNameErrorMessage"
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
        <AddDishModal
          visible={true}
          onCancel={handleCancel}
        />,
      );

      wrapper.findWhere(testID('saveDishButton'))
        .simulate('press');
      wrapper.findWhere(testID('dishNameTextField'))
        .simulate('changeText', 'Hello, world!');
      wrapper.findWhere(testID('cancelAddDishButton'))
        .simulate('press');
    });

    it('clears the text field', () => {
      expect(wrapper.findWhere(
        testID('dishNameTextField'),
      ).props().value).toEqual('');
    });

    it('clears validation errors', () => {
      expect(wrapper.contains(
        <FormValidationMessage
          testID="dishNameErrorMessage"
        >Required</FormValidationMessage>,
      )).toEqual(false);
    });

    it('calls the onCancel handler', () => {
      expect(handleCancel).toHaveBeenCalled();
    });
  });
});
