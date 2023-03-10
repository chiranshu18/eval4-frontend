import EntryType from '../index';
import { render , screen} from '@testing-library/react';
import React from 'react';

describe('Entry Type', () => {
  it('Should render correctly', () => {
    const {asFragment} = render(<EntryType />);
    expect(asFragment()).toMatchSnapshot();
  });
});