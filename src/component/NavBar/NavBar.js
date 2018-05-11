import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/Logo3.png';
import './NavBar.css';
import axios from 'axios';
import cart from '../../images/cart.png';
// import Menu from 'react-icons/lib/md/menu';



export default class NavBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: null,
            showMenu: true
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }
    componentDidMount(){
        axios.get('/auth/me').then((res) => {
            this.setState({user: res.data})
        })
    }
    render() {
        let {showMenu} = this.state;
        let slideCSS = showMenu ? 'slide-menu slide-menu-position' : 'slide-menu';
        let textFadeCSS = showMenu ? 'menu-text menu-text-fade-in' : 'menu-text';
        let mobileLinks = showMenu ? 'box mobileLinks-slide' : 'box';
        let box2CSS = showMenu ? 'box box2-slide' : 'box';
        let box3CSS = showMenu ? 'box box3-slide' : 'box';
    return(
        <div>
            <div>
                <img className="logo" src={logo} alt="logo"/>
            </div>
            <header>
            <nav className="desktop-nav">
                <div className='link-wrap'>
                        {
                            this.state.user
                            ?
                            <a href={process.env.REACT_APP_LOGOUT} className='desktop-links'>Logout</a>
                            :
                            <a href={process.env.REACT_APP_LOGIN} className='desktop-links'>Login</a>
                        }
                    <Link to='/' className='desktop-links'>Home</Link>
                    <Link to='/Services' className='desktop-links'>Services</Link>
                    <Link to='/Products' className='desktop-links'>Products</Link>
                    <Link to='/About' className='desktop-links'>About</Link>
                    <Link to='/Contact' className='desktop-links'>Contact</Link>
                    <Link to='/Cart' className='desktop-links'><img className="cart" src={cart} alt="cart"></img></Link>
                </div>
            </nav>
            </header>
            <header className="mobile-header">
            <nav className="mobile-nav">
                        {/* <button className='nav-button' onClick={this.handleClick}>{showMenu ? <Menu/> : <Menu/>}</button> */}
                    <div className={slideCSS}>
                        <div className='mobile-link-wrap'>
                            {
                                this.state.user
                                ?
                                <a href={process.env.REACT_APP_LOGOUT} className='mobileLinks'>Logout</a>
                                :
                                <a href={process.env.REACT_APP_LOGIN} className='mobileLinks'>Login</a>
                            }
                        <Link to='/' className='mobileLinks'>Home</Link>
                        <Link to='/Services' className='mobileLinks'>Services</Link>
                        <Link to='/Products' className='mobileLinks'>Products</Link>
                        <Link to='/About' className='mobileLinks'>About</Link>
                        <Link to='/Contact' className='mobileLinks'>Contact</Link>
                        <Link to='/Cart' className='mobileLinks'><img className="mobile-cart" src={cart} alt="cart"></img></Link>
                        </div>
                    </div>
            </nav>
            </header>
        </div>
        )
    }
}