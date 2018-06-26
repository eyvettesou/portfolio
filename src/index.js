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
              <a onClick={() => {this.pageUpdate('about')}}>About</a>
            </li>
            <li>
              <a onClick={() => {this.pageUpdate('resume')}}>Resume</a>
            </li>
            <li>
              <a onClick={() => {this.pageUpdate('portfolio')}}>Portfolio</a>
            </li>
            <li>
              <a onClick={() => {this.pageUpdate('status')}}>Status</a>
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
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, leo et aliquam mollis, odio mi feugiat massa, sed euismod ex ligula et mauris. Phasellus in orci eget odio viverra scelerisque. Aliquam a sapien fermentum, suscipit neque et, volutpat magna. Pellentesque facilisis porttitor arcu a tristique. Nullam commodo enim purus, vel tempus lectus ornare a. Nam a ligula eget metus sollicitudin semper. Praesent tincidunt magna nulla, id malesuada ligula accumsan nec.

    Nam porttitor augue fringilla eleifend placerat. Nullam placerat diam nulla, vitae porta lectus pulvinar posuere. Quisque interdum purus congue tortor molestie, in tempor ante vulputate. Suspendisse vulputate justo eu metus commodo, nec dapibus sapien varius. Nunc sed suscipit tortor. Quisque ullamcorper eget nulla et suscipit. Ut nec commodo lectus. Curabitur volutpat ligula orci, at tincidunt orci tristique dignissim. Phasellus tristique tellus eu scelerisque posuere. Integer suscipit, enim non feugiat blandit, metus nisl aliquam eros, eget dictum turpis nulla sit amet elit. Donec sit amet nisl at sapien lobortis lobortis.

    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin varius ante in imperdiet aliquam. Mauris quis odio placerat, rutrum magna laoreet, auctor orci. Nam accumsan egestas purus, vulputate dictum mi scelerisque eget. Suspendisse quis nulla facilisis justo ullamcorper varius. Nulla id augue in nisi eleifend viverra. Nulla pulvinar ex et ipsum malesuada maximus nec a eros. Integer fermentum mi erat, ut posuere mauris hendrerit sed. In facilisis ex non lorem dapibus, a tempor nisl fermentum. Duis eleifend fringilla massa, sit amet porta eros mollis id. Maecenas vitae finibus risus. Integer et venenatis lorem. Phasellus auctor ex quis risus viverra, id fringilla justo scelerisque. Mauris eu ligula fringilla dolor ultricies euismod sit amet at odio. Nulla congue sit amet quam eu blandit.

    Sed vehicula tortor ornare, rhoncus orci id, tincidunt ligula. Mauris pretium, justo nec molestie pharetra, leo augue elementum nunc, sit amet tempor mi elit vitae lorem. Sed sodales convallis elementum. Etiam sagittis sapien nec nulla euismod, in pretium ligula maximus. Proin eu elit ac arcu varius scelerisque sed et neque. Sed eu est massa. Vivamus eget nunc eros. Quisque nec tortor nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

    Nunc maximus, nunc ut vestibulum pellentesque, massa lacus ultricies nisi, id molestie lacus metus ut erat. Vivamus finibus porta tortor. Nunc sodales elit et dui ornare, ac vestibulum urna pellentesque. Phasellus at nibh in quam pretium rutrum fermentum vitae nisi. Aenean eget volutpat odio. Aenean vel tincidunt quam. Duis nisl ante, varius a orci sit amet, porta vulputate ipsum. Aenean porttitor, mauris vitae faucibus eleifend, sapien purus molestie libero, eu sagittis leo risus nec nulla. Donec vel metus vel ipsum tincidunt consequat. Morbi tincidunt at nisi vitae egestas. Nulla tincidunt nunc vel elit faucibus consectetur.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, leo et aliquam mollis, odio mi feugiat massa, sed euismod ex ligula et mauris. Phasellus in orci eget odio viverra scelerisque. Aliquam a sapien fermentum, suscipit neque et, volutpat magna. Pellentesque facilisis porttitor arcu a tristique. Nullam commodo enim purus, vel tempus lectus ornare a. Nam a ligula eget metus sollicitudin semper. Praesent tincidunt magna nulla, id malesuada ligula accumsan nec.

    Nam porttitor augue fringilla eleifend placerat. Nullam placerat diam nulla, vitae porta lectus pulvinar posuere. Quisque interdum purus congue tortor molestie, in tempor ante vulputate. Suspendisse vulputate justo eu metus commodo, nec dapibus sapien varius. Nunc sed suscipit tortor. Quisque ullamcorper eget nulla et suscipit. Ut nec commodo lectus. Curabitur volutpat ligula orci, at tincidunt orci tristique dignissim. Phasellus tristique tellus eu scelerisque posuere. Integer suscipit, enim non feugiat blandit, metus nisl aliquam eros, eget dictum turpis nulla sit amet elit. Donec sit amet nisl at sapien lobortis lobortis.

    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin varius ante in imperdiet aliquam. Mauris quis odio placerat, rutrum magna laoreet, auctor orci. Nam accumsan egestas purus, vulputate dictum mi scelerisque eget. Suspendisse quis nulla facilisis justo ullamcorper varius. Nulla id augue in nisi eleifend viverra. Nulla pulvinar ex et ipsum malesuada maximus nec a eros. Integer fermentum mi erat, ut posuere mauris hendrerit sed. In facilisis ex non lorem dapibus, a tempor nisl fermentum. Duis eleifend fringilla massa, sit amet porta eros mollis id. Maecenas vitae finibus risus. Integer et venenatis lorem. Phasellus auctor ex quis risus viverra, id fringilla justo scelerisque. Mauris eu ligula fringilla dolor ultricies euismod sit amet at odio. Nulla congue sit amet quam eu blandit.

    Sed vehicula tortor ornare, rhoncus orci id, tincidunt ligula. Mauris pretium, justo nec molestie pharetra, leo augue elementum nunc, sit amet tempor mi elit vitae lorem. Sed sodales convallis elementum. Etiam sagittis sapien nec nulla euismod, in pretium ligula maximus. Proin eu elit ac arcu varius scelerisque sed et neque. Sed eu est massa. Vivamus eget nunc eros. Quisque nec tortor nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

    Nunc maximus, nunc ut vestibulum pellentesque, massa lacus ultricies nisi, id molestie lacus metus ut erat. Vivamus finibus porta tortor. Nunc sodales elit et dui ornare, ac vestibulum urna pellentesque. Phasellus at nibh in quam pretium rutrum fermentum vitae nisi. Aenean eget volutpat odio. Aenean vel tincidunt quam. Duis nisl ante, varius a orci sit amet, porta vulputate ipsum. Aenean porttitor, mauris vitae faucibus eleifend, sapien purus molestie libero, eu sagittis leo risus nec nulla. Donec vel metus vel ipsum tincidunt consequat. Morbi tincidunt at nisi vitae egestas. Nulla tincidunt nunc vel elit faucibus consectetur.

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
