import React, {Component} from 'react';
import './Contact.css';
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import pinterest from '../../images/pinterest.svg';
import axios from 'axios';


class Contact extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
        this.handleSend = this.handleSend.bind(this)
        this.handleInputChangeName = this.handleInputChangeName.bind(this)
        this.handleInputChangeEmail = this.handleInputChangeEmail.bind(this)
        this.handleInputChangeSubject = this.handleInputChangeSubject.bind(this)
        this.handleInputChangeMessage = this.handleInputChangeMessage.bind(this)
    }


    handleSend(){
        var {name, email, subject, message} = this.state
        axios.post(`/api/sendEmail/?name=${name}&email=${email}&subject=${subject}&message=${message}`).then(res => {
            this.setState({message: res.data})
        })
    }
    handleInputChangeName(value){
        this.setState({name: value})
    }
    handleInputChangeEmail(value){
        this.setState({email: value})
    }
    handleInputChangeSubject(value){
        this.setState({subject: value})
    }
    handleInputChangeMessage(value){
        this.setState({message: value})
    }

render() {
    return (
    <div>
            <h1 className="header">Contact Information</h1>
        <div className="container">
            <span className="left">
                <p>Email</p>
                <p>Address</p>
                <p><a href="https://www.facebook.com/TheChritstmasTreeLady/"><img className="Facebook_logo" src={facebook} alt="Facebook_logo"/></a></p>
                <p><a href="https://www.instagram.com/ashleethechristmastreelady"><img className="Instagram_logo" src={instagram} alt="Instagram_logo"/></a></p>
                <p><a href="https://www.pinterest.com/thechristmastreelady/"><img className="Pinterest_logo" src={pinterest} alt="Pinterest_logo"/></a></p>
            </span>
            <span className="middle">
                <p>ashleethechristmastreelady@gmail.com</p>
                <p>Salt Lake City, Utah area</p>
                <p>Like us on Facebook</p>
                <p>Follow on Instagram</p>
                <p>Follow on Pinterest</p>
            </span>
            <span className="right">
                <input className="name" placeholder="Full Name" onChange={(e) => this.handleInputChangeName(e.target.value)}/>
                <input className="email" placeholder="Email" onChange={(e) => this.handleInputChangeEmail(e.target.value)}/>
                <input className="subject" placeholder="Subject" onChange={(e) => this.handleInputChangeSubject(e.target.value)}/>
                <textarea rows="4" cols="50" className="message" placeholder="Message: -- Please include email address in message body" onChange={(e) => this.handleInputChangeMessage(e.target.value)}/>
                <button className="send" onClick={this.handleSend}><h2>Send</h2></button>
            </span>
        </div>
    </div>
       )
    }
}

export default Contact;