import React from 'react'
import '../styles/PictureGrid.css'
import BeefNoodleSoup from '../image/BeefNoodleSoup.png'
import PopcornChicken from '../image/PopcornChicken.png'
import BubbleTea from '../image/BubbleTea.png'
import TaiwanTravelMap from '../image/TaiwanTravelMap.png'
import TaiwanNightMarketFood from '../image/TaiwanNightMarketFood.png'
import TaiwanCulture from '../image/TaiwanCulture.png'
export default function TopSection() {
    return (
        <>

            <div className='PictureGridContainer'>

                <div>
                    <img src={TaiwanTravelMap} />
                    <h5>Traveling map</h5>
                    <p>Want to know where to travel? Check the top 100 location you should visit!</p>
                </div>

                <div>
                    <img src={TaiwanNightMarketFood} />
                    <h5>Night Market Food in Taiwan</h5>
                    <p>Check out the night market in Taiwan, and you would definitely fall in love with the food there!</p>
                </div>

                <div>
                    <img src={TaiwanCulture} />
                    <h5>Cultural event</h5>
                    <p>Dive into the culture and experience the local live-style.</p>
                </div>

            </div>
        </>
    )
}
