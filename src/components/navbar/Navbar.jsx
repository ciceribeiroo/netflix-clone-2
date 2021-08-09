import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import './Navbar.scss'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null);
    }
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"></Search>
                    <span>KID</span>
                    <Notifications className="icon"></Notifications>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
                    <div className="profile">
                        <ArrowDropDown className="icon"></ArrowDropDown>
                        <div className="options">
                           <span>Settings</span> 
                           <span>Logout</span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
