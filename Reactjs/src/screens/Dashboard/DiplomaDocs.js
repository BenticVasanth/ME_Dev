import React from 'react'
import { BwtButton } from '../../components/Button'
import { styled } from 'styled-components';
import CourseMaterialsBanner from '../../assets/Bible Course/CourseMaterialsBanner.jpg'
import { BWTTable } from '../../components/Tables';
import { FaDownload } from 'react-icons/fa';

const PanelHeading = styled.div`
  color: #000;
  background-color: #f5cbf2;
  border-color: #992e93;
  font-weight: bold;
  font-size: 18px;
  padding: 15px;
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

// const BibleCourse = {
//   marginTop:"10px",
// }



function DiplomaDocs() {
  return (

    <div>
      <div className="container-fluid">

        <div className="row mb-2">
          <img src={CourseMaterialsBanner} alt="" />
        </div>


        <div className="row m-0 ">
          <div className="col-md-12 p-0">
            <PanelGroup className='mt-2 m-0 p-0'>
              < PanelHeading>Diploma in Bible Course Syllabus and Brochure</PanelHeading>
              <PanelBody className='d-flex justify-content-center'>
                <div className="col-md-6 d-flex justify-content-center">
                  <BwtButton>Syllabus</BwtButton>
                </div>

                <div className="col-md-6  d-flex justify-content-center">
                  <BwtButton>Brochure</BwtButton>
                </div>

              </PanelBody>
            </PanelGroup>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <PanelGroup className='mt-2 m-0 p-0'>
              < PanelHeading>Semester - 1</PanelHeading>
              <PanelBody className='d-flex justify-content-center'>
                
              <BWTTable bordered hover className="mt-4" style={{ borderColor: "rgba(0, 0, 0, 0.5)" }}>
          <thead  >
            <tr >
              <th>S.No</th>
              <th>Title</th>
              <th>Download </th>
            </tr>
          </thead>
          <tbody>
            <tr  >
              <td className='text-center'>1	</td>
              <td>PRT_Introduction to the Bible and the Pentateuch Books and Notes</td>
              <td style={{textAlign:"center",fontSize:'20px'}}><FaDownload type='button' /></td>
            </tr>
            <tr>
              <td className='text-center'>2</td>
              <td>PRT_Psalms and Wisdom Literatures Books</td>
              <td style={{textAlign:"center",fontSize:'20px'}}><FaDownload type='button' /></td>
            </tr>
            <tr>
              <td className='text-center'>3</td>
              <td>PRT_Historic and Prophetic Literatures Books</td>
              <td style={{textAlign:"center",fontSize:'20px'}}><FaDownload type='button' /></td>
            </tr>

          </tbody>
        </BWTTable>

              </PanelBody>
            </PanelGroup>
          </div>
        </div>



      </div>

    </div>



  )
}

export default DiplomaDocs