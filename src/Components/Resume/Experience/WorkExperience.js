import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";
import WorkDescription from "./WorkExperience/WorkDescription";


class WorkExperience extends Component {
  workData = [
    {
      companyName: "ExxonMobil",
      companyLogo:
        "https://1000logos.net/wp-content/uploads/2017/08/ExxonMobil-Logo.png",
      positionName: "Data Engineer/Analyst",
      date: "Sep 2020 - Present",
      workDescription: [
        "Streamlined company-wide cybersecurity monitoring using Apache NiFi and reduced data processing time from 3 minutes to 1 minute",
        "Used advanced SQL to perform analysis on extended quantities of quantitative and qualitative data",
      ],
    },
    {
      companyName: "ExxonMobil",
      companyLogo:
        "https://1000logos.net/wp-content/uploads/2017/08/ExxonMobil-Logo.png",
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
      companyLogo: "https://www.chetanasforum.com/images_og/quinnox-1.png",
      positionName: "Deep/Machine Learning and Data Science Intern",
      date: "June 2018 - September 2018",
      workDescription: [
        "Implemented a demand/lead generation recommendation engine based on specific criteria using machine learning",
        "Saved thousands of hours of manual work reading through company data for demand generation using efficient automation algorithms: Reduced a month of manual work into 15 minutes through the recommendation engine",
        "Worked directly under the CTO",
        "Was given training on basic deep learning and extensive training on machine learning",
      ],
    },
  ];
  render() {
    return this.workData.map((job) => (
      <Card style={workExperienceStyle}>
        <Card.Content style={cardStyle}>
          <Card.Header style={contentStyle}>{job.positionName}</Card.Header>
          <Card.Meta style={contentStyle}>{job.companyName}</Card.Meta>
          <Card.Description>
            <ul>
              <WorkDescription style={contentStyle} workItems={job.workDescription} />
            </ul>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Card.Meta style={dateStyle}>
            <Icon name="clock" style={clockStyle}/>
            {job.date}
          </Card.Meta>
        </Card.Content>
      </Card>
    ));
  }
}

const workExperienceStyle = {
  float: "left",
  margin: "2vh 1vw auto 1vw",
  backgroundColor: "white",
  height: "60vh",
};

const contentStyle = {
  color: "black"
}

const cardStyle = {
  minHeight: "45vh",
  overflowY: "auto",
};


const dateStyle = {
  color: "black",
}

const clockStyle = {
  marginRight: "1vw"
}



export default WorkExperience;
