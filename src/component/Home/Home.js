import React, {Component} from 'react';
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import pinterest from '../../images/pinterest.svg';
import Carousel from '../Carousel/Carousel';
import fiveStars from '../../images/fiveStars.png';

import './Home.css';

 class Home extends Component {
     render(){
    return (
        <div>
            <Carousel/>
            <div className="social-media-links">

                <a href="https://www.facebook.com/TheChritstmasTreeLady/" target="_blank"><img className="Facebook_logo" src={facebook} alt="Facebook_logo"/></a>

                <a href="https://www.instagram.com/ashleethechristmastreelady" target="_blank"><img className="Instagram_logo" src={instagram} alt="Instagram_logo"/></a>

                <a href="https://www.pinterest.com/thechristmastreelady/" target="_blank"><img className="Pinterest_logo" src={pinterest} alt="Pinterest_logo"/></a>

                <div className="review">
                    "This is the best thing ever I’ve always wanted to do something “different” than our normal style for tree.. my husband was very unsure of how it would turn out. He wasn’t thrilled with the idea of changing but I jumped in with both feet and went with it! And we both LOVE OUR TREE!! She makes it easy for anyone to use and understand!! Thank you!! We may need your help text year since I’ve decided we might need another tree!!"
                </div>
                <img className="stars" src={fiveStars} alt="fiveStars"/>
            </div>
        </div>
        )
    }   
} 
export default Home;