import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='container'>
      <h1 className='mt-5'>About Ambula</h1>
      <h6>Ambula is an App based on UHI(Unified Health Interface) popularly known as
        'Ayushman Bharat Digital Mission' envisioned by our honourable
        Prime Minister which connects patients live with the unified health
        network across India for all healthcare needs. Ambula is committed to
        bridge all the communication gaps prevalent in healthcare delivery and
        Ambula will impart it's contribution to this Noble Vision.
        We are always available there for you if you find any discomfort of health.
        Your trust empowers us to serve you more.</h6>
      <hr />
      <h1>Meet Our Team</h1>
      <div className='row mt-5'>
        <div className='col-lg-4'>
          <div className='card' style={{ borderRadius: "2em", height: "25em", padding: "25px 25px 25px 25px", backgroundColor: "#0e2657", textAlign: "left" }}>
            <div className='d-flex'>
              <img src={require("../Assets/prof1.png")} className='testimonial-picture' alt='' />
              <h6 style={{ marginTop: "1em", color: "white" }}>Prof (Dr) Sanghamitra Mishra</h6>
            </div>
            <h6 style={{ marginLeft: "5.5em", marginTop: "-2em", marginBottom: "3em", color: "white" }}>Director</h6>
            <p style={{ color: "white" }}>Dr. Sanghamitra Mishra with over a 35+ years of experience in healthcare
              industry who is expert in Anaesthesia & Critical care and currently
              serving as the Professor of Critical care & Dean of IMS & SUM hospital,
              SOA University, Bhubaneswar.</p>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='card' style={{ borderRadius: "2em", height: "25em", padding: "25px 25px 25px 25px", backgroundColor: "#0e2657", textAlign: "left" }}>
            <div className='d-flex'>
              <img src={require("../Assets/prof2.png")} className='testimonial-picture' alt='' />
              <h6 style={{ marginTop: "1em", color: "white" }}>Dr. Basanta Kumar Pati</h6>
            </div>
            <h6 style={{ marginLeft: "5.5em", marginTop: "-2em", marginBottom: "3em", color: "white" }}>Director</h6>
            <p style={{ color: "white" }}>Dr. Basanta Pati with over a 40+ years of experience
              in healthcare industry who is a leading Obstetrician and Gynaecologist of India
              and currently serving as Professor, O&G at IMS & SUM Hospital, SOA University,
              Bhubaneswar and Founder-Director of Sum Ultimate Care Hospital, Bhubaneswar.</p>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='card' style={{ borderRadius: "2em", height: "25em", padding: "25px 25px 25px 25px", backgroundColor: "#0e2657", textAlign: "left" }}>
            <div className='d-flex'>
              <img src={require("../Assets/prof3.png")} className='testimonial-picture' alt='' />
              <h6 style={{ marginTop: "1em", color: "white" }}>Avinash Jha</h6>
            </div>
            <h6 style={{ marginLeft: "5.5em", marginTop: "-2em", marginBottom: "3em", color: "white" }}>Architecture & Tech Mentor</h6>
            <p style={{ color: "white" }}>Avinash jha, graduated from NIT Trichy and With over a
              decade and a half of expertise in designing and building robust,
              distributed systems, He has a proven track record of success.
              His experience includes creating and implementing infrastructure on AWS
              and developing a seamless CI/CD pipeline
              for these systems, ensuring their smooth and efficient operation.</p>
          </div>
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-lg-4'>
          <div className='card' style={{ borderRadius: "2em", height: "22em", padding: "25px 25px 25px 25px", backgroundColor: "#0e2657", textAlign: "left" }}>
            <div className='d-flex'>
              <img src={require("../Assets/prof4.png")} className='testimonial-picture' alt='' />
              <h6 style={{ marginTop: "1em", color: "white" }}>Abhishek Kumar Gautam</h6>
            </div>
            <h6 style={{ marginLeft: "5.5em", marginTop: "-2em", marginBottom: "3em", color: "white" }}>Founder</h6>
            <p style={{ color: "white" }}>Abhishek Gautam, a tech loving MBBS student from
              AIIMS Bhubaneswar who envisions to bridge the communication gap prevalent
              in delivery of healthcare for the commons.</p>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='card' style={{ borderRadius: "2em", height: "22em", padding: "25px 25px 25px 25px", backgroundColor: "#0e2657", textAlign: "left" }}>
            <div className='d-flex'>
              <img src={require("../Assets/prof5.png")} className='testimonial-picture' alt='' />
              <h6 style={{ marginTop: "1em", color: "white" }}>Ambika Prasanna Dhal</h6>
            </div>
            <h6 style={{ marginLeft: "5.5em", marginTop: "-2em", marginBottom: "3em", color: "white" }}>Co-Founder</h6>
            <p style={{ color: "white" }}>Ambika is an experienced startup strategist with a passion
              for tech & brand building, building lasting value and cost efficiency & having
              entrepreneurship expertise across multiple sectors. He is competent in spearheading
              research, innovation to deliver high quality, low cost solutions.</p>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='card' style={{ borderRadius: "2em", height: "22em", padding: "25px 25px 25px 25px", backgroundColor: "#0e2657", textAlign: "left" }}>
            <div className='d-flex'>
              <img src={require("../Assets/prof6.png")} className='testimonial-picture' alt='' />
              <h6 style={{ marginTop: "1em", color: "white" }}>Avinash Kumar</h6>
            </div>
            <h6 style={{ marginLeft: "5.5em", marginTop: "-2em", marginBottom: "3em", color: "white" }}>Tech Advisor</h6>
            <p style={{ color: "white" }}>Avinash Kumar with over a 4+ years of software industry and a graduate
              from Rajasthan technical university currently serves as full stack developer having expertise
              in Frontend and Back-end technologies.</p>
          </div>
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-lg-4'>
          <div className='card' style={{ borderRadius: "2em", height: "30em", padding: "25px 25px 25px 25px", backgroundColor: "#0e2657", textAlign: "left" }}>
            <div className='d-flex'>
              <img src={require("../Assets/prof7.png")} className='testimonial-picture' alt='' />
              <h6 style={{ marginTop: "1em", color: "white" }}>Praveen Kumar</h6>
            </div>
            <h6 style={{ marginLeft: "5.5em", marginTop: "-2em", marginBottom: "3em", color: "white" }}>Tech Advisor</h6>
            <p style={{ color: "white" }}>Praveen kumar with a 4+ years of tech industry and a graduate
              from Rajasthan technical university currently serves as Senior Software Engineer
              having expertise in Frontend and back end technologies.</p>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='card' style={{ borderRadius: "2em", height: "30em", padding: "25px 25px 25px 25px", backgroundColor: "#0e2657", textAlign: "left" }}>
            <div className='d-flex'>
              <img src={require("../Assets/prof8.png")} className='testimonial-picture' alt='' />
              <h6 style={{ marginTop: "1em", color: "white" }}>Surya Narayan Kar</h6>
            </div>
            <h6 style={{ marginLeft: "5.5em", marginTop: "-2em", marginBottom: "3em", color: "white" }}>Operations and Networking Advisor</h6>
            <p style={{ color: "white" }}>Surya is a seasoned management professional with
              the ability to network across the globe with professionals across domains
              in order to build new business. He is passionate about technology's potential
              to solve our pressing Sustainability/ESG issues majorly to solve societal challenges
              like achieving 'Good Health & Wellbeing', one of the United Nations Sustainable
              Development Goals (UN SDGs) to transform our world into a healthy world.</p>
          </div>
        </div>
        <div className='col-lg-4'></div>
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

export default About
