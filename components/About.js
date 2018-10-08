import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

import resume from './resume.md';
import mainPhoto from '../assets/portfolio_photo.png';
import githubLogo from '../assets/githublogo.png';
import linkedInLogo from '../assets/linkedinLogo.png';
import './about.css';

class About extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      resume: null,
    }
  }

  componentDidMount() {
    this.resume = fetch(resume)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          resume: text
        })
      })
  }

  render() {
    return <div className="about">
        <div className="about-general_info">
          <img src={mainPhoto} className="main_photo" />
          <div className="about-general_info_text">
            <span className="heading">Contact Info</span>
            <div className="about-contact">
              <ul>
                <li>(916) 284-8509</li>
                <li>|</li>
                <li>eyvettesou@gmail.com</li>
                <li>|</li>
                <li>
                  <a href="https://github.com/eyvettesou/">
                    <img src={githubLogo} alt="github" className="link--image" />
                  </a>
                </li>
                <li style={{ marginLeft: "10px" }}>
                  <a href="https://www.linkedin.com/in/eyvettesou/">
                    <img src={linkedInLogo} alt="linkedin" className="link--image" />
                  </a>
                </li>
              </ul>
            </div>
            <span className="heading">Technical Skills</span>
            <div style={{ margin: "1em 0em" }}>
              <h2>Web Development</h2>
              <div className="about-technical">
                <div>
                  <ul>
                    <li>HTML</li>
                    <li>CSS/SASS</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                    <li>Jest/Enzyme</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>Ruby</li>
                    <li>RSpec/Selenium/Capybara</li>
                  </ul>
                </div>
              </div>
            </div>
            <h2>Others</h2>
            <ul>
              <li>Command Line and Git</li>
              <li>Deployment via Github Pages</li>
              <li>Professional Scrum Master</li>
              <li>Microsoft Office Suite</li>
            </ul>
          </div>
        </div>
        <div className="about-details">
          <span className="heading">Software Developer</span>
          <p>
            I am currently a Quality Assurance Engineer at Procore
            Technologies. Over the past few years, I have gained a strong
            interest in front end design and development which has lead me
            to where I am today.
          </p>
          <ReactMarkdown source={this.state.resume} className="markdown" />
        </div>
      </div>;
  }
}

export default About;
