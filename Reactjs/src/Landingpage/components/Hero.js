import React from 'react'
import banner from "../../assets/magnifyelshaddai_banner.jpg"
import { ImageBanner } from '../styles';

function Hero() {
  return (

    <div style={{ position: "relative" }} >
      <ImageBanner>
        <img className="img" src={banner} />
        <div className="h1">An understanding room for the words of Living G_D</div>

        <div className="con">
          <p>
            You search the Scriptures,
            for in them you think you
            have eternal life; and
            these are they which
            testify of Me.
            <span>(John 5:39)</span>
          </p>
          <p>
            For assuredly, I say to you,
            till heaven and earth pass away,
            one jot(YOD) or one tittle will by
            no means pass from the law
            till all is fulfilled.
            <span>(Mathew 5:18)</span>
          </p>
          <p>
            I will worship toward Your holy temple,
            And praise Your name
            For Your lovingkindness and Your truth;
            For You have magnified Your word above all Your name.
            <span>(Psalms 138:2)</span>
          </p>

          <span>-	Jesus Christ</span>

        </div>

      </ImageBanner>
    </div>

  )
}

export default Hero;