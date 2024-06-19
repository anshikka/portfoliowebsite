import React, { Component } from "react";
import { Icon, Container } from "semantic-ui-react";
import { Document, Page, pdfjs } from "react-pdf";
import resumeFile from "../../../assets/pdfs/AnshSikka_Resume.pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "./Resume.css";

class Resume extends Component {
  state = {
    numPages: 1,
    pageNumber: 1,
  };
  componentDidMount() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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
          <h4>Updated June 19, 2024</h4>
        </div>
          <Container>
            <Document
              className="resume-preview"
              file={resumeFile}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} 
/>
            </Document>

            <div className="download-area">
              <a href={resumeFile}>
                Download Resume{" "}
                <Icon className="icon" name="arrow down" size="large" />

              </a>
            </div>

            </Container>

      </div>
    );
  }
}

export default Resume;
