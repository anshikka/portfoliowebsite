import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import SocialMedia from './SocialMedia/SocialMedia';
import WorkExperience from './Resume/Experience/WorkExperience';
import { Card } from 'semantic-ui-react';
import profile_pic from '../assets/images/ansh.jpg';


class Home extends Component {
  basicInfo = {
    profileImage: profile_pic,
    name: 'Hi, my name is Ansh Sikka',
    description: 'I am a senior majoring in computer science at The University of Minnesota. I am also a teaching assistant for the computer science department specializing in discrete structures of computer science. My interests and skills include data science, cloud platform engineering, and the application of emerging technologies and tools.'
  }


  render() {
    return (
      

            <div id="home">
            


              <div className="Introduction" style={introductionStyle}>
                <h1 class="ui center aligned header" style={headerStyle}>{this.basicInfo.name}</h1>
                <img src={this.basicInfo.profileImage} class="ui medium circular image" style={headerImageStyle} alt=''/>
                <h3 class="ui center aligned header" style={headerStyle}>{this.basicInfo.description}</h3>
              </div>
              
              <div className="Social Media">
                <h3 class="ui center aligned header" style={headerStyle}>Let's Connect!</h3>
                <SocialMedia style={socialMediaBarStyle}/>
              </div>

              <div className="WorkExperience" style={workExperienceStyle}>
              <h1 class="ui center aligned header" style={headerStyle}>Experience</h1>
                <Card.Group style={workExperienceStyle}>
                  <WorkExperience/>
                </Card.Group>
              </div>
              <br/>

              </div>
            
            

    );
  }
}


const introductionStyle = {
  paddingTop: '0vh'
}
const headerStyle = {
  fontWeight: '100',
  color: 'white',
  marginTop: '5vh',
  marginBottom: '2vh'
}

const headerImageStyle = {
  margin: '0 auto'
}

const socialMediaBarStyle = {
  paddingBottom: '10vh'
}



const workExperienceStyle = {
    margin: '0 auto',
    justifyContent: 'center',
    backgroundColor: 'rgb(17, 57, 81)' 
  }

export default Home;
