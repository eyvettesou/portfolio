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
      case 'portfolio':
        currentContainer = <Portfolio />;
        break;
      case 'stats':
        currentContainer = <Stats />;
        break;
      case 'contact':
        currentContainer = <Contact />;
        break;
    }

    return (
      <div>
        <div class="header">
          <ul>
            <li>
              <a onClick={() => {this.pageUpdate('about')}}>About</a>
            </li>
            <li>
              <a onClick={() => {this.pageUpdate('portfolio')}}>Portfolio</a>
            </li>
            <li>
              <a onClick={() => {this.pageUpdate('stats')}}>Stats</a>
            </li>
            <li>
              <a onClick={() => {this.pageUpdate('contact')}}>Contact</a>
            </li>
          </ul>
        </div>
        {currentContainer}
      </div>
    )
  }
}

const Home = () => {
  return (
    <div>
      Home page.
    </div>
  )
}

const About = () => {
  return (
    <div>
      About.
    </div>
  )
}

const Portfolio = () => {
  return (
    <div>
      Portfolio.
    </div>
  )
}

const Stats = () => {
  return (
    <div>
      Stats.
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      Contact.
    </div>
  )
}

var mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)

if (module.hot) {
  module.hot.accept()
}
