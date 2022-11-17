import React from 'react'
import '../styles/TopSection2.css'
import Taipei101 from '../image/Taipei101Long.png'
export default function TopSection() {
    return (
        <>
            <div className='TopSectionContainer'>
                <div>
                    <img className='TopSectionPic' src={Taipei101} />
                    <div className='TopSectionText'>Explore Taiwan <br />Travel . Cuisine . Culture</div>
                    <div className='BannerBtn'>
                        <div className='LearnMoreBtn'>Learn More</div>
                        <div className='SignUpBtn'>Sign Up</div>
                    </div>
                </div>
            </div>
        </>
    )
}
