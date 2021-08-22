import React, { Component } from "react";
import SocialMedia from "./SocialMedia/SocialMedia";
import WorkExperience from "./Resume/Experience/WorkExperience";
import { Item, Divider, Container } from "semantic-ui-react";
import profile_pic from "../assets/images/ansh.jpeg";
import "./Home.css";
class Home extends Component {
  basicInfo = {
    profileImage: profile_pic,
    name: "Hi, my name is Ansh Sikka",
    description:
      "I’m a software engineer who graduated from the University of Minnesota with a dedicated track in Big Data. My interests and skills include big data, cloud platform engineering, and the application of emerging technologies and tools. I currently work as a software engineer and design lead on the Corporate Data Solutions team at ExxonMobil in Houston.",
  };

  render() {
    return (
      <div id="home">
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
            <Container fluid>
            <h3 class="ui center aligned header" style={headerStyle}>
              {this.basicInfo.description}
            </h3>
            </Container>
          </div>
          <Divider style={dividerStyle} horizontal>Let's Connect!</Divider>
          <div className="Social Media">
            <SocialMedia />
          </div>
        </div>
        <div className="intro-work">
        <div className="WorkExperience" style={workExperienceStyle}>
        <Divider style={dividerStyle} horizontal>Experience</Divider>
          <Item.Group style={workExperienceStyle}>
            <WorkExperience />
          </Item.Group>
        </div>
        </div>
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
  paddingBottom: "2vh"
}

const headerImageStyle = {
  margin: "0 auto",
};

const workExperienceStyle = {
  margin: "0 auto",
  justifyContent: "center",
};

export default Home;
