import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import WorkDescription from "./WorkExperience/WorkDescription";

class WorkExperience extends Component {
  workData = [
    {
      companyName: "ExxonMobil",
      companyLogo:
        "https://isesisee2018.org/wp-content/uploads/2018/04/exxonmobil-logo-png-exxon-mobil-logo-1500-1024x576.png",
      positionName: "Cloud Engineering Intern",
      date: "May 2019 - August 2019",
      workDescription: [
        "Revamped the internal cloud web platform using Ghost CMS in an Agile Development environment",
        "Worked with Handlebars.js to develop frontend components",
        "Deployed the web platform onto Azure App Service",
        "Incorporated cloud resources such as Azure Storage, Active Directory, and SendGrid Email Service",
        "Trained other employees and interns on how to use Azure portal and DevOps",
      ],
    },
    {
      companyName: "Quinnox, Inc.",
      companyLogo:
        "https://www.quinnox.com//sites/all/themes/home_service/images/quinnox-logo-home.png",
      positionName: "Deep/Machine Learning and Data Science Intern",
      date: "June 2018 - September 2018",
      workDescription: [
        "Implemented a demand/lead generation recommendation engine based on specific criteria using machine learning",
        "Saved thousands of hours of manual work reading through company data for demand generation using efficient automation algorithms: Reduced a month of manual work into 15 minutes through the recommendation engine",
        "Worked directly under the CTO",
        "Was given training on basic deep learning and extensive training on machine learning",
      ],
    },
    {
      companyName: "Vaco and Google, Inc.",
      companyLogo:
        "https://itallyllc.com/wp-content/uploads/2018/12/logo-vaco_800px.png",
      positionName: "Google Daydream Student Innovator",
      date: "December 2017 - May 2018",
      workDescription: [
        "Promoted and lead applications and development of Google's Virtual Reality Platform, Google Daydream, throughout the University of Minnesota",
        "Ran VR experience events throughout the University",
        "Recieved certifications in virtual reality video production and a Google Cloud certification",
        "Received a Google Pixelbook in recognition of hard work",
      ],
    },
  ];
  render() {
    return this.workData.map((job) => (
      <Card style={workExperienceStyle}>
        <Card.Content style={cardStyle}>
          <Card.Header>{job.positionName}</Card.Header>
          <Card.Meta>{job.companyName}</Card.Meta>
          <Card.Description>
            <ul>
              <WorkDescription workItems={job.workDescription} />
            </ul>
          </Card.Description>
        </Card.Content>
      </Card>
    ));
  }
}

const workExperienceStyle = {
  float: "left",
  margin: "2vh 1vw auto 1vw",
  backgroundolor: "rgb(17, 57, 81)",
};

const cardStyle = {
  minHeight: "45vh",
};

export default WorkExperience;
