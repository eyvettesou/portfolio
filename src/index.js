import React from 'react'
import ReactDOM from 'react-dom'
import css from './index.css'

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
              <a onClick={() => {this.pageUpdate('status')}} className={this.state.container == 'status' ? 'selected' : null}>Status</a>
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
      About.
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

const Status = () => {
  return (
    <div className="status">
      Status.
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
