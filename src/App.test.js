// import React from 'react';
// import { render } from '@testing-library/react';
import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import RenderPokemon from './RenderPokemon';
import Adapter from 'enzyme-adapter-react-16';
import SearchPage from './SearchPage'
import DetailPage from  './PokemonDetail'

describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(<App />);
    });
});

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<SearchPage />);
   });
});


describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<DetailPage />);
   });
});

// describe('First React component test with Enzyme', () => {
//   it('renders without crashing', () => {
//      shallow(<RenderPokemon />);
//    });
// });