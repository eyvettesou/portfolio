import React from 'react';
import ReactDOM from 'react-dom';
import './portfolio.css';

import image1 from '../assets/image3.jpg';
import image2 from '../assets/image6.jpg';

class Portfolio extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = '#7c898b'
  }

  render() {
    return (
      <div className="portfolio__container">

        <div className="porfolio__content-container">
          <div className="portfolio__content" id="section-one">
            <div className="portfolio__previews">
              <img src={image1} alt="DemonBro" />
            </div>
            <div className="portfolio__details">
              <p>Name goes here</p>
              <p>Description</p>
              <p>Links</p>
            </div>
          </div>

          <div className="portfolio__content" id="section-two">
            <div className="portfolio__previews">
              <img src={image2} alt="MemeGenerator" />
            </div>
            <div className="portfolio__details">
              <p>Name goes here</p>
              <p>Description</p>
              <p>Links</p>
            </div>
          </div>
        </div>

        <div className="portfolio__nav">
          <ul>
            <li className="portfolio__nav-items">
              <a href="#section-one">01</a>
            </li>
            <li className="portfolio__nav-items">
              <a href="#section-two">02</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Portfolio;
