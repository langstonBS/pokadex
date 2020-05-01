// import React from 'react';
// import { render } from '@testing-library/react';
import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchPage from './SearchPage'
import DetailPage from  './PokemonDetail'

describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {
     const wrapper = shallow(<App />);
     expect(wrapper).toMatchSnapshot()
    });
});

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<SearchPage />);
    expect(wrapper).toMatchSnapshot()
   });
});


  it('renders without crashing', () => {
    const wrapper = shallow(<DetailPage />);
    expect(wrapper).toMatchSnapshot()
   });

