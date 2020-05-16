import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

/**
 * Factory function to create a ShallowWrapper for the Input component
 * @function setup
 * @param {object} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  // enzyme dive() method is to return the child component of the shallow wrapper. 
  // as we have store for Input, so the shallow retunrs a ContextProvider with Input as its child component
  // the second dive() will fetch the child component of Input
  const wrapper = shallow(<Input store={store}/>).dive().dive();
  return wrapper;
  // console.log(wrapper.debug())
}

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {success: false};
      wrapper = setup(initialState)
    });
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  })
  describe('word has been guessed', () => {
    test('renders component without error', () => {

    });
    test('does not render input box', () => {

    });
    test('does not render submit button', () => {

    });
  })
});
describe('update state', () => {

});