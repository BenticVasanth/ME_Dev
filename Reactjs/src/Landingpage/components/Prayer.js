import React from 'react'
import bwtlogo from "../../assets/BWT_Logo_Color.jpg"
import tamillogo from "../../assets/tamil.png"
import { PrayerWord } from '../styles'


function Prayer() {

    return (
        <div className='container-fluid'>
            <PrayerWord>
                <div className='row' >
                    <div className='col-md-4 text-center' style={{ padding: "70px 15px" }} >
                        <img src={bwtlogo} style={{ maxWidth: "75%", height: "auto" }} />
                    </div>


                    <div className="col-md-4">
                        <div className='text-center'>
                            <h2>PRAYER</h2>
                            The law of the Lord is <span>perfect</span>, converting the soul;<br />
                            The testimony of the Lord is <span>sure</span>, making wise the simple;<br />
                            The statutes of the Lord are <span>right</span>, rejoicing the heart;<br />
                            The commandment of the Lord is <span>pure</span>, enlightening the eyes;<br />
                            The fear of the Lord is <span>clean</span>, enduring forever;<br />
                            The judgments of the Lord are true and righteous altogether.<br />
                            More to be desired are they than gold, Yea, than much fine gold;<br />
                            Sweeter also than honey and the honeycomb.<br />
                            Moreover by them your servant is warned, and in keeping them there is great reward.<br />
                            <b>Psalms 19:7-11</b>
                        </div>
                    </div>

                    <div className='col-md-4 text-center' style={{ padding: "70px 15px" }} >
                        <img src={tamillogo} style={{ maxWidth: "75%", height: "auto" }} />
                    </div>
                </div>
            </PrayerWord>
        </div>
    )
}

export default Prayer