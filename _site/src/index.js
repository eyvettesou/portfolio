import React from 'react'
import ReactDOM from 'react-dom'
import css from './index.css'

class App extends React.Component {
  render() {
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
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className={'body'}>This is the body I guess</div>
      </div>
    )
  }
}

var mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)

if (module.hot) {
  module.hot.accept()
}
