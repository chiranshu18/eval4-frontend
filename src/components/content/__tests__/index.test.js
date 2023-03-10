import Content from '../index';
import { render , screen} from '@testing-library/react';
import React from 'react';

describe('Content', () => {
  it('Should render correctly', () => {
    const {asFragment} = render(<Content />);
    expect(asFragment()).toMatchSnapshot();
  });
});