import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { BwtButton } from '../../components/Button'
import { Table } from 'react-bootstrap'
import { BWTTable } from '../../components/Tables'
// import { FaDownload } from "react-icons/fa";
import axios from 'axios'
import dataa from '../../TestJSON.json'

const Quotes = styled.h6`
margin-top:20px;
margin-bottom:10px;
	text-align: center;
	color: blue;
	font-weight: 500;
	text-transform: none;
	display: inline-block;
	width: 98%;
	font-size: 20px;
	line-height: 30px;
`
function Sabbathdocs() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/Users')
      .then(res => setData(res.data))
  })

  // const [item, setItem] = useState('render');
  // // console.log('render before')
  // useEffect(() => {
  //   console.log('render')
  // },[]);

  return (
    <div>
      <div className='container-fluid' >
        <div className='card text-center p-2' style={{ backgroundColor: "#992e93" }}>
          <div className="card-text h4 fw-bold text-white"  > Sabbath Day documents</div>
        </div>
        <Quotes class="quote">"Remember the <strong>SABBATH DAY</strong>, to keep it <strong>HOLY</strong>" <span>(Exodus 20:8)</span></Quotes>
        <form className="navbar-form navbar-left mt-2"  >
          <div className="form-group">
            <input type="text" name="search" value="" style={{ width: '250px', float: "left", marginBottom: "0px" }} className="form-control" placeholder="search" />
          </div>
          <BwtButton type="submit" value="Search"   >Search</BwtButton>
        </form>


        <BWTTable bordered hover className="mt-4" style={{ borderColor: "rgba(0, 0, 0, 0.5)" }}>
          <thead  >
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              {/* <th>Download </th> */}
            </tr>
          </thead>
          
          <tbody>
            {dataa.map((d) => (
              <tr  >
                <td>{d.Name}</td>
                <td>{d.Mobile}</td>
                <td>{d.Email}</td>
                {/* <td style={{ textAlign: "center", fontSize: '20px' }}><FaDownload type='button' /></td> */}
              </tr>
            ))}



            {/* <tr  >
              <td>The Gospel According to Mary Magdalene</td>
              <td>John</td>
              <td>08-Jul-2023</td>
              <td style={{ textAlign: "center", fontSize: '20px' }}><FaDownload type='button' /></td>
            </tr>
            <tr>
              <td>The 31 Ways to build a Spiritual Prayer</td>
              <td>John</td>
              <td>22-Jul-2023</td>
              <td style={{ textAlign: "center", fontSize: '20px' }}><FaDownload type='button' /></td>
            </tr> */}

          </tbody>
        </BWTTable>
        {/* <button onClick={() => setItem('Text here 1')}>Text here 1</button>
        <button onClick={() => setItem('Text here 2')}>Text here 2</button>
        <button onClick={() => setItem('Text here 3')}>Text here 3</button>
        <h1>{item}</h1> */}

        {data.map((d) => (
          <div >
            ID: {d.id} <br />
            Name: {d.name} <br />
            Email: {d.email} <br />
            <br />
          </div>
        ))}


      </div>
    </div>
  )
}

export default Sabbathdocs