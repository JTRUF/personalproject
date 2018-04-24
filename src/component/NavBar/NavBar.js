import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/Logo.png';
import './NavBar.css';
import axios from 'axios';


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
            <header>
            <nav className="nav">
                    <div>
                        <img className="logo" src={logo} alt="logo"/>
                    </div>
                    <div>
                        {
                            this.state.user
                            ?
                            <a href='http://localhost:4000/logout' className='login'>Logout</a>
                            :
                            <a href='http://localhost:4000/auth' className='login'>Login</a>
                        }
                    </div>
                <div className='link-wrap'>
                    <Link to='/' className='Links'>Home</Link>
                    <Link to='/Services' className='Links'>Services</Link>
                    <Link to='/Products' className='Links'>Products</Link>
                    <Link to='/About' className='Links'>About</Link>
                    <Link to='/Contact' className='Links'>Contact</Link>
                    <Link to='/Shopping_Cart' className='Links'>Cart</Link>
                </div>
            </nav>
            </header>
        </div>
        )
    }
}