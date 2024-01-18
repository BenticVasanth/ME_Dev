import React from 'react'
import { BwtButton } from '../../components/Button'

function Feedback() {
  return (
    <div>
      <div className='container-fluid mt-2'>
        <div className='card text-center p-2' style={{ backgroundColor: "#992e93" }}>
          <div className="card-text h4 fw-bold text-white"  > COMMENT OR SUGGESTION </div>
        </div>


        <div className="row mt-2 justify-content-center">
          <div className="col-md-6 mt-4">

            <form action="">
              <div class="input-group mb-3">
                <input type="text" class="form-control p-3" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
              </div>

              <div class="input-group  mb-3">
                <input type="text" class="form-control p-3" placeholder="Mobile NO" aria-label="Username" aria-describedby="basic-addon1" />
              </div>

              <div class="input-group mb-3">
                <input type="text" class="form-control p-3" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1" />
              </div>

              <div class="input-group mb-3">
                <textarea class="form-control" rows="5" placeholder="Comments And Suggestions" aria-label="With textarea"></textarea>
              </div>
              <div class="input-group mb-3 justify-content-center">

                  <BwtButton className='p-3 px-5'>Submit</BwtButton>
              </div>
              

            </form>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Feedback