import React from 'react';
import './About.css';
import ashlee from '../../images/ashlee.jpeg';
import picBackground from '../../images/picBackground.jpeg';

export default function About_Me() {
    return (
        <div className="all">
            <span className="image-span">
                    <img className="pic-background" src={picBackground} alt="back"/>
                    <img className="image" src={ashlee} alt="img"/>
            </span>
            <span className="about-me">
                <h1>About Me</h1> 
                <h2 className="main-text">I have been decorating for about 8 years and it makes my heart so happy! I have 2 amazing kids, 2 crazy dogs and one amazing life that I get to share with my best friend. Christmas has always been one of my favorite Holidays. Not because the presents, but because the traditions and the magic of the season! I love to help people make their Christmas Tree look how they've always imagined without breaking the bank! I Design and Decorate Christmas Trees and I sell DIY Christmas Tree Kits. </h2>
                <h2>I am the Christmas Tree lady</h2>
            </span>
        </div>
    )
} 