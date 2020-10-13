import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import Carousel from '../components/Carousel';

describe('App suite', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<App />).contains(
      <div className="bodyWrapper">
        <div className="wrapper">
          <Carousel />
        </div>
      </div>,
    )).toBe(true);
  });
});
