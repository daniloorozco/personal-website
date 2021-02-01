import React, { Component } from 'react';
import Code from "../assets/code.png";
import Sketch from "../assets/sketch.png";
import Deep from "../assets/deep-learning.png";
import Sport from "../assets/running.png";
import Talk from "../assets/networking.png";
import Lock from "../assets/padlock.png";
import Pro from "../assets/me.png";




class About extends Component {
  render() {
    return(
      <div className="page">

      <div className="testimonials">
        <div className="carte">
          <div className="layer">          </div>

            <div className="contente">
              <p>To the right are some topics I am passionate about.</p>
            <div className="propic">
              <img src={Pro}></img>
            </div>
            <div className="deets">
              <h2>Danilo Orozco<br></br><span>About Me</span></h2>
            </div>
        </div>

      </div>

      </div>

      <div className="container-card">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={Sketch}></img>
              <h3>Creating</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>I have always had a passion for creating things. Whether it be music, art, coding; it has always made me feel accomplished and creative.  I'm eager to learn new topics and challenge my self with every project. 
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={Code}></img>
              <h3>Coding</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>Programming to me means having fun by playing with ideas, solving problems, and helping others. I am always interested in expanding
                my knowledge and learning new technologies. The power and elegancy fascinates.</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={Deep}></img>
              <h3>Artificial Intelligence</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>AI is a very interesting subject for almost any computer scientist for its endless applications. My previous work term included a Machine Learning 
                model which inspired me to start my own ML project.</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={Lock}></img>
              <h3>Security</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>After taking a computer systems security class, it has opened my eyes for the importance of security. Especially in a digital world that we
                currently live in. Taking crytpography has also furthered my curiosity with current system security.</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={Talk}></img>
              <h3>Teamwork</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>All my previous volunteer and job experiences have included working in teams. This has taught me how to 
                effectively communicate with others. Success in teams relies on good communication between team members.</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={Sport}></img>
              <h3>Active</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>Maintaining an active lifestyle is key to being healthy and having fun. For me, it is a form of therapy and a major stress release. I consistently weight lift and play 
                various sports such as; Golf, Softball, Rock Climbing, Swimming and more!
              </p>
            </div>
          </div>
        </div>

        





      </div>

      
      </div>
    )
  }
}

export default About;
