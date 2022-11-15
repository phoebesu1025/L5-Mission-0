import React from 'react'
import '../styles/TopSection.css'
import Taipei101 from '../image/Taipei101Long.png'
export default function TopSection() {
    return (
        <>
            <div className='TopSectionContainer'>
                <div>
                    <img className='TopSectionPic' src={Taipei101} />
                    <div className='SearchingBar'><input type='text' placeholder='Search for the Recipe' />
                        <button>Search</button>
                    </div>
                </div>




            </div>





        </>
    )
}
