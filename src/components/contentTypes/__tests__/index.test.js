import ContentTypes from '../index';
import { render , screen} from '@testing-library/react';
import React from 'react';

describe('Content Types', () => {
  it('Should render correctly', () => {
    const {asFragment} = render(<ContentTypes />);
    expect(asFragment()).toMatchSnapshot();
  });
});