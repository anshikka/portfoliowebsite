import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { ToastContainer } from "react-toastify";
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import background_pic from "./assets/images/background.jpg";
import Home from "./Components/Home";
import Projects from "./Components/Resume/Experience/Projects";
import Resume from "./Components/Resume/Experience/Resume";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="OverlayBackground" style={BackgroundStyle} src={background_pic}>
        <div className="App">
          <div className="Header">
            <Container fluid>
            <div className="Menu" style={MenuStyle}>
              <a href="/">
                <h4>Home</h4>
              </a>
              <a href="/#/resume">
                <h4>Resume</h4>
              </a>
              <a href="/#/projects">
                <h4>Projects</h4>
              </a>
            </div>
            </Container>
          </div>

          <Router>
            <Container fluid>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/resume" component={Resume} />
              </Switch>
            </Container>
          </Router>
        </div>
      </div>
      
    );
  }
}

const BackgroundStyle = {
  backgroundColor: "#16213e",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundImage: `url(${background_pic})`,
  backgroundRepeat: 'repeatY'
};

const MenuStyle = {
  textAlign: "right",
  paddingTop: "3vh",
};

export default App;
