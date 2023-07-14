import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <div className='container mt-5'>
        <h1 id='contactus' style={{ textAlign: "start" }}>GET IN TOUCH</h1>
        <div className='card contact-card mt-5'>
          <div className='row'>
            <div className='col-lg-7'>
              <div className='row'>
                <div className='col-lg-6 mb1'>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="First Name" />
                    <label for="floatingInput">First Name</label>
                  </div>
                </div>
                <div className='col-lg-6 mb1'>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="Last Name" />
                    <label for="floatingInput">Last Name</label>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="Phone Number" />
                    <label for="floatingInput">Phone Number</label>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                  </div>
                </div>
                <div className='col-lg-12 mt2'>
                  <div className="form-floating">
                    <textarea className="form-control" style={{ height: "100px" }} rows="4" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Comments</label>
                  </div>
                </div>
                <div className="d-grid mt-5">
                  <div className='btn-boxxx send' ><a href="/">Submit</a></div>
                </div>

              </div>
            </div>
            <div className='col-lg-5'>
              <div>
                <iframe title='google-map' className="gmap_iframe" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Nagpur&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
