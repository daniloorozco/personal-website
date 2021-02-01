import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Ufc from "../assets/ufc.png";
import Me from "../assets/me.png";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', backgroundImage: 'url(' + Me + ')'}} >Portfolio React Website</CardTitle>
            <CardText>
              This project is the website you are currently on! This was created with React.js. 
            </CardText>
            <CardActions border>
            <Button colored
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href='https://github.com/daniloorozco';
                }}
            >Github</Button>
            </CardActions>
            <CardMenu style={{color: '#000'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*Project 2
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', backgroundImage: 'url(' + Ufc + ') center / cover'}} >React Project #2</CardTitle>
            <CardText>
              Machine Learning model to analyze fight data in the UFC promotion and predict the winner of the bout.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>*/}

          {/*Project 3
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          */}
        </div>

      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', backgroundImage: 'url(' + Ufc + ')'}} >UFC Predictions</CardTitle>
            <CardText>
              Machine Learning model to analyze fight data in the UFC promotion and predict the winner of the bout.
            </CardText>
            <CardActions border>
            <Button colored
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href='https://github.com/daniloorozco/personal-website';
                }}
            >Github</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Web Dev</Tab>
          <Tab>Machine Learning</Tab>
        </Tabs>

        


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
