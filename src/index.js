import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
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

var mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)

if (module.hot) {
  module.hot.accept()
}
