import React, { Component } from "react";
import SocialMedia from "./SocialMedia/SocialMedia";
//import WorkExperience from "./Resume/Experience/WorkExperience";
import { Divider, Container } from "semantic-ui-react";
import profile_pic from "../assets/images/ansh.jpeg";
import "./Home.css";
class Home extends Component {
  basicInfo = {
    profileImage: profile_pic,
    name: "Hi, my name is Ansh Sikka",
    description:
      "Hey there! I'm currently working as a senior data engineer at Deloitte. I also recently completed my Master's degree in computer science from Georgia Tech with an emphasis on Interactive Intelligence. Feel free to explore and learn a bit more about me!",
  };

  render() {
    return (
      <div id="home">
        <Container>
        <div className="intro-contact">
          <div className="Introduction" style={introductionStyle}>
            
              <h1 class="ui center aligned header" style={headerStyle}>
                {this.basicInfo.name}
              </h1>
              <img
                src={this.basicInfo.profileImage}
                class="ui medium circular image"
                style={headerImageStyle}
                alt=""
              />
              <Container>
              <h3 class="ui center aligned header" style={headerStyle}>
                {this.basicInfo.description}
              </h3>
              </Container>
            
          </div>
        </div>
        
        <Container>
          <div className="Social Media">
            <Divider style={dividerStyle} horizontal>
              Let's Connect!
            </Divider>

            <SocialMedia />
          </div>
        </Container>
        </Container>
        {/*
        <Container fluid>
          <div className="WorkExperience" style={workExperienceStyle}>
            <Divider style={dividerStyle} horizontal>
              Experience
            </Divider>
            <Container>
            <Item.Group style={workExperienceStyle}>
              <WorkExperience />
            </Item.Group>
            </Container>
          </div>
        </Container>
        */}
        <br />
      </div>

    
    );
  }
}

const introductionStyle = {
  paddingTop: "0vh",
};
const headerStyle = {
  fontWeight: "100",
  color: "white",
  marginTop: "5vh",
  marginBottom: "2vh",
};

const dividerStyle = {
  color: "white",
  fontSize: "larger",
  paddingBottom: "2vh",
};

const headerImageStyle = {
  margin: "0 auto",
  width: "20%"
};
/*
const workExperienceStyle = {
  margin: "0 auto",
  justifyContent: "center",
};
*/
export default Home;
