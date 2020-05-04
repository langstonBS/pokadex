import React from 'react';
import { shallow } from 'enzyme';
import DetailPage from './PokemonDetail'


describe('First React component test with Enzyme', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<DetailPage />);
      expect(wrapper).toMatchSnapshot()
     });
 });
 