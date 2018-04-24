import React, {Component} from 'react';
import './Contact.css';
import Facebook_logo from '../../images/Facebook_logo.png';
import Instagram_logo from '../../images/Instagram_logo.png';

class Contact extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

render() {
    return (
        <body>
        <div className="container">
            <h1>Contact Information</h1>
            <span className="left">
                <p>Email</p>
                <p>Address</p>
                <p><a href="https://www.facebook.com/TheChritstmasTreeLady/"><img className="Facebook_logo" src={Facebook_logo} alt="Facebook_logo"/></a></p>
                <p><a href="https://www.instagram.com/ashleethechristmastreelady"><img className="Instagram_logo" src={Instagram_logo} alt="Instagram_logo"/></a></p>
            </span>
            <span className="middle">
                <p>ashleethechristmastreelady@gmail.com</p>
                <p>Salt Lake City, Utah area</p>
                <p>Like us on Facebook</p>
                <p>Follow on Instagram</p>
            </span>
            <span className="right">
                <input placeholder="Full Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <input placeholder="Message:"/>
                <button>Send</button>
            </span>
        </div>
        </body>
       )
    }
}

export default Contact;