import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrentPage from './CurrentPage';
import SlideList from './SlideList';
import ArrowButtons from './ArrowButtons';
import SaveModal from './SaveModal';
import '../style.css';

require('regenerator-runtime');

const Carousel = () => {
  const [listingData, setListingData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [slideIdx, setSlideIdx] = useState(1);
  const [selectedSlide, setSelectedSlide] = useState();
  const [savedCount, setSavedCount] = useState(0);
  const [style, setStyle] = useState({
    transition: 'transform ease-out 0.45s',
    transform: 'translateX(-0%)',
  });
  const maxSlideIdx = 3;

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    const fetchData = async () => {
      const nicePics = Array(4).fill(0);
      const dataRange = Array(8).fill(0);
      const nicePicsArray = await nicePics.map(async (e, idx) => {
        const { data } = await axios.get(`/api/listings/${idx + 1}`);
        return data;
      });
      const fetchDataArray = await dataRange.map(async () => {
        const randomNumber = Math.floor(Math.random() * 96 + 5);
        const { data } = await axios.get(`/api/listings/${randomNumber}`);
        return data;
      });
      const allData = nicePicsArray.concat(fetchDataArray);
      Promise.all(allData)
        .then((result) => {
          setListingData(result);
        });
      setIsLoading(false);
    };
    if (mounted) {
      fetchData();
    }
    return () => {
      mounted = false;
    };
  }, []);

  const toggleSave = (slide) => {
    setSelectedSlide(slide);
    if (!slide.saved) {
      setShowSaveModal(true);
    } else {
      const updatedSlide = slide;
      updatedSlide.saved = !slide.saved;
      const updatedData = [...listingData.slice(0, (slide.listing_id - 1)),
        updatedSlide,
        ...listingData.slice(slide.listing_id)];
      setListingData(updatedData);
      setSavedCount(savedCount - 1);
    }
  };

  const handleModalClick = () => {
    setShowSaveModal(false);
    const updatedSlide = selectedSlide;
    updatedSlide.saved = !selectedSlide.saved;
    const updatedData = [...listingData.slice(0, (selectedSlide.listing_id - 1)),
      updatedSlide,
      ...listingData.slice(selectedSlide.listing_id)];
    setListingData(updatedData);
    setSavedCount(savedCount + 1);
  };

  const handleModalClose = (e) => {
    if (e.target.className === 'modal_container' || e.target.className === 'x_button') {
      setShowSaveModal(false);
    }
  };

  useEffect(() => {
    setStyle({
      transition: 'transform ease-out 0.45s',
      transform: `translateX(-${((slideIdx - 1) * 100)}%)`,
    });
  }, [slideIdx]);

  const handlePrev = () => {
    if (slideIdx !== 1) {
      setSlideIdx(slideIdx - 1);
    } else {
      setSlideIdx(maxSlideIdx);
    }
  };

  const handleNext = () => {
    if (slideIdx !== maxSlideIdx) {
      setSlideIdx(slideIdx + 1);
    } else {
      setSlideIdx(1);
    }
  };

  let itemsToRender;
  if (listingData) {
    itemsToRender = (
      <div className="display">
        <SlideList
          style={style}
          slides={listingData}
          toggleSave={toggleSave}
        />
      </div>
    );
  }

  return (
    <div className="carousel-line">
      <div className="header_div">
        <div className="title">
          <h2>More places to stay</h2>
        </div>
        <div className={showSaveModal ? 'dim_effect' : 'dim_effect_close'} />
        <SaveModal
          savedCount={savedCount}
          handleModalClose={handleModalClose}
          handleModalClick={handleModalClick}
          showSaveModal={showSaveModal}
        />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="rightSide">
            <CurrentPage currPage={slideIdx} lastPage={maxSlideIdx} />
            <ArrowButtons
              handlePrev={handlePrev}
              handleNext={handleNext}
            />
          </div>
        )}
      </div>
      {!isLoading && itemsToRender}
    </div>
  );
};

export default Carousel;
