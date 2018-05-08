import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/Logo.png';
import './NavBar.css';
import axios from 'axios';
import cart from '../../images/cart.png';


export default class NavBar extends Component {
    constructor(){
        super()
        this.state = {
            user: null
        }
    }
    componentDidMount(){
        axios.get('/auth/me').then((res) => {
            this.setState({user: res.data})
        })
    }
    render() {
    return(
        <div>
            <div>
                <img className="logo" src={logo} alt="logo"/>
            </div>
            <header>
            <nav className="nav">
                <div className='link-wrap'>
                        {
                            this.state.user
                            ?
                            <a href='http://localhost:4000/logout' className='Links'>Logout</a>
                            :
                            <a href='http://localhost:4000/auth' className='Links'>Login</a>
                        }
                    <Link to='/' className='Links'>Home</Link>
                    <Link to='/Services' className='Links'>Services</Link>
                    <Link to='/Products' className='Links'>Products</Link>
                    <Link to='/About' className='Links'>About</Link>
                    <Link to='/Contact' className='Links'>Contact</Link>
                    <Link to='/Cart' className='Links'><img className="cart" src={cart} alt="cart"></img></Link>
                </div>
            </nav>
            </header>
        </div>
        )
    }
}