import React from 'react';
import { shallow } from 'enzyme';
import SearchPage from './SearchPage';






  describe('First React component test with Enzyme', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<SearchPage />);
      expect(wrapper).toMatchSnapshot()
     });
  });