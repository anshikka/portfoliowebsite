import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { ToastContainer } from "react-toastify";
import {
  HashRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Particles from 'react-particles-js';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Components/Home";
import Projects from "./Components/Resume/Experience/Projects";
import Resume from "./Components/Resume/Experience/Resume";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="OverlayBackground" style={BackgroundStyle}>
        <Particles canvasClassName="OverlayBackground" style={particleStyle} />
        <div className="App">
          <div className="Header">
            <div className="Menu" style={MenuStyle}>
              <a href="/"><h4>Home</h4></a>
              <a href="/#/resume">
                <h4>Resume</h4>
              </a>
              <a href="/#/projects">
                <h4>Projects</h4>
              </a>
            </div>
          </div>

          <Router>
            <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/resume" component={Resume} />
            </Switch>
            </Container>
            <ToastContainer style={{textAlign: "center"}}autoClose={3000} position="bottom-center" hideProgressBar={true} newestOnTop={true} closeOnClick draggable={false} pauseOnHover = {true}/>
          </Router>
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
  minHeight: '155vh'
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
export default App;
