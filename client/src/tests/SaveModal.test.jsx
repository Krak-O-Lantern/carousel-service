import React from 'react';
import { shallow, mount } from 'enzyme';
import SaveModal from '../components/SaveModal';

let savedCount = 0;
const handleModalClick = jest.fn(() => {
  savedCount += 1;
  return savedCount;
});
const handleModalClose = jest.fn();

describe('SaveModal', () => {
  it('should render the correct amount of saved listings', () => {
    const wrapper = mount(
      <SaveModal
        savedCount={savedCount}
        showSaveModal
        handleModalClick={handleModalClick}
        handleModalClose={handleModalClose}
      />,
    );
    const count = wrapper.find('div.counted_stays').text();
    expect(count).toEqual('0 stays');
    expect(wrapper.props().savedCount).toEqual(0);
    const button = wrapper.find('button.modal_middle_btn');
    button.simulate('click');
    expect(handleModalClick).toHaveBeenCalledTimes(1);
  });
  it('should have no children if showSaveModal is false', () => {
    const wrapper = mount(
      <SaveModal
        savedCount={savedCount}
        showSaveModal={false}
        handleModalClick={handleModalClick}
        handleModalClose={handleModalClose}
      />,
    );
    expect(wrapper.children()).toEqual({});
  });

  it('should make stay singular if savedCount ===1', () => {
    const wrapper = mount(
      <SaveModal
        savedCount={1}
        showSaveModal
        handleModalClick={handleModalClick}
        handleModalClose={handleModalClose}
      />,
    );
    const count = wrapper.find('div.counted_stays').text();
    expect(count).toEqual('1 stay');
  });
});
