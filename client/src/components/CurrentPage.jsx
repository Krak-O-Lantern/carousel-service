import React from 'react';
import '../style.css';

const CurrentPage = ({ currPage, lastPage }) => (
  <div>
    <div className="page">{`${currPage} / ${lastPage}`}</div>
  </div>
);

export default CurrentPage;
