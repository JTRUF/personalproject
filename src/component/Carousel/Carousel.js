import React, {Component} from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import tree1 from '../../images/tree1.png';
import tree2 from '../../images/tree2.png';
import tree3 from '../../images/tree3.png';
import tree4 from '../../images/tree4.png';
import tree5 from '../../images/tree5.png';
import tree6 from '../../images/tree6.png';
import tree7 from '../../images/tree7.png';
import tree8 from '../../images/tree8.png';
import tree9 from '../../images/tree9.png';
import tree10 from '../../images/tree10.png';
import tree11 from '../../images/tree11.png';
import tree12 from '../../images/tree12.png';
import tree13 from '../../images/tree13.png';
import tree14 from '../../images/tree14.png';

class Carousel extends Component {
      constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
      }
      play() {
        this.slider.slickPlay();
      }
      pause() {
        this.slider.slickPause();
      }
    render() {
        var settings = {
            className: "center",
            centerMode: true,
            dots: true,
            infinite: true,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide: true,
            autoplay: true,
            speed: 1000,
            autoPlaySpeed: 1000,
            cssEase: "linear",
            adaptiveHeight: true,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 415,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                  centerPadding: '10px'
                }
              }
            ]
        };
        return(
          <div>
                <Slider ref={slider => (this.slider = slider)}{...settings}>
                  <div>
                    <h3><img className="tree1" src={tree1} alt="1" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                  <div>
                    <h3><img className="tree2" src={tree2} alt="2" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                  <div>
                    <h3><img className="tree3" src={tree3} alt="3" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                  <div>
                    <h3><img className="tree4" src={tree4} alt="4" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                  <div>
                    <h3><img className="tree5" src={tree5} alt="5" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                  <div>
                    <h3><img className="tree6" src={tree6} alt="6" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                  <div>
                    <h3><img className="tree7" src={tree7} alt="7" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                  <div>
                    <h3><img className="tree8" src={tree8} alt="8" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                  <div>
                    <h3><img className="tree9" src={tree9} alt="9" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                  <div>
                    <h3><img className="tree10" src={tree10} alt="10" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                  <div>
                    <h3><img className="tree11" src={tree11} alt="11" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                  <div>
                    <h3><img className="tree12" src={tree12} alt="12" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                  <div>
                    <h3><img className="tree13" src={tree13} alt="13" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                  <div>
                    <h3><img className="tree14" src={tree14} alt="14" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                </Slider>
                <div style={{ textAlign: "center"}} className="buttons">
                  <button className="play" style={{padding: 5, paddingLeft: 8, fontSize: 15}} onClick={this.play}>
                  Play
                  </button>
                  <button className="button" style={{padding: 5, marginLeft: 5, fontSize: 15}} onClick={this.pause}>
                  Pause
                  </button>
                </div>
              </div>
        )
    }
}
export default Carousel;

