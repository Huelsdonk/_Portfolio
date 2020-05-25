import React from 'react'
import { Mo } from '../components/MotionComp'

function Contact() {
    return (
        <main className="container mt-3">
    <div className="row">
      <div className="col-sm-12">
        <div className="page-header">
          <h1>Contact</h1>
          <hr className="my-4"/>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="card col-sm-12" id="contact-card">
        <div className="card-body">
          <h3 className="card-title">Email:</h3>
          <p className="card-text">huntsperger@gmail.com</p>
          <hr className="my-4"/>
          <h3 className="card-title">Phone:</h3>
          <p className="card-text">(203) 505-5312</p>
          <hr className="my-4"/>
          <h3 className="card-title">Resume:</h3>
          <p className="card-text">Coming Soon</p>
          <hr className="my-4"/>
          <h3 className="card-title"><span className="badge badge-dark"><img src="./../assets/GitHub-Mark-Light-32px.png" alt="GitHub"/></span></h3>
          <p className="card-text"><Mo href={"http://github.com/Huelsdonk"} text={"github.com/Huelsdonk"}/></p>
          <hr className="my-4"/>
          <h3 className="card-title"><img src="./../assets/LI-In-Bug.png" alt="linkedin" height="32px" width="36px"/></h3>
          <p className="card-text"><Mo href={"https://www.linkedin.com/in/john-huntsperger/"} text={"linkedin.com/in/john-huntsperger"}/></p>

        </div>
      </div>
    </div>
    

    <div className="row">
      <div className="col-sm-12">
        <hr className="my-4"/>
      </div>
    </div>


  </main>
    )
}
export default Contact