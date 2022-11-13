import React from 'react'
import '../styles/PictureGrid.css'
import BeefNoodleSoup from '../image/BeefNoodleSoup.png'
import PopcornChicken from '../image/PopcornChicken.png'
import BubbleTea from '../image/BubbleTea.png'
export default function TopSection() {
    return (
        <>
            <div className='PictureGridContainer'>
                <div><img src={BeefNoodleSoup} /><aside>Beef Noodle Soup</aside></div>
                <div><img src={PopcornChicken} /><aside>Popcorn Chicken</aside></div>
                <div><img src={BubbleTea} /><aside>Bubble Tea</aside></div>





            </div>





        </>
    )
}
