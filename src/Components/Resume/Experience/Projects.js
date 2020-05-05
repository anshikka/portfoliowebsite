import React, { Component } from "react";
import { Button, Grid, Card, Icon } from "semantic-ui-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "./Projects.css";

class Projects extends Component {
  state = {
    error: null,
    isLoaded: false,
    repos: [],
  };
  // copy link to clipboard acknowledgement
  confirmCopied = (project_name) => {
    toast.info(project_name + " clone link copied to clipboard!");
  };
  
  componentDidMount() { 
    // retrieve repos from Github API
    fetch("https://api.github.com/users/anshikka/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            repos: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    return (
      <div id="projects">
      <div className="projects-header">
        <h1 className="title">Projects</h1> 
        <Icon className="icon" name='github' size='large'/>
      </div>
      <Grid relaxed columns={3}>
        {this.state.repos.map((repo) => (
          <Grid.Column>
            <Card className="repo-card">
              <Card.Content className="repo-name" header={repo.name} />
              <Card.Content className="repo-description" description={repo.description} />
              <Card.Content className="repo-actions" extra>
                <a href={repo.html_url}>
                  <Button basic color="green">
                    View on GitHub
                  </Button>
                </a>
                <CopyToClipboard text={repo.clone_url}>
                  <Button
                    basic
                    color="green"
                    onClick={() => this.confirmCopied(repo.name)}
                  >
                    Clone
                  </Button>
                </CopyToClipboard>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
      </div>
    );
  }
}

export default Projects;
