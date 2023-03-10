import FieldNew from '../index';
import { render , screen} from '@testing-library/react';
import React from 'react';

describe('Field New', () => {
  it('Should render correctly', () => {
    const {asFragment} = render(<FieldNew />);
    expect(asFragment()).toMatchSnapshot();
  });
});