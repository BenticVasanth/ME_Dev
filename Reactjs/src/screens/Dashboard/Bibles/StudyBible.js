import React from 'react'
import { styled } from 'styled-components'
import { BwtButton } from '../../../components/Button'
// import { Table } from 'react-bootstrap'
import { BWTTable } from '../../../components/Tables'
import { FaDownload } from "react-icons/fa";


function StudyBible() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='card text-center p-2' style={{ backgroundColor: "#992e93" }}>
          <div className="card-text h4 fw-bold text-white"  > STUDY BIBLES</div>
        </div>
        
        <form className="navbar-form navbar-left mt-2"  >
          <div className="form-group">
            <input type="text" name="search" value="" style={{ width: '250px', float: "left", marginBottom: "0px" }} className="form-control" placeholder="search" />
          </div>
          <BwtButton type="submit" value="Search"  >Search</BwtButton>
        </form>


        <BWTTable bordered hover className="mt-4" style={{ borderColor: "rgba(0, 0, 0, 0.5)" }}>
          <thead  >
            <tr  >

              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
              <th>Download </th>


            </tr>
          </thead>
          <tbody>
            <tr  >
              <td>JPS Hebrew-English Tanakh_ The Traditional Hebrew Text and the New JPS Translation</td>
              <td></td>
              <td>15-Oct-2022</td>
              <td style={{textAlign:"center",fontSize:'20px'}}><FaDownload type='button' /></td>
            </tr>
            <tr>
              <td>The Jerusalem Talmud_ A Translation and Commentary</td>
              <td></td>
              <td>5-Oct-2022</td>
              <td style={{textAlign:"center",fontSize:'20px'}}><FaDownload type='button' /></td>
            </tr>

          </tbody>
        </BWTTable>

      </div>
    </div>
  )
}

export default StudyBible