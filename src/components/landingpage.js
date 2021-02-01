import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Me from "../assets/profile.jpg";


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={Me} alt="avatar" className="avatar-img"/>

            <div className="banner-text">
              <h1>Danilo Orozco</h1>

            <hr/>

          <p>Software Developer</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/daniloorozco/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/daniloorozco" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github" aria-hidden="true" />
          </a>

          {/* Email */}
          <a href="mailto: danilo_orozco7@yahoo.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-envelope" aria-hidden="true" />
          </a>

          {/* Resume */}
          <a href="https://github.com/daniloorozco" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-file-text" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
