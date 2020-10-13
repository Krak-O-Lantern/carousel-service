/* eslint-disable arrow-body-style */
import React from 'react';

const SaveModal = ({
  savedCount, showSaveModal, handleModalClick, handleModalClose,
}) => {
  if (showSaveModal) {
    return (
      <div onKeyPress={handleModalClose} tabIndex="0" role="button" onClick={handleModalClose} className="modal_container">
        <div className="modal">
          <div className="x_box">
            <button type="button" className="x_button" onClick={handleModalClose}>X</button>
          </div>
          <header className="modal_header">
            <div className="spacer_left" />
            <div className="modal_header_text_box">
              <div>Save to a list</div>
            </div>
            <div className="spacer_right" />
          </header>
          <div className="modal_middle">
            <button onClick={() => handleModalClick(savedCount)} type="button" className="modal_middle_btn">
              <div className="modal_middle_btn_div">
                <div className="modal_picture_box">
                  <img src="https://souperhost.s3-us-west-2.amazonaws.com/stay1.jpg" className="modal_image" alt="" />
                </div>
                <div className="modal_middle_text">
                  <div className="anytime">Any time</div>
                  <div className="saved_listings">Saved listings</div>
                  <div className="counted_stays">{savedCount === 1 ? '1 stay' : `${savedCount} stays`}</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default SaveModal;
