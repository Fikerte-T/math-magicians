import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from './Quotes.js';

it('Quotes snapshot test', () => {
  const tree = renderer
    .create(<Quotes />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});