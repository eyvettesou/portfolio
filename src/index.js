import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Portfolio from './components/Portfolio';
import Status from './components/Status';
import { statsData } from './stats_data.js';

import mainPhoto from './assets/portfolio_photo.png';

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
        currentContainer = <Status statsData={statsData} />;
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
              <a onClick={() => {this.pageUpdate('status')}} className={this.state.container == 'status' ? 'selected' : null}  statsData={statsData}>Status</a>
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

class Home extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = '#93a3b1'
  }

  render() {
    return (
      <div>
        Hi this is me
      </div>
    )
  }
}

class About extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = '#E8CCBF'
  }

  render() {
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
}

class Resume extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = '#c6c7c4'
  }

  render() {
    return (
      <div>
        Resume.
      </div>
    )
  }
}

var mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)

if (module.hot) {
  module.hot.accept()
}
