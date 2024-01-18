import React from 'react'
import { BwtButton } from '../../components/Button'
import { styled } from 'styled-components';


const PanelHeading = styled.div`
  color: #000;
  background-color: #f5cbf2;
  border-color: #992e93;
  font-weight: bold;
  font-size: 18px;
  padding-left: 15px;
  border-radius: 5px 5px 0 0;
`
const PanelBody = styled.div`
padding: 15px;
`

const PanelGroup = styled.div`
  
border-color: #992e93;

  border-radius: 5px 5px;
  border: 1px solid #ddd;
`


function FastingDocs() {
  return (
    
    <div>
      <div className='container-fluid'>
        <div className='card text-center p-2' style={{ backgroundColor: "#992e93" }}>
          <div className="card-text h4 fw-bold text-white"  > FASTING PRAYER DOCUMENTS </div>
        </div>



        <div className="row m-0 ">
          <div className="col-md-6">
            <PanelGroup className='mt-2 m-0 p-0'>
              < PanelHeading>31-Aug-2022</PanelHeading>
              <PanelBody className='d-flex justify-content-center'>
                <BwtButton>FASTING PRAYER </BwtButton>
              </PanelBody>
            </PanelGroup>
          </div>

          <div className="col-md-6">
            <PanelGroup className='mt-2 m-0 p-0 '>
              < PanelHeading>10-Jan-2021</PanelHeading>
              <PanelBody className='d-flex justify-content-center'>
                <BwtButton>FASTING PRAYER </BwtButton>
              </PanelBody>
            </PanelGroup>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FastingDocs