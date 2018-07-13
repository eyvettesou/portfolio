import React from 'react';
import ReactDOM from 'react-dom';
import './portfolio.css';
import githubLogo from '../assets/githublogo.png';
import globe from '../assets/globe.png';

import image1 from '../assets/image3.jpg';
import image2 from '../assets/image6.jpg';

class Portfolio extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = '#7c898b'
  }

  render() {
    const portfolioData = [
      {
        name: "Demon Bro",
        description: "Built in React using 'createreactapp'. Simple incremental game that mimics the classic game Cookie Clicker, except instead of cookiees, they're creatures of the night.",
        links: ["https://github.com/eyvettesou/soulkeeper"],
        previews: [image1, image2]
      },
      {
        name: "Tommy Challenege",
        description: "Built the front end in HTML, CSS, and JS. The Tommy Challenge is an application that will randomly select a word and then proceed to find a song title with the word in it every month. Music producers will have one month to remix the song and submit it to Tommy Challenege. Users can come in and listen to all submissions for the month and give feedback.",
        links: ["https://github.com/bobcats/tommychallenge"],
        previews: [image1]
      },
      {
        name: "Meme Generator",
        description: "Built in React using 'createreactapp'. This was intended to be a potential React workshop that would introduce fetching and posting using APIs.",
        links: [],
        previews: [image1]
      },
      {
        name: "Magic 8 Ball",
        description: "Developed a walkshop through a tuturial on glitch. This workshop teaches basic HTML and JS. The format of this workshop allows attendees to ",
        links: ["https://github.com/eyvettesou/magic8ball", "https://silver-keyboard.glitch.me/"],
        previews: [image1]
      },
      {
        name: "Volatility",
        description: "",
        links: ["https://github.com/eyvettesou/volatility"],
        previews: [image1]
      },
      {
        name: "Portfolio v1",
        description: "Built in React from scratch. Configured my own webpack and package.json.",
        links: ["https://github.com/eyvettesou/portfolio"],
        previews: [image1]
      }
    ]

    return (
      <div className="portfolio__container">
        <div className="porfolio__content-container">
          {
            portfolioData.map( (item) => {
              return (
                <div className="portfolio__content" id={item.name}>
                  <div className="portfolio__previews">
                    <img src={item.previews[0]} alt={item.name} />
                  </div>
                  <div className="portfolio__details">
                    <span className="portfolio__details-name">{item.name}</span>
                    <p className="portfolio__details-description">{item.description}</p>
                    {
                      item.links.map( (link) => {
                        return (
                          <div className="portfolio__details-links--container">
                            <img src={link.includes("github")? githubLogo : globe} className="portfolio__details-links--image" />
                            <a href={link} target="_blank" className="portfolio__details-links--text">{link}</a> <br />
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="portfolio__nav">
          <ul>
            {
              portfolioData.map( (item, index) => {
                return (
                  <li className="portfolio__nav-items">
                  <a href={`#${item.name}`}>{`0${index+1}`}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Portfolio;
