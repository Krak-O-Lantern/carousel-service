import React from 'react';
import axios from 'axios';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Carousel from '../components/Carousel';
import sampleData from '../components/sampleData';
import SlideList from '../components/SlideList';
import SaveModal from '../components/SaveModal';

require('regenerator-runtime');

jest.mock('axios');

describe('Carousel', () => {
  let wrapper;
  it('should mount after fetching data', async () => {
    await act(async () => {
      await axios.get.mockImplementationOnce(() => Promise.resolve(sampleData));
      wrapper = mount(<Carousel />);
    });
    wrapper.update();
    const lButton = wrapper.find('button.lbtn');
    lButton.simulate('click');
    const pageCounter = wrapper.find('div.page').text()[0];
    await expect(pageCounter).toEqual('0');
    await expect(wrapper.exists()).toBe(true);
    await expect(axios.get).toHaveBeenCalledWith('/api/listings');
    await expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it('should not components until after mount', () => {
    wrapper = mount(
      <Carousel />,
    );
    const slideList = wrapper.find(SlideList);
    expect(slideList.exists()).toBe(false);
  });
  it('should modify', () => {
    wrapper = mount(<Carousel />);
    const saveModal = wrapper.find(SaveModal);
    expect(saveModal.exists()).toBe(true);
  });
});
