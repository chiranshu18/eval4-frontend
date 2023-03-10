import ContentTypeFields from '../index';
import { render , screen} from '@testing-library/react';
import React from 'react';

describe('Content Types Fields', () => {
  it('Should render correctly', () => {
    const {asFragment} = render(<ContentTypeFields />);
    expect(asFragment()).toMatchSnapshot();
  });
});