import React from 'react'
import '../styles/PictureGrid.css'
import BeefNoodleSoup from '../image/BeefNoodleSoup.png'
import PopcornChicken from '../image/PopcornChicken.png'
import BubbleTea from '../image/BubbleTea.png'
export default function TopSection() {
    return (
        <>

            <div className='PictureGridContainer'>

                <div><img src={BeefNoodleSoup} />
                    <h5>Beef Noodle Soup</h5>
                    <p>
                        Beef Brisket, with soysauce, tomato base broth with Veg.....
                    </p>
                </div>

                <div><img src={PopcornChicken} />
                    <h5>Popcorn Chicken</h5>
                    <p>
                        Marinated with 13 secret spices for 24H...
                    </p>
                </div>

                <div><img src={BubbleTea} />
                    <h5>
                        Bubble Tea
                    </h5>
                    <p>Traditional Pearl(Tapioca) ball with milk tea...</p>
                </div>





            </div>





        </>
    )
}
