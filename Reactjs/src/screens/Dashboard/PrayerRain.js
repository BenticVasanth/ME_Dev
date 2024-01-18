import React from 'react'
import { BwtButton } from '../../components/Button'
import { BWTTable } from '../../components/Tables'
import { FaDownload } from "react-icons/fa";

function PrayerRain() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='card text-center p-2' style={{ backgroundColor: "#992e93" }}>
          <div className="card-text h4 fw-bold text-white"  > PRAYER RAIN </div>
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

              <th>Prayer Rain ID</th>
              <th>Title</th>
              <th>Date</th>
              <th>Download </th>


            </tr>
          </thead>
          <tbody>
            <tr  >
              <td>PR00117</td>
              <td>வெட்கப்பட்டுப் போகாதபடிக்கு உமது பரிசுத்த ஆவியை எங்கள் இருதயத்தில் ஊற்றும்.</td>
              <td>12-Feb-2022</td>
              <td style={{textAlign:"center",fontSize:'20px'}}><FaDownload type='button' /></td>
            </tr>
            <tr>
            <td>PR00117</td>
              <td>வெட்கப்பட்டுப் போகாதபடிக்கு உமது பரிசுத்த ஆவியை எங்கள் இருதயத்தில் ஊற்றும்.</td>
              <td>12-Feb-2022</td>
              <td style={{textAlign:"center",fontSize:'20px'}}><FaDownload type='button' /></td>
            </tr>

          </tbody>
        </BWTTable>

      </div>
    </div>
  )
}

export default PrayerRain