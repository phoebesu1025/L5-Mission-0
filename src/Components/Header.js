import React from 'react'
import '../styles/Header.css'
import Logo from '../image/Logo.png'

export default function ㄑHeader() {
    return (
        <div className='HeaderContainer'>
            <div className='HeaderLeftSection'>
                <img src={Logo} width='30px' />
                <div>101 Food Blog</div>
            </div>
            <div className='HeaderRightSection'>
                <div>Home</div>
                <div>Recipe</div>
                <div>News</div>
                <div className='LogInButton'>Log In</div>
            </div>






        </div>
    )
}

