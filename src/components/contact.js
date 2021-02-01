import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
    <section>
      <div className="contact-container">
        <div className="contact-info">
          <div>
            <h2>Contact Info</h2>
              <ul className="info">
                <li>
                  <span> <i class="fa fa-map-marker fa-2x" aria-hidden="true"></i></span>
                  <span> Ottawa, Ontario<br></br>
                  Canada </span>
                </li>
                <li>
                  <span> <i className="fa fa-envelope fa-2x" aria-hidden="true"></i> </span>
                  <span> danilo_orozco7@yahoo.com</span>
                </li>
                <li>
                  <span> <i className="fa fa-phone fa-2x" aria-hidden="true"></i> </span>
                  <span> 613-804-2855</span>
                </li>
              </ul>
            </div>
            <ul className="sci">
              <li><a href="https://www.linkedin.com/in/daniloorozco/"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a></li>
              <li><a href="https://github.com/daniloorozco"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a></li>
            </ul>
          </div>
          <div className="contactForm">
            <h2>Send a Message</h2>
            <div className="formBox">
              <div className="inputbox w50">
                <input type="text" name="" required></input>
                <span>First Name</span>
              </div>
              <div className="inputbox w50">
                <input type="text" name="" required></input>
                <span>Last Name</span>
              </div>
              <div className="inputbox w50">
                <input type="text" name="" required></input>
                <span>Email Address</span>
              </div>
              <div className="inputbox w50">
                <input type="text" name="" required></input>
                <span>Mobile Number</span>
              </div>
              <div className="inputbox w100">
                <textarea name="" required></textarea>
                <span>Write your message here...</span>
              </div>
              <div className="inputbox w50">
                <input type="submit" value="Send"></input>
              </div>
            </div>
          </div>
      </div>
    </section>
    )
  }
}

export default Contact;
