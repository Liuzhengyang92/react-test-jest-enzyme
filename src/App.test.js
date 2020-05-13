import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
  const wrapper = shallow(<App />);
  //component-app means the component name is App, if the name of component is Big App, then use component-big-app
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});
test('renders increment button', () => {

});
test('renders counter display', () => {

});
test('counter starts at 0', () => {

});
test('clicking button increments counter display', () => {

});
