import React from 'react';
import { shallow } from 'enzyme';
import CurrentPage from '../components/CurrentPage';
import sampleData from '../components/sampleData';

const maxPages = jest.fn(() => Math.ceil(sampleData.length / 4));

it('Should render CurrentPage component', () => {
  const wrapper = shallow(<CurrentPage
    currPage={1}
    lastPage={maxPages}
  />);
  expect(wrapper.exists()).toBe(true);
});

it('CurrentPage text should render', () => {
  const wrapper = shallow(<CurrentPage
    currPage={1}
    lastPage={maxPages}
  />);
  expect(wrapper.text()).toBe(`1 / ${maxPages}`);
});
