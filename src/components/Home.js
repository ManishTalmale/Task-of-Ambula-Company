import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <div className='container-fluid' style={{ backgroundColor: "#d5d7db" }}>
      <h1 className='mt-5'>Our Mission</h1>
      <h6>At Ambula, we are deeply committed to the belief that every person deserves
        access to high-quality healthcare services. We believe in a democratic approach
        to health, and through the use of technology, we strive to make emergency and
        trauma care assistance more transparent, easily accessible, and user-friendly
        for all individuals in India. By bridging the communication gap in healthcare
        delivery, we hope to empower individuals to take control of their health and well-being.</h6>
      <div className='row mt-5'>
        <h1>Ambula Services</h1>
        <div className='col-lg-6' >
          <div className='card' style={{ borderRadius: "2em" }}>
            <img style={{ width: "100%", padding: "2em 5em 1em 5em" }} src={require("../Assets/emer.png")} alt='' />
            <h1>Emergency & Trauma</h1>
            <h6>Locate and book any hospital nearby.</h6>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card' style={{ borderRadius: "2em" }}>
            <img style={{ height: "31.5em", width: "100%", padding: "2em 5em 1em 5em" }} src={require("../Assets/ambulance.png")} alt='' />
            <h1>Emergency & Trauma</h1>
            <h6>Locate and book any hospital nearby.</h6>
          </div>
        </div>
      </div>
      <div className='row mt-5'>
        <h1>Ambula Services</h1>
        <div className='col-lg-4'>
          <div className='card' style={{ borderRadius: "2em" }}>
            <img className='card-feature-icon' style={{ height: "20%", width: "25%", marginLeft: "10em", marginTop: "3em" }} src={require("../Assets/one.avif")} alt='' />
            <h6>Teleconsultation</h6>
            <h4 style={{ padding: "2em 2em 2em 2em" }}>Book an online consultation with any doctor</h4>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='card' style={{ borderRadius: "2em" }}>
            <img className='card-feature-icon mb-4' style={{ height: "20%", width: "25%", marginLeft: "10em", marginTop: "3em" }} src={require("../Assets/two.avif")} alt='' />
            <h4>Booking Physical Appointments</h4>
            <h5 style={{ padding: "2em 2em 2em 2em" }}>Book your physical appointment with any doctor</h5>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='card' style={{ borderRadius: "2em" }}>
            <img className='card-feature-icon mb-4' style={{ height: "20%", width: "25%", marginLeft: "10em", marginTop: "3em" }} src={require("../Assets/three.png")} alt='' />
            <h4>Lab Bookings</h4>
            <h5 style={{ padding: "2em 2em 2em 2em" }}>Locate and book labs remote or get lab tests done at your doorsteps</h5>
          </div>
        </div>
      </div>
      <hr />

      <footer className='d-flex'>
        <h1>Ambula</h1>
        <div className='d-flex' style={{ marginTop: "1.2em" }}>
          <h6 style={{ marginLeft: "1em" }}>Home</h6>
          <h6 style={{ marginLeft: "1em" }}>About</h6>
          <h6 style={{ marginLeft: "1em" }}>Contact</h6>
          <h6 style={{ marginLeft: "33em" }}>Copyright © Ambula Technologies</h6>
        </div>
      </footer>
    </div>
  )
}

export default Home
