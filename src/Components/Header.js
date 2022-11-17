import React from 'react'
import '../styles/Header.css'
import Logo from '../image/Logo.png'
import SearchIcon from '../image/750px-Search_Icon.svg.png'

export default function Header() {
    return (
        <div className='HeaderContainer'>
            <div className='HeaderLeftSection'>
                <div><img src={Logo} width='30px' /></div>
                <div className='LogoText'>Formosa Backpacker </div>
            </div>

            <div className='HeaderRightSection'>
                <div>Home</div>
                <div>About Us</div>
                <div>Travel</div>
                <div>Cuisine</div>
                <div>Culture</div>
                <div>News</div>
                <div className='LogInButton'>Log In</div>
            </div>

            <div className='SearchBar'>
                <input type='text' placeholder='Search ' />
                <button><img src={SearchIcon} width='20px' /></button>
            </div>

        </div>
    )
}

