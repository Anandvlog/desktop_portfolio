import React from "react";
import TopHeading from "../Common/TopHeading";
import "./Contact.scss";
const Contact = () => {
  const submitHandler = (event) => {
    event.preventdefault();
  };
  return (
    <>
        <div className="row">
          <div className="col-md-12">
              <TopHeading smallTitle="Get In Touch" title="Contact me" />
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-md-12 col-lg-6 offset-md-0 offset-lg-3">
          <div className="card  contact-card-form">
          <div className="card-body">
            <form className="row g-3 user-contact" onSubmit={submitHandler}>
              <div className="col-md-6">
                <label htmlFor="inputName4" className="form-label">
                  First name
                </label>
                <input type="text" className="form-control" id="inputName4"  />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputLast4" className="form-label">
                  Last name
                </label>
                <input type="text" className="form-control" id="inputLast4" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  type="Email"
                  className="form-control"
                  id="inputEmail4"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputNumber4" className="form-label">
                  Phone number
                </label>
                <input type="text" className="form-control" id="inputNumber4" required />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputState" className="form-label">
                  Choose a topic
                </label>
                <select id="inputState" className="form-select">
                  <option selected>Select one..</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Message</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Type your message..."
                  ></textarea>
                </div>
              </div>
              <div className="form-footer">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    I accept the terms
                  </label>
                </div>
                <button type="submit" className="btn btn-primary btn-md submit-btn">
                  Submit
                </button>
              </div>
              {/* <div className="col-12">
               
              </div> */}
            </form>
          </div>
          </div>
          </div>
        </div>      
    </>
  );
};

export default Contact;
