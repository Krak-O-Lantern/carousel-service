import React from 'react';
import { shallow, mount } from 'enzyme';
import ArrowButtons from '../components/ArrowButtons';

const handleNext = jest.fn();
const handlePrev = jest.fn();
const next = '>';
const prev = '<';

describe('Arrow Buttons', () => {
  it('should render buttons', () => {
    const wrapper = shallow(
      <ArrowButtons
        prev={prev}
        next={next}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />,
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('should call handlePrev for pressing back', () => {
    const wrapper = mount(
      <ArrowButtons
        prev={prev}
        next={next}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />,
    );
    const button = wrapper.find('button.rbtn');
    button.simulate('click');
    expect(handleNext).toHaveBeenCalledTimes(1);
  });
});
