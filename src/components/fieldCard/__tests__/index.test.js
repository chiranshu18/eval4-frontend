import FieldCard from '../index';
import { render , screen} from '@testing-library/react';
import React from 'react';

describe('Field Card', () => {
  it('Should render correctly', () => {
    const {asFragment} = render(<FieldCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});