import { styled } from 'styled-components'

export const ImageBanner = styled.div`
  .img {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 80vh;
    font-size: 36px;
  }

  .h1 {
    position: absolute;
    top: 15%;
    left: 30%;
    transform: translate(-20%, -50%);
    font-weight: 500;
    color: #000;
  }

  .con {
    position: absolute;
    top: 50%;
    left: 58%;
    transform: translate(-50%, -50%);
    font-weight: 500;
    color: #000;
  }

  @media (max-width: 768px) {
    .h1 {
      position: inherit !important;
      top: inherit !important;
      left: inherit !important;
      transform: inherit !important;
      padding: 20px;
      text-align: left;
      font-size: 23px !important;
      font-weight: bold !important;
      margin-bottom: -10px;
    }

    .con {
      position: inherit !important;
      top: inherit !important;
      left: inherit !important;
      transform: inherit !important;
      padding: 20px;
      text-align: left;
      font-size: 14px !important;
    }
  }
`;

export const PrayerWord = styled.div`
width: 100%;
text-align: center;
margin-top: 70px;
background: #ededed;
padding: 60px 0px;
margin-right: 0px;
margin-left: 0px;
`;

export const FooterStyle = styled.div`
	background-color: #1e1c18;
	padding-top: 60px;
	padding-bottom: 60px;
	margin-top: 20px;
`;
export const FooterBlock = styled.div`
 	background-color: #282725;
	padding: 40px 40px 10px 40px;
	border-radius: 10px;
  color:#fff;
`;
export const FooterCopyRights = styled.div`

	padding-top: 19px;
	padding-bottom: 9px;
	font-size: 12px;
	color: #56575e;
	text-align: left;
	text-transform: uppercase;
	text-align: center;

 .copyright-content {
    padding: 12px;
    color: rgb(253,187,21,0.7);
  }
  
 `


export const Section = styled.section`
  
display: inline-block;
width: 100%;

`;