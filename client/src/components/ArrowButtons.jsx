import React from 'react';
import '../style.css';

const ArrowButtons = ({
  handleNext, handlePrev,
}) => {
  const prev = '<';
  const next = '>';
  return (
    <div className="arrowButtons">
      <div className="lbtndiv">
        <button
          className="lbtn"
          type="button"
          onClick={handlePrev}
        >
          <span className="spanner">{prev}</span>
        </button>
      </div>
      <div className="rbtndiv">
        <button
          className="rbtn"
          type="button"
          onClick={handleNext}
        >
          <span className="spanner">{next}</span>
        </button>
      </div>
    </div>
  );
};

export default ArrowButtons;
