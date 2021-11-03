import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from './Quotes.js';

it('calculator snapshot test', () => {
  const tree = renderer
    .create(<Quotes />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});