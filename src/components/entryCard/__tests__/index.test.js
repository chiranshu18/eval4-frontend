import EntryCard from '../index';
import { render , screen} from '@testing-library/react';
import React from 'react';

describe('Entries', () => {
  it('Should render correctly', () => {
    const {asFragment} = render(<EntryCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});