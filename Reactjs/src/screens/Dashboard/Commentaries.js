import React from 'react'
import { styled } from 'styled-components'
import { BwtButton } from '../../components/Button'
import { Table } from 'react-bootstrap'
import { BWTTable } from '../../components/Tables'
import { FaDownload } from "react-icons/fa";



function Commentaries() {
  return (
    // <div  className='text-center'>Commentaries !</div>

    <div>
      <div className='container-fluid'>
        <div className='card text-center p-2' style={{ backgroundColor: "#992e93" }}>
          <div className="card-text h4 fw-bold text-white"  > BIBLE COMMENTARIES</div>
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
              <td>Exposition-of-the-Gospel-of-John</td>
              <td>Arthur W Pink</td>
              <td>21-Feb-2023</td>
              <td style={{textAlign:"center",fontSize:'20px'}}><FaDownload type='button' /></td>
            </tr>
            <tr>
              <td>The Expository Commendatory of the Book of Isaiah</td>
              <td></td>
              <td>14-Dec-2022</td>
              <td style={{textAlign:"center",fontSize:'20px'}}><FaDownload type='button' /></td>
            </tr>

          </tbody>
        </BWTTable>

      </div>
    </div>
  )
}

export default Commentaries