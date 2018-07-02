import React from 'react';
import ReactDOM from 'react-dom';
import css from './index.css';
import mainPhoto from './assets/portfolio_photo.png';
import { statsData } from './stats_data.js';

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
  const quarters = statsData
    .map( (stat) => {return stat.quarter} )
    .filter((element, position, self) => {
      return (self.indexOf(element) == position);
    })

  function tasksByQuarter(statsData){
    return(
      quarters.map( (quarter) => {
        return(
          <tbody>
            <tr><td colSpan={3}><h2>{`QUARTER ${quarter}`}</h2></td></tr>
            {header()}
            {row(statsData, quarter)}
            <tr><td colSpan={3}>&nbsp;</td></tr>
          </tbody>
        )
      })
    )
  }

  function header(){
    return (
      <tr>
        <td className="status-row status-task"><h3>Task</h3></td>
        <td className="status-row status-references"><h3>References</h3></td>
        <td className="status-row status-status"><h3>Status</h3></td>
      </tr>
    )
  }

  function row(statsData, quarter){
    return(
      statsData
        .filter( (stat) => {
          return(stat.quarter == quarter)
        })
        .map( (stat) => {
          const references = stat.references.map( (reference) => {
            return (
              <span>
                <a href={reference} target="_blank">{reference}</a><br />
              </span>
            )
          })

          return (
            <tr>
              <td className="status-row status-task ">{stat.task}</td>
              <td className="status-row status-references">{references}</td>
              <td className="status-row status-status">{stat.status}</td>
            </tr>
          )
        })
    )
  }

  return (
    <div className="status">
      <table>
        <tbody>
          {tasksByQuarter(statsData)}
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
