import React from 'react';
import '../style.css';

const Slide = ({ slide, toggleSave }) => (
  <li className="slide">
    <div className="imageContainer">
      {slide.superhost && (
        <div className="souperhost_box">
          <div className="souperhost">SOUPERHOST</div>
        </div>
      )}
      <div className="heartShapedBox">
        {slide.saved ? <img className="pink_heart" src="https://souperhost.s3-us-west-2.amazonaws.com/pinkheart.png" alt="" /> : (
          <img
            className="heart"
            src="https://souperhost.s3-us-west-2.amazonaws.com/instagram-icon-24x24-27.jpg"
            alt=""
          />
        )}
      </div>
      <div className="outline_box">
        <button
          onClick={() => toggleSave(slide)}
          className="heartButton"
          type="button"
        >
          <img className="heart_outline" src="https://souperhost.s3-us-west-2.amazonaws.com/heart.png" alt="" />
        </button>
      </div>
      <img className="image" src={slide.image} alt="house" />
    </div>
    <div className="review_nums">
      <img className="star" alt="" src="https://souperhost.s3-us-west-2.amazonaws.com/star2.png" />
      <div className="avg">{slide.review_average}</div>
      <div className="review_count">{`(${slide.review_count})`}</div>
    </div>
    <div className="place_title">{slide.place_title}</div>
    <div className="place_title">{slide.sleeping_arrangement}</div>
    <div className="review_nums">
      <div className="price">
        {`$${slide.price}`}
      </div>
      <span className="night"> / night</span>
    </div>
  </li>
);

export default Slide;
