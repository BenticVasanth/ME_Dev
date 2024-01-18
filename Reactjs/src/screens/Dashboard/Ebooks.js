import React from 'react'
import { BwtButton } from '../../components/Button'
import { BWTTable } from '../../components/Tables'
import { FaDownload } from "react-icons/fa";

function Ebooks() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='card text-center p-2' style={{ backgroundColor: "#992e93" }}>
          <div className="card-text h4 fw-bold text-white"  > E-BOOKS </div>
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

              <th>Book Name</th>
              <th>Author</th>
              <th>Date</th>
              <th>Download </th>


            </tr>
          </thead>
          <tbody>
            <tr  >
              <td>The Real Name of God_ Embracing the Full Essence of the Divine-Inner Traditions</td>
              <td>Rabbi Wayne Dosick</td>
              <td>07-Jul-2023</td>
              <td style={{textAlign:"center",fontSize:'20px'}}><FaDownload type='button' /></td>
            </tr>
            <tr>
              <td>The Gospel According to Mary Magdalene</td>
              <td>Christopher Tuckett</td>
              <td>07-Jul-2023</td>
              <td style={{textAlign:"center",fontSize:'20px'}}><FaDownload type='button' /></td>
            </tr>

          </tbody>
        </BWTTable>

      </div>
    </div>
  )
}

export default Ebooks