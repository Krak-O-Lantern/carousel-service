import React from 'react';
import Carousel from './Carousel';
import '../style.css';

const App = () => (
  <div className="bodyWrapper">
    <div className="wrapper">
      <Carousel />
      <img className="staticFooter" alt="" src="https://souperhost.s3-us-west-2.amazonaws.com/footer2.webp" />
    </div>
  </div>
);

export default App;
