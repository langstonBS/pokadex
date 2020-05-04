import React from 'react';
import { shallow } from 'enzyme';
import SerchQurryPage from  './SerchQurryPage'



describe('First React component test with Enzyme', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<SerchQurryPage />);
      expect(wrapper).toMatchSnapshot()
     });
  });