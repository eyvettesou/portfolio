import React from 'react';
import ReactDOM from 'react-dom';
import css from './index.css';
import mainPhoto from './assets/portfolio_photo.png';
import statsData from './stats_data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      container: 'home',
    }

    this.pageUpdate = this.pageUpdate.bind(this)
  }

  pageUpdate(container) {
    this.setState({
      container: container
    })
  }

  render() {
    let currentContainer;

    switch(this.state.container){
      case 'home':
        currentContainer = <Home />;
        break;
      case 'about':
        currentContainer = <About />;
        break;
      case 'resume':
        currentContainer = <Resume />;
        break;
      case 'portfolio':
        currentContainer = <Portfolio />;
        break;
      case 'status':
        currentContainer = <Status />;
        break;
    }

    return (
      <div class="main">
        <div class="header">
          <a onClick={() => {this.pageUpdate('home')}}><span>EYVETTE SOU</span></a>
          <ul>
            <li>
              <a onClick={() => {this.pageUpdate('about')}} className={this.state.container == 'about' ? 'selected' : null}>About</a>
            </li>
            <li>
              <a onClick={() => {this.pageUpdate('resume')}} className={this.state.container == 'resume' ? 'selected' : null}>Resume</a>
            </li>
            <li>
              <a onClick={() => {this.pageUpdate('portfolio')}} className={this.state.container == 'portfolio' ? 'selected' : null}>Portfolio</a>
            </li>
            <li>
              <a onClick={() => {this.pageUpdate('status')}} className={this.state.container == 'status' ? 'selected' : null} statsData={statsData}>Status</a>
            </li>
          </ul>
        </div>
        <div class="content" id="content">
          {currentContainer}
        </div>
      </div>
    )
  }
}

const Home = () => {
  return (
    <div className="home">
      Hi Im Eyvette
    </div>
  )
}

const About = () => {
  return (
    <div className="about">
      <img src={mainPhoto} className="main_photo"/>
      <div className="about-details">
        <span className="heading">Software Developer</span>
        <p>
          I am currently a Quality Assurance Engineer at Procore Technologies.
          Over the past few years, I have gained a strong interest in front end design and development which has lead me to where I am today.
        </p>
        <span className="heading">Contact Info</span>
        <br /> <br />
        <ul>
          <li><a href="https://github.com/eyvettesou/">Github</a></li>
          <li><a href="https://www.linkedin.com/in/eyvettesou/">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  )
}

const Portfolio = () => {
  return (
    <div className="portfolio">
      Portfolio.
    </div>
  )
}

const Status = ({statsData}) => {
  function row(statsData){
    console.log(statsData)
    return(<tr><td></td></tr>)
  }

  return (
    <div className="status">
      <table>
        <tbody>
          {row()}
        </tbody>
      </table>
    </div>
  )
}

const Resume = () => {
  return (
    <div className="resume">
      Resume.
    </div>
  )
}

var mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)

if (module.hot) {
  module.hot.accept()
}
