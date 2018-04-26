import React from 'react';
import './About.css';
import ashlee from '../../images/ashlee.jpeg'

export default function About_Me() {
    return (
        <div className="all">
            <span className="image">
                <img className="image" src={ashlee} alt="img"/>
            </span>
            <span className="about-me">
                <h1>About Me</h1> 
                <h2>I love to help people make their Christmas Tree look how they've always imagined!</h2>
                <h2>I Design and Decorate Christmas Trees and I sell DIY Christmas Tree Kits!</h2>
            </span>
        </div>
    )
} 