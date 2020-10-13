import React from 'react';
import { shallow, mount } from 'enzyme';
import SlideList from '../components/SlideList';
import sampleData from '../components/sampleData';
import Slide from '../components/Slide';

const toggleSave = jest.fn();
const style = {
  transition: 'transform ease-out 0.45s',
  transform: 'translateX(-0%)',
};

it('renders SlideList', () => {
  const wrapper = shallow(
    <SlideList
      move={style}
      slides={sampleData}
      toggleSave={toggleSave}
    />,
  );
  expect(wrapper.exists()).toBe(true);
});

it('Renders a slide for each listing', () => {
  const wrapper = mount(
    <SlideList
      move={style}
      slides={sampleData}
      toggleSave={toggleSave}
    />,
  );
  expect(wrapper.exists()).toBe(true);
  const slide = wrapper.find(Slide);
  expect(slide.exists()).toBe(true);
  const slides = wrapper.find('ul').children();
  expect(slides.length).toEqual(sampleData.length);
});
