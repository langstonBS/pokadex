import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16'



it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <p>Edit <code>src/App.js</code> and save to reload.</p>;
  const containsWelcome = wrapper.contains(welcome)
  expect(containsWelcome).toEqual(true);
});