import React from 'react'
import '../styles/TopSection.css'
import Taipei101 from '../image/Taipei101Long.png'
export default function TopSection() {
    return (
        <>
            <div className='TopSectionContainer'>
                <img className='TopSectionPic' src={Taipei101} />
                <div className='SearchingBar'><input type='text' placeholder='Search for Recipe' />
                    <button>Search</button>
                </div>




            </div>





        </>
    )
}
