import React from 'react'
import ReactDOM from 'react-dom'
import css from './index.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      container: 0,
    }
  }

  render() {
    let currentContainer;

    switch(this.state.container){
      case 0:
        currentContainer = <Home />;
        break;
      case 1:
        currentContainer = <About />;
        break;
      case 2:
        currentContainer = <Portfolio />;
        break;
      case 3:
        currentContainer = <Stats />;
        break;
      case 4:
        currentContainer = <Contact />;
        break;
    }

    return (
      <div>
        <div class="header">
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">Stats</a>
            </li>
            <li>
              <a href="/">Contact</a>
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
