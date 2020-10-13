import React from 'react';
import { shallow, mount } from 'enzyme';
import Slide from '../components/Slide';
import sampleData from '../components/sampleData';

const toggleSave = jest.fn(() => {
  sampleData[0].saved = !sampleData[0].saved;
  return sampleData[0];
});

describe('Slide test', () => {
  it('should render slide', () => {
    const wrapper = shallow(
      <Slide
        slide={sampleData[0]}
        toggleSave={toggleSave}
      />,
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('Clicking the heart should run the function one time', () => {
    const wrapper = mount(<Slide
      slide={sampleData[0]}
      toggleSave={toggleSave}
    />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(toggleSave).toHaveBeenCalledTimes(1);
    expect(wrapper.props().slide.saved).toBe(true);
  });

  it('Should render a pink heart after being clicked', () => {
    const wrapper = mount(<Slide
      slide={sampleData[0]}
      toggleSave={toggleSave}
    />);
    const heart = wrapper.find('img.pink_heart');
    expect(wrapper.props().slide.saved).toBe(true);
    expect(heart.exists()).toBe(true);
  });
});
