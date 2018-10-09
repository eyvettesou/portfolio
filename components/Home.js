import React from 'react';
import './home.css';

const quotes = [
  `“It’s easy to dream, but much harder to execute it.”`,
  `“Skills are cheap. Passion is priceless.”`,
  `“No matter what you do, your job is to tell your story.”`,
  `“Fear kills growth.”`,
  `“If you live for the weekends and vacations, your shit is broken.”`,
  `“Without hustle, talent will only carry you so far.”`,
  `“There’s no reason to do shit you hate. None.”`
]

class Home extends React.Component {
  constructor(props){
    super(props)

    this.state = { quote: quotes[Math.floor(Math.random() * quotes.length)] };
    this.generateNewQuote = this.generateNewQuote.bind(this);
  }

  generateNewQuote(){
    const previousQuote = this.state.quote;
    let newQuote = quotes[Math.floor(Math.random() * quotes.length)];

    if(previousQuote === newQuote){
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    }
    
    this.setState({
      quote: quotes[Math.floor(Math.random() * quotes.length)]
    });
  }
  
  render() {
    return <div className="container">
        <div className="quote">
          <a onClick={this.generateNewQuote}>{this.state.quote}</a>
          <span className="home-quote-person">- Gary Vaynerchuk</span>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="xMidYMid" viewBox="0 0 640 640" width="640" height="640" scale="0.25" className="wreath">
          <g fill="transparent" stroke-width="3" stroke="#444444">
            <path d="M592.12 219
              C589.98 164.45 479.13 41.02 340 43.37
              C200.87 45.72 76.44 137.58 65 311.04
              C53.56 484.5 221.6 599.4 340 593.37
              C458.4 587.34 519.19 537.63 564.76 476.54" className="path" />
            <g id="p1" className="leaves">
              <path d="M564.94 477.14
                C558.95 529.45 562.22 552.33 574.75 545.79
                C587.28 539.25 584.01 516.37 564.94 477.14Z" id="h19CiKQI1X" />
              <path d="M565.3 477.14
                C541.66 436.93 526.23 424.03 519.01 438.43
                C511.79 452.84 527.22 465.74 565.3 477.14Z" id="b1mq4ieELC" />
            </g>
            <g id="p2" className="leaves">
              <path d="M494.05 547.88
                C471.84 589.92 467.62 609.35 481.39 606.17
                C495.16 602.99 499.38 583.56 494.05 547.88Z" id="awTKlXbAw" />
              <path d="M494.52 546.6
                C460.76 520.5 442.12 512.96 438.58 523.98
                C435.04 535 453.68 542.54 494.52 546.6Z" id="dd6kRUxPR" />
            </g>
            <g id="p3" className="leaves">
              <path d="M418.39 582.49
                C373.5 609.87 357.71 626.74 371.04 633.09
                C384.37 639.44 400.16 622.57 418.39 582.49Z" id="b3W4sD3e1R" />
              <path d="M417.55 580.29
                C394.46 546.2 379.03 535.44 371.26 548
                C363.49 560.56 378.92 571.33 417.55 580.29Z" id="cUXf0Ncs0" />
            </g>
            <g id="p4" className="leaves">
              <path d="M308.54 593.56
                C267.53 613.25 253.08 625.73 266.2 631
                C279.31 636.27 293.76 623.79 308.54 593.56Z" id="b1OJ6sBnvn" />
              <path d="M309.54 591.9
                C300.78 564.95 293.08 539.68 275.01 547.25
                C266.34 556.38 277.85 571.26 309.54 591.9Z" id="b1XutLv3bw" />
            </g>
            <g id="p5" className="leaves">
              <path d="M215.56 563.79
                C172.76 573.47 154.61 582.73 161.11 593.56
                C167.6 604.38 185.75 595.13 215.56 565.79Z" id="b2xVbOb3ho" />
              <path d="M217.58 561.61
                C222.79 518.67 218.9 499.76 205.91 504.88
                C192.91 509.99 196.8 528.9 217.58 561.61Z" id="a3VxRRqfF" />
            </g>
            <g id="p6" className="leaves">
              <path d="M131.14 499.55
                C90.5 484.09 70.17 482.67 70.16 495.3
                C70.15 507.93 90.48 509.34 131.14 499.55Z" id="b54pV39Bbd" />
              <path d="M133.18 499.17
                C155.85 459.64 159.85 439.82 145.18 439.69
                C130.5 439.56 126.51 459.39 133.18 499.17Z" id="b5QL4Qa9tA" />
            </g>
            <g id="p7" className="leaves">
              <path d="M78.31 415.81
                C46.27 386.41 27.9 377.58 23.23 389.31
                C18.55 401.03 36.91 409.87 78.31 415.81Z" id="c3rhNYLbk" />
              <path d="M81.69 414.03
                C109.94 377.11 117.79 357.53 105.25 355.3
                C92.71 353.06 84.86 372.64 81.69 414.03Z" id="c2eKJ0THvs" />
            </g>
            <g id="p8" className="leaves">
              <path d="M63.45 315.6
                C41.01 278.35 25.89 264.69 18.09 274.62
                C10.29 284.55 25.41 298.21 63.45 315.6Z" id="baoJcAD17" />
              <path d="M66.19 314.88
                C109 302.53 126.49 290.73 118.66 279.5
                C110.83 268.26 93.34 280.05 66.19 314.88Z" id="c9c6lodmk" />
            </g>
            <g id="p9" className="leaves">
              <path d="M79.43 229.41
                C74.69 208.92 70.53 169.4 47.03 177.57
                C34.63 182.8 45.43 200.08 79.43 229.41Z" id="b230eXiP1y" />
              <path d="M81.53 229.67
                C126.98 232.9 146.57 227.88 140.31 214.61
                C134.04 201.34 114.45 206.36 81.53 229.67Z" id="d4R3SDEoD6" />
            </g>
            <g id="p10" className="leaves">
              <path d="M119.92 148.45
                C123.71 127.76 126.75 102.38 110.79 88
                C97.33 87.88 100.37 108.03 119.92 148.45Z" id="a33A4QE6gx" />
              <path d="M120.48 150.73
                C164.2 163.56 184.41 162.83 181.12 148.53
                C177.82 134.23 157.61 134.97 120.48 150.73Z" id="d5qrSMTE9a" />
            </g>
            <g id="p11" className="leaves">
              <path d="M186.79 87
                C207.54 48.79 211.67 28.84 199.15 27.14
                C186.64 25.44 182.52 45.39 186.79 87Z" id="b1AucuV9rq" />
              <path d="M187.69 90.25
                C225.37 111.49 244.33 115.14 244.57 101.17
                C244.82 87.21 225.86 83.57 187.69 90.25Z" id="f5QEHxlqgU" />
            </g>
            <g id="p12" className="leaves">
              <path d="M262.52 53.6
                C296.49 30.33 307.17 14.84 294.57 7.14
                C281.97 -0.56 271.29 14.92 262.52 53.6Z" id="b16AidPFaR" />
              <path d="M262.52 55.6
                C292.45 92.55 308.66 104.06 311.14 90.15
                C313.63 76.23 297.42 64.72 262.52 55.6Z" id="c2QYt4YJyx" />
            </g>
            <g id="p13" className="leaves">
              <path d="M350.72 42.05
                C393.78 36.2 407.07 33.83 402.6 19.81
                C393.99 8.63 376.7 16.05 350.72 42.05Z" id="l1iQhBDeOs" />
              <path d="M350.72 44.3
                C358.34 87.08 354.03 108.53 375.08 102.22
                C387.78 97.18 375.9 80.16 350.72 44.3Z" id="edh17AeUL" />
            </g>
            <g id="p14" className="leaves">
              <path d="M439.42 63.2
                C437.92 76.62 437.17 127.54 452.58 118.09
                C465.05 111.49 460.67 93.2 439.42 63.2Z" id="a2fnzjGzHM" />
              <path d="M439.88 61.96 
                C475.11 66.16 490.85 62.23 487.07 50.18
                C483.29 38.14 467.56 42.06 439.88 61.96Z" id="bIu9UzRE8" />
            </g>
            <g id="p15" className="leaves">
              <path d="M506.88 102.62
                C504.24 140.38 508.08 157.32 518.4 153.42
                C528.73 149.53 524.89 132.6 506.88 102.62Z" id="dVphJecI4" />
              <path d="M507.89 101.53
                C541.73 110.01 558.36 109.29 557.77 99.36
                C557.19 89.43 540.56 90.16 507.89 101.53Z" id="chDxq29KU" />
            </g>
            <g id="p16" className="leaves">
              <path d="M565.46 160.91
                C550.55 193.63 549.78 209.23 559.14 205.69
                C568.49 202.16 569.27 186.56 565.46 160.91Z" id="a16Nomlyp4" />
              <path d="M566.04 159.95
                C596.9 169.38 613.13 170.67 613.74 160.81
                C614.36 150.96 598.12 149.67 566.04 159.95Z" id="a1qH5c19Ah" />
            </g>
            <g id="p17" className="leaves">
              <path d="M592.12 217
                C572.6 237.78 567.55 250.32 576.96 254.64
                C586.37 258.95 591.42 246.4 592.12 217" id="b1tdKe2Stl" />
              <path d="M592.65 216.59
                C600.42 244.01 608.57 254.8 617.11 248.95
                C625.66 243.1 617.5 232.31 592.65 216.59Z" id="f5t62uOKXD" />
            </g>
          </g>
        </svg>
      </div>;
  }
}

export default Home;