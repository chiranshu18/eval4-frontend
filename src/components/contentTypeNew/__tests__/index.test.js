import ContentTypeNew from '../index';
import { render , screen} from '@testing-library/react';
import React from 'react';

describe('Content Types New', () => {
  it('Should render correctly', () => {
    const {asFragment} = render(<ContentTypeNew />);
    expect(asFragment()).toMatchSnapshot();
  });
});