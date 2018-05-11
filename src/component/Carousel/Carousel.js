import React, {Component} from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import tree1 from '../../images/tree1.png';
import tree2 from '../../images/tree2.png';
import tree3 from '../../images/tree3.png';
import newTree1 from '../../images/newTree1.png';
import tree5 from '../../images/tree5.png';
import tree6 from '../../images/tree6.png';
import tree7 from '../../images/tree7.png';
import tree8 from '../../images/tree8.png';
import newTree2 from '../../images/newTree2.png';
import tree10 from '../../images/tree10.png';
import newTree3 from '../../images/newTree3.png';
import newTree4 from '../../images/newTree4.png';
import tree13 from '../../images/tree13.png';
import tree14 from '../../images/tree14.png';
import newTree5 from '../../images/newTree5.png';
import newTree6 from '../../images/newTree6.png';
import newTree7 from '../../images/newTree7.png';
import newTree8 from '../../images/newTree8.png';

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
                    <h3><img className="tree4" src={newTree1} alt="4" style={{width: 375, height: 500, padding: 10}}/></h3>
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
                    <h3><img className="tree9" src={newTree2} alt="9" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                  <div>
                    <h3><img className="tree10" src={tree10} alt="10" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                  <div>
                    <h3><img className="tree11" src={newTree3} alt="11" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                  <div>
                    <h3><img className="tree12" src={newTree4} alt="12" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                  <div>
                    <h3><img className="tree13" src={tree13} alt="13" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                  <div>
                    <h3><img className="tree14" src={tree14} alt="14" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                  <div>
                    <h3><img className="tree15" src={newTree5} alt="15" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                  <div>
                    <h3><img className="tree16" src={newTree6} alt="16" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                  <div>
                    <h3><img className="tree17" src={newTree7} alt="17" style={{width: 375, height: 500, padding: 10}}/></h3>
                  </div>
                  <div>
                    <h3><img className="tree18" src={newTree8} alt="18" style={{width: 375, height: 500, padding: 10}}/></h3>
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

