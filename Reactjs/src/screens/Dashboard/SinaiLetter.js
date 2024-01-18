import React from 'react'
import { styled } from 'styled-components'
import Sinai_Letters_Poster from "../../assets/sinai letter/Sinai_Letters_Poster.jpg"
import Sinai_Letters_Logo from "../../assets/sinai letter/Sinai_Letters_Logo.png"
import img1 from "../../assets/sinai letter/SinaiLetter104_18May2021193713 (1).jpg"
import img2 from "../../assets/sinai letter/SinaiLetter105_18May2021193731.jpg"
import img3 from "../../assets/sinai letter/SinaiLetter106_18May2021193753.jpg"
import img4 from "../../assets/sinai letter/SinaiLetter127_28Aug2021035321.jpg"
import img5 from "../../assets/sinai letter/SinaiLetter128_22Sep2021085817.jpg"
import img6 from "../../assets/sinai letter/SinaiLetter132_05Dec2021213430.jpg"



const SinaiHeader = styled.div`
  width: 100%;
  margin-bottom: 2%;
  border-bottom: 3px solid #9c3816;
  box-shadow: 0px 8px 8px #1b458c;
  display: inline-block;
  position: relative;
`

const SinaiBanner = styled.div`
  background-image: url(${Sinai_Letters_Poster});
  padding-bottom: 33%;
  background-size: 100% 100%;
  width: 60%;
`

const SinaiHeaderImg = {
  width: "33%",
  margin: "0px 0px",
  position: "absolute",
  backgroundColor: "#ffffff",
  left: " 63%",
  top: "5px"
}

const PhotoGallery = styled.div`
  color:#313437;
  background-color:#fff;
`

// const PhotoGalleryP = {
//   color:"#7d8285"
// }

// const PhotoGalleryH2 = {
//   fontWeight:'bold',
//   marginBottom:'40px',
//   paddingTop:'40px',
//   color:'inherit',
// }



function SinaiLetter() {
  return (
    <div>
      <SinaiHeader>
        <SinaiBanner>
          <img src={Sinai_Letters_Logo} alt="Sinai Letters logo" style={SinaiHeaderImg} className="sinai-letters-img" />
        </SinaiBanner>
      </SinaiHeader>


      <PhotoGallery>

      </PhotoGallery>
      <div className="photo-gallery">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Lightbox Gallery</h2>
            <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
          </div>
          <div className="row photos">
            <div className="col-sm-6 col-md-4 col-lg-3 item"><a href={img1} data-lightbox="photos"><img className="img-fluid" src={img1} /></a></div>
            <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="assets/img/building.jpg" data-lightbox="photos"><img className="img-fluid" src="assets/img/building.jpg" /></a></div>
            <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="assets/img/loft.jpg" data-lightbox="photos"><img className="img-fluid" src="assets/img/loft.jpg" /></a></div>
            <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="assets/img/building.jpg" data-lightbox="photos"><img className="img-fluid" src="assets/img/building.jpg" /></a></div>
            <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="assets/img/loft.jpg" data-lightbox="photos"><img className="img-fluid" src="assets/img/loft.jpg" /></a></div>
            <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="assets/img/desk.jpg" data-lightbox="photos"><img className="img-fluid" src="assets/img/desk.jpg" /></a></div>
          </div>
        </div>
      </div>





    </div>




  )
}

export default SinaiLetter