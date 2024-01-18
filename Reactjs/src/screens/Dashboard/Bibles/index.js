import React from 'react';

import img from './img/bible_img.jpg'
// import { styled } from 'styled-components';

const bibleColumns = {
width:'17.5rem'
  
}

const cardBody ={
  backgroundColor:"#c139b9",
  color:"white",
  borderRadius:"0 0 2px 2px"

}


function Bible() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='card text-center p-2 mb-2' style={{ backgroundColor: "#992e93" }}>
          <div className="card-text h4 fw-bold text-white"  > OLD TESTAMENT - பழைய ஏற்பாடு </div>
        </div>

        <div className="row gy-1 d-flex justify-content-center">

          <div className="col-md-3" style={bibleColumns} >
            <div class="card" style={{border: "1px solid #c139b9"}} >
              <img src={img} class="card-img-top" alt="..." />
              <div className="card-body" style={cardBody} >
                <h5 className="card-title text-center">Genesis - ஆதியாகமம்</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3" style={bibleColumns} >
            <div class="card" style={{border: "1px solid #c139b9"}} >
              <img src={img} class="card-img-top" alt="..." />
              <div className="card-body" style={cardBody} >
                <h5 className="card-title text-center">Exodus - யாத்திராகமம்</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={bibleColumns} >
            <div class="card" style={{border: "1px solid #c139b9"}} >
              <img src={img} class="card-img-top" alt="..." />
              <div className="card-body" style={cardBody} >
                <h5 className="card-title text-center">Leviticus - லேவியராகமம்</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={bibleColumns} >
            <div class="card" style={{border: "1px solid #c139b9"}} >
              <img src={img} class="card-img-top" alt="..." />
              <div className="card-body" style={cardBody} >
                <h5 className="card-title text-center">Numbers - எண்ணாகமம்</h5>
              </div>
            </div>
          </div>






          

        </div>




        {/* <BWTTable bordered hover className="mt-4" style={{ borderColor: "rgba(0, 0, 0, 0.5)" }}>
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
              <td>The Gospel According to Mary Magdalene</td>
              <td>John</td>
              <td>08-Jul-2023</td>
              <td>download</td>
            </tr>
            <tr>
              <td>The 31 Ways to build a Spiritual Prayer</td>
              <td>John</td>
              <td>22-Jul-2023</td>
              <td>download</td>
            </tr>

          </tbody>
        </BWTTable> */}

      </div>
    </div>
  )
}

export default Bible