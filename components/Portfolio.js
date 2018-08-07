import React from 'react';
import ReactDOM from 'react-dom';
import './portfolio.css';
import githubLogo from '../assets/githublogo.png';
import globe from '../assets/globe.png';

import magicball from '../assets/magicball-thumbnail.png';
import memeGenerator from '../assets/meme-generator-thumbnail.png';
import volatility from '../assets/volatility-thumbnail.png';
import demonBro from '../assets/demonbro-thumbnail.png';
import tommyChallenge from '../assets/tommy-challenge-thumbnail.png';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '0'
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.body.style.backgroundColor = '#7c898b';
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let currentPosition = document.documentElement.scrollTop;

    if ( (currentPosition > (document.getElementById("1").offsetTop - 320)) && (currentPosition < (document.getElementById("2").offsetTop - 320)) ) {
      this.setState({
        active: '0'
      })
    } else if ( currentPosition > (document.getElementById("2").offsetTop - 320)  && (currentPosition < (document.getElementById("3").offsetTop - 320)) ){
      this.setState({
        active: '1'
      })
    } else if ( currentPosition > (document.getElementById("3").offsetTop  - 320)  && (currentPosition < (document.getElementById("4").offsetTop  - 320)) ){
      this.setState({
        active: '2'
      })
    } else if ( currentPosition > (document.getElementById("4").offsetTop  - 320)  && (currentPosition < (document.getElementById("5").offsetTop  - 320)) ){
      this.setState({
        active: '3'
      })
    } else if ( currentPosition > (document.getElementById("5").offsetTop  - 320)  && (currentPosition < (document.getElementById("6").offsetTop  - 320)) ){
      this.setState({
        active: '4'
      })
    } else if ( currentPosition > (document.getElementById("6").offsetTop  - 320) ){
      this.setState({
        active: '5'
      })
    }
  }

  render() {
    const portfolioData = [
      {
        position: 1,
        name: "Meme Generator",
        description: "Built in React using 'createreactapp'. This was intended to be a potential React workshop that would introduce fetching and posting using APIs.",
        links: ["https://github.com/eyvettesou/meme_generator"],
        previews: [memeGenerator],
        lessons: [
          "I practiced fetching and posting data to a public API.",
          "CORS (Cross Origin Resource Sharing) - how to bypass CORS by using a proxy.",
          "Without using react-router, I was able to create a single-page application that didn't require a hard refresh."
        ],
        status: 'done'
      },
      {
        position: 2,
        name: "Magic 8 Ball",
        description: "Developed a walkshop through a tuturial on glitch. This workshop teaches basic HTML and JS. The format of this workshop allows attendees to ",
        links: ["https://github.com/eyvettesou/magic8ball", "https://silver-keyboard.glitch.me/"],
        previews: [magicball],
        lessons: [
          "I mostly practiced explaining concepts in English that would make sense to a person with no experience",
          "This helped solidify my knowledge of plain Javascript."
        ],
        status: 'done'
      },
      {
        position: 3,
        name: "Portfolio v1",
        description: "Built in React from scratch. Configured my own webpack and package.json.",
        links: ["https://github.com/eyvettesou/portfolio"],
        previews: [memeGenerator],
        lessons: [
          `I wanted to create a React application without all the unnecessary dependencies and packages that create-react-app provides.
           So this portfolio was created from scratch (starting with index.html and index.js). I configured webpack and my package.json to only have the necessary packages.
           After working on understanding the basics, I added some nice to have packages (ie: hot-loader, css-loader, url-loader, etc).
          `,
          "I learned to deploy to github pages.",
          "This solidified my knowledge of the map/filter API."
        ],
        status: 'done'
      },
      {
        position: 4,
        name: "Demon Bro",
        description: "Very first application built in React using 'createreactapp'. Simple incremental game that mimics the classic game Cookie Clicker, except instead of cookiees, they're creatures of the night.",
        links: ["https://github.com/eyvettesou/soulkeeper"],
        previews: [demonBro],
        lessons: [
          "I solidified my knowledge of states and props.",
          "I understood the importance of putting states in the higher level components and passing them down to components who just consume them as props."
        ],
        status: 'in progress'
      },
      {
        position: 5,
        name: "Tommy Challenge",
        description: "Built the front end in HTML, CSS, and JS. The Tommy Challenge is an application that will randomly select a word and then proceed to find a song title with the word in it every month. Music producers will have one month to remix the song and submit it to Tommy Challenege. Users can come in and listen to all submissions for the month and give feedback.",
        links: ["https://github.com/bobcats/tommychallenge"],
        previews: [tommyChallenge],
        lessons: [
          "I wanted to take a step back from React and fully understanding Javascript since React is just a framework built upon the Javascript API.",
          "This project helped me fully understand what the DOM is and what the React framework is suppose to help solve.",
          "It helped me understand Capybara (A selenium/ruby testing framework) and how it was used to do it's magic."
        ],
        status: 'in progress'
      },
      {
        position: 6,
        name: "Volatility",
        description: `Website designed and built for a friend who wanted to use it for his personal business.
          I finished the wireframe, but he has yet to give me the content.`,
        links: ["https://github.com/eyvettesou/volatility"],
        previews: [volatility],
        lessons: [
          "This was a project I build early on; I used react-router to help me create a single page application.",
          "I learned to install and use external node packages, in this case ant-d.",
          "I learned to use state to help facilitate the photo stream on the home page."
        ],
        status: 'in progress'
      }
    ]

    return (
      <div className="portfolio__container">
        <div className="porfolio__content-container">
          {
            portfolioData.map( (item) => {
              return (
                <div className="portfolio__content" id={item.position}>
                  <div className="portfolio__previews">
                    <img src={item.previews[0]} alt={item.name} className="portfolio__thumbnail" />
                  </div>
                  <div className="portfolio__details">
                    <span className="portfolio__details-name">{item.name}</span>
                    <p className="portfolio__details-description">{item.description}</p>
                    <h3>Lessons: </h3>
                    <ul className="portfolio__details">
                      {
                        item.lessons.map( (lesson) => {
                          return(
                            <li>{lesson}</li>
                          )
                        })
                      }
                    </ul>
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
                    <a href={`#${item.position}`} className={ (this.state.active == index ? 'portfolio__nav-items--active' : null) }>{`0${index+1}`}</a>
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
