import React, {Component} from 'react';
import Facebook_logo from '../../images/Facebook_logo.png';
import Instagram_logo from '../../images/Instagram_logo.png';
import Pinterest_logo from '../../images/Pinterest_logo.png';
import Carousel from '../Carousel/Carousel';

import './Home.css';

 class Home extends Component {
     render(){
    return (
        <div>
            <Carousel/>
            <div className="social-media-links">
                <a href="https://www.facebook.com/TheChritstmasTreeLady/"><img className="Facebook_logo" src={Facebook_logo} alt="Facebook_logo"/></a>
                <a href="https://www.instagram.com/ashleethechristmastreelady"><img className="Instagram_logo" src={Instagram_logo} alt="Instagram_logo"/></a>
                <a href="https://www.pinterest.com/thechristmastreelady/"><img className="Pinterest_logo" src={Pinterest_logo} alt="Pinterest_logo"/></a>
                <div className="review">
                    5 Star Review - Melanee Tracy - "This is the best thing ever I’ve always wanted to do something “different” than our normal style for tree.. my husband was very unsure of how it would turn out. He wasn’t thrilled with the idea of changing but I jumped in with both feet and went with it! And we both LOVE OUR TREE!! She makes it easy for anyone to use and understand!! Thank you!! We may need your help text year since I’ve decided we might need another tree!!"
                </div>
            </div>
        </div>
        )
    }   
} 
export default Home;