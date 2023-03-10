import ContentTypeCard from '../index';
import { render , screen} from '@testing-library/react';
import React from 'react';

describe('Content Types Card', () => {
  it('Should render correctly', () => {
    const {asFragment} = render(<ContentTypeCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});