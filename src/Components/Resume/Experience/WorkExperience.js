import React, { Component } from "react";
import { Header, Container, Item, Label } from "semantic-ui-react";
import WorkDescription from "./WorkExperience/WorkDescription";

class WorkExperience extends Component {
  workData = [
    {
      companyName: "Deloitte",
      positionName: "Strategy and Analytics Solution Specialist",
      date: "Nov 2021 - Present",
      workDescription: [
        "Technologies: Snowflake, Azure Cloud, SQL, SSIS Data Pipelines, AWS",
        "Responsibilities: Data Engineering, Advisory"
      ],
    },
    {
      companyName: "ExxonMobil",
      companyLogo:
        "https://1000logos.net/wp-content/uploads/2017/08/ExxonMobil-Logo.png",
      positionName: "Software Engineer and Design Lead",
      date: "Sep 2020 - Oct 2021",
      workDescription: [
        "Working on a Zoom Analytics big data project, taking 500+ zoom events/sec as streaming data and processing it on Azure Functions and Azure Event Hub, eventually warehousing it on Snowflake",
        "Helping main design leads and architects with big data architectures in a variety of projects",
        "Streamlined company-wide cybersecurity machine monitoring using flow-based programming via Apache NiFi for ETL and reduced time to find cybersecurity holes from months to minutes",
        "Used HANA SQL to develop Manual Data Input Systems and validations for the upper management",
        "Working with Azure Functions, APIM, and KeyVault to develop an API to provide access to a central company data repository on Snowflake, helping reduce cost in data subscriptions (approx $75m in data subscription costs saved)",
      ],
    },
    {
      companyName: "ExxonMobil",
      companyLogo:
        "https://1000logos.net/wp-content/uploads/2017/08/ExxonMobil-Logo.png",
      positionName: "Software Engineering Intern",
      date: "May 2019 - August 2019",
      workDescription: [
        "Replatformed internal cloud adoption platform in an agile work environment to Microsoft Azure: Utilized blob storage, SQL, KeyVault, SendGrid, and search service.",
        "Full Stack Web Development: Handlebars.js for frontend and Node.js for the backend",
        "Customized open source CMS (Content Management System) to adapt to new website format and UX",
        "Made the entire cloud adoption web platform content editable: No developer needed to make website changes. Eliminated content writers’ need to learn HTML/CSS to make basic blog edits to the platform",
        "Teaching assistant to over 100 other interns and employees helping them get started with Azure",
      ],
    },
    {
      companyName: "Quinnox, Inc.",
      companyLogo: "https://www.chetanasforum.com/images_og/quinnox-1.png",
      positionName: "Software Engineering Intern",
      date: "June 2018 - September 2018",
      workDescription: [
        "Built a machine learning-based recommendation system with a high accuracy rate that provides a ranked list of top companies and leads to contact for Quinnox’s demand generation team",
        "Used data mining and web scraping libraries such as BeautifulSoup and MechanicalSoup to retrieve large amounts of useful company, employee, and job data from different sources such as RainKing and LinkedIn to train an ML model and use it to get a list of top companies for contact/sales",
        "Reduced two months of work from the demand generation team to 8-10 minutes by implementing efficient automation algorithms",
        "Used big-data libraries such as NumPy and SciKitLearn for the machine learning process",
        "Given training on machine learning and basic deep learning algorithms/libraries such as PyTorch and Tensorflow",
      ],
    },
  ];
  render() {
    return this.workData.map((job) => (
      
      <Item>
        <Container textAlign='left'>
          <Header style={headerStyle} as="h2">
            {job.positionName}
          </Header>
        </Container>
        
        <Item.Content style={cardStyle}>
        <Container style={contentStyle} textAlign='center'>
          <Item.Header style={headerStyle}>{job.companyName}</Item.Header>
          <Item.Description>
            <ul>
              <WorkDescription
                style={contentStyle}
                workItems={job.workDescription}
              />
            </ul>
          </Item.Description>
        <Label icon='clock outline' content={job.date} />
        </Container>

        
        
        </Item.Content>
        
      </Item>
      
    ));
  }
}

const contentStyle = {
  color: "white",
};

const headerStyle = {
  color: "white",
  fontSize: "large"

};

const cardStyle = {
  minHeight: "45vh",
  overflowY: "auto",
};


export default WorkExperience;
