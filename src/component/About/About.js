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
                About Me:
            </span>
        </div>
    )
} 