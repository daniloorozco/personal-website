import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            
            </div>

            <h2 style={{paddingTop: '0em'}}>Danilo Orozco</h2>
            <h4 style={{color: 'grey'}}>Software Developer</h4>
            <hr style={{borderTop: '3px solid #57b9fa', width: '50%'}}/>
            <h5>Based in</h5>
            <p>Ottawa, Ontario</p>
            <h5>Phone</h5>
            <p>(613) 804-2855</p>
            <h5>Email</h5>
            <p>danilo_orozco7@yahoo.com</p>
            <h5>Web</h5>
            <p>daniloorozco.com</p>
            <hr style={{borderTop: '3px solid #57b9fa', width: '50%'}}/>
            <h4 style={{color: 'grey'}}>Skills</h4>
            <h5>Programming Languages</h5>
            <p>Python</p>
            <p>Java</p>
            <p>C/C++</p>
            <p>Javascript</p>
            <p>Haskell</p>
            <p>Prolog</p>
            <h5>Tools & Technologies</h5>
            <p>Git/Github</p>
            <p>Node.js</p>
            <p>React</p>
            <p>SKLearn, Numpy, Pandas</p>
            <p>TensorFlow</p>
            <p>SQL</p>
            <h5>Industry Knowledge</h5>
            <p>Linux/Unix</p>
            <p>Research</p>
            <p>Technical Writing</p>
            <p>Version Control</p>
            <p>Project Mangement</p>
            <h5>Interpersonal</h5>
            <p>Teamwork</p>
            <p>Public Speaking</p>
            <p>Communication</p>
            <hr style={{borderTop: '3px solid #57b9fa', width: '50%'}}/>

          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2012}
              endYear={2016}
              schoolName="St. Pius X Highschool"
              schoolDescription="Secondary education diploma."
               />

               <Education
                 startYear={2016}
                 endYear={2020}
                 schoolName="Carleton University"
                 schoolDescription="Coursework Includes; Software Engineering, Web development, Database Management Systems, Analysis and Design of algorithms, Programming Paradigms, Technical Writing, Intro to Machine Learning, Cryptography, Computer System Security."
                  />
                <hr style={{borderTop: '3px solid #57b9fa'}} />

              <h2>Experience</h2>

            <Experience
              startYear="May 2019"
              endYear="August 2019"
              jobName="Data Scientist"
              jobEmployer="Department of National Defence"
              jobDescription="Developed a machine learning model in order to label and analyze text based datasets. Implementing machine learning models for Text Classification and Topic Modelling. Multiple machine learning algorithms were evaluated for the best accuracy. Implemented with python, scikit-learn, pandas, and Tensorflow."
              />

            <Experience
              startYear="September 2018"
              endYear="Present"
              jobName="ITS Analyst"
              jobEmployer="Carleton University"
              jobDescription="Maintaining computer safety procedures and records of software licenses, managing equipment, consumables, and other supplies stock. Managing and monitoring installed systems and infrastructure. Communicating with vendors and other IT staff to resolve problems. Monitoring and testing application performance for potential bottlenecks, identifying possible solutions, and working with developers to implement necessary changes. Maintaining security, backup, and redundancy strategies. Writing and maintaining custom scripts to increase system efficiency and lower the human intervention time on any tasks."
              />
            <Experience
              startYear="September 2014"
              endYear="December 2020"
              jobName="Lifeguard/Swim Instructor"
              jobEmployer="City of Ottawa"
              jobDescription="Perform the surveillance necessary to prevent accidents by administering policies, procedures ,rules and regulations governing the conduct of patrons using the pool and perform rescues and first aid necessary for the preservation of life in a team setting."
              />

            <Experience
              startYear="September 2020"
              endYear="December 2020"
              jobName="Study Group Manager"
              jobEmployer="Carleton University"
              jobDescription="Lead first year computer science students in weekly study sessions. Goal was to give new students the opportunity to learn about new topics, and provide insight on University life. The study group was another resource to offer help to students due to the covid pandemic."
              />
              <hr style={{borderTop: '3px solid #57b9fa'}} />              


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
