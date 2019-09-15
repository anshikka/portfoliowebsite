import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import SocialMedia from './Components/SocialMedia/SocialMedia';
import WorkExperience from './Components/Resume/Experience/WorkExperience';
import Particles from 'react-particles-js';
import { Card } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  basicInfo = {
    profileImage: 'https://scontent.fhou1-2.fna.fbcdn.net/v/t1.0-9/48429124_2412101432153159_5881497613500416000_n.jpg?_nc_cat=105&_nc_oc=AQlz2tz1-PZ79lHxmpq4Sgr9tfnjD5zO14uOMD36UU4MBGvWDCyo0x3BWTwl3mI9gg8&_nc_ht=scontent.fhou1-2.fna&oh=07a31f0903a79912206fec81c7b2a77a&oe=5DB24672',
    name: 'Hi, my name is Ansh Sikka',
    description: 'I am a senior majoring in computer science at The University of Minnesota. I am currently a teaching assistant for the computer science department specializing in discrete structures of computer science. My interests and skills include data science, cloud platform engineering, and the application of emerging technologies and tools.'
  }

  socialMedia = [
      {iconName: 'facebook f', link: 'https://www.facebook.com/ansh.sikka'},
      {iconName: 'linkedin', link: 'https://www.linkedin.com/in/ansh-sikka-42576068/'},
      {iconName: 'github', link: 'https://github.com/anshikka'},
      {iconName: 'medium m', link: 'https://medium.com/@sikka008'},
      {iconName: 'spotify', link: 'https://open.spotify.com/user/anshikka?si=YQDzoPUJSrWZSVdiqs9zww'}
  ]

  workData = [
    {
      companyName: 'ExxonMobil',
      companyLogo: 'https://isesisee2018.org/wp-content/uploads/2018/04/exxonmobil-logo-png-exxon-mobil-logo-1500-1024x576.png',
      positionName: 'Cloud Engineering Intern',
      date: 'May 2019 - August 2019',
      workDescription: [
        'Revamped the internal cloud web platform using Ghost CMS in an Agile Development environment', 
        'Worked with Handlebars.js to develop frontend components',
        'Deployed the web platform onto Azure App Service',
        'Incorporated cloud resources such as Azure Storage, Active Directory, and SendGrid Email Service',
        'Trained other employees and interns on how to use Azure portal and DevOps'
      ]
    },
    {
      companyName: 'Quinnox, Inc.',
      companyLogo: 'https://www.quinnox.com//sites/all/themes/home_service/images/quinnox-logo-home.png',
      positionName: 'Deep/Machine Learning and Data Science Intern',
      date: 'June 2018 - September 2018',
      workDescription: [
        'Implemented a demand/lead generation recommendation engine based on specific criteria using machine learning',
        'Saved thousands of hours of manual work reading through company data for demand generation using efficient automation algorithms: Reduced a month of manual work into 15 minutes through the recommendation engine',
        'Worked directly under the CTO',
        'Was given training on basic deep learning and extensive training on machine learning'
      ]
    },
    {
      companyName: 'Vaco and Google, Inc.',
      companyLogo: 'https://itallyllc.com/wp-content/uploads/2018/12/logo-vaco_800px.png',
      positionName: 'Google Daydream Student Innovator',
      date: 'December 2017 - May 2018',
      workDescription: [
        'Promoted and lead applications and development of Google\'s Virtual Reality Platform, Google Daydream, throughout the University of Minnesota',
        'Ran VR experience events throughout the University',
        'Recieved certifications in virtual reality video production and a Google Cloud certification',
        'Received a Google Pixelbook in recognition of hard work',
      ]
    }
  ]

  render() {
    return (
      <div className="OverlayBackground" style={BackgroundStyle}>
        <Particles canvasClassName="OverlayBackground" style={particleStyle}/>
          <div className="App">
              <div className="Header">
                <div className="Menu" style={MenuStyle}>
                  <a href="https://drive.google.com/file/d/1jV-0ZM2TQK54MMQBcDhrylWiP0QGraIE/view?usp=sharing">
                    <h4>Resume</h4>
                  </a>
                  <a href="http://github.com/anshikka">
                    <h4>Projects</h4>
                  </a>
                </div>
              </div>

            
            <Container>


              <div className="Introduction" style={introductionStyle}>
                <h1 class="ui center aligned header" style={headerStyle}>{this.basicInfo.name}</h1>
                <img src={this.basicInfo.profileImage} class="ui medium circular image" style={headerImageStyle} alt=''/>
                <h3 class="ui center aligned header" style={headerStyle}>{this.basicInfo.description}</h3>
              </div>
              
              <div className="Social Media">
                <h3 class="ui center aligned header" style={headerStyle}>Let's Connect!</h3>
                <SocialMedia networks={this.socialMedia} style={socialMediaBarStyle}/>
              </div>

              <div className="WorkExperience" style={workExperienceStyle}>
              <h1 class="ui center aligned header" style={headerStyle}>Experience</h1>
                <Card.Group style={workExperienceStyle}>
                  <WorkExperience work={this.workData}/>
                </Card.Group>
              </div>


            </Container>
            
          </div>
      </div>
    );
  }
}

const BackgroundStyle = {
  backgroundColor: '#113951',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'repeat',
  minHeight: '145vh'
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

const MenuStyle = {
  textAlign: 'right',
  paddingTop: '3vh'
}


const particleStyle = {
  display: 'inlineBlock',
  position: 'absolute',
  marginTop: '0px',
  marginBottom: '0px'
}

const workExperienceStyle = {
    margin: '0 auto',
    justifyContent: 'center',
    backgroundColor: 'rgb(17, 57, 81)' 
  }

export default App;
