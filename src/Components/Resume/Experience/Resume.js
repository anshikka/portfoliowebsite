import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import { Document, Page, pdfjs } from 'react-pdf';
import resumeFile from "../../../assets/pdfs/resume.pdf";
import "./Resume.css";


class Resume extends Component {
  state = {
    numPages: 1,
    pageNumber: 1,
  };
  componentDidMount () {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };
  render() {
    const { pageNumber } = this.state;

    return (
      <div id="resume">
        <div className="resume-header">
          <a href="https://www.linkedin.com/in/ansh-sikka-42576068/">
          <h1 className="title">Resume</h1>
          <Icon className="icon" name="linkedin" size="large" />
          </a>
        </div>
        <Document className="resume-preview"
          file={resumeFile}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div className="download-area">
        <a href={resumeFile}>
          Download <Icon className="icon" name="arrow down" size="large" />
        </a>
        </div>
      </div>
    );
  }
}

export default Resume;
