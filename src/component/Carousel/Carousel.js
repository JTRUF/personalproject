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
    render() {
        var settings = {
            dots: true,
            infinite: true,
            arrows: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide: true,
            autoPlay: true,
            autoPlaySpeed: 1000
        };
        return(
                <Slider {...settings}>
                  <div>
                    <h3><img className="tree1" src={tree1} alt="1"/></h3>
                  </div>
                  <div>
                    <h3><img className="tree2" src={tree2} alt="2"/></h3>
                  </div>
                  <div>
                    <h3><img className="tree3" src={tree3} alt="3"/></h3>
                  </div>
                  <div>
                    <h3><img className="tree4" src={tree4} alt="4"/></h3>
                  </div>
                  <div>
                    <h3><img className="tree5" src={tree5} alt="5"/></h3>
                  </div>
                  <div>
                    <h3><img className="tree6" src={tree6} alt="6"/></h3>
                  </div>
                  <div>
                    <h3><img className="tree7" src={tree7} alt="7"/></h3>
                  </div>
                  <div>
                    <h3><img className="tree8" src={tree8} alt="8"/></h3>
                  </div>
                  <div>
                    <h3><img className="tree9" src={tree9} alt="9"/></h3>
                  </div>
                  <div>
                    <h3><img className="tree10" src={tree10} alt="10"/></h3>
                  </div>
                  <div>
                    <h3><img className="tree11" src={tree11} alt="11"/></h3>
                  </div>
                  <div>
                    <h3><img className="tree12" src={tree12} alt="12"/></h3>
                  </div>
                  <div>
                    <h3><img className="tree13" src={tree13} alt="13"/></h3>
                  </div>
                  <div>
                    <h3><img className="tree14" src={tree14} alt="14"/></h3>
                  </div>
                </Slider>
        )
    }
}
export default Carousel;

