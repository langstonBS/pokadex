// import React from 'react';
// import { render } from '@testing-library/react';
import React from 'react';
import { shallow } from 'enzyme';
import RenderPokemon from './RenderPokemon';

describe('RenderPokemon', () => {
  it('Renders App', () => {
    const wrapper = shallow(< RenderPokemon />);
    expect(wrapper).toMachSnapshot();
  });
});
