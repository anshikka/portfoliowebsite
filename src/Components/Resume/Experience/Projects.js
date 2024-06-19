import React, { Component } from "react";
import { Button, Grid, Card, CardContent, CardHeader, CardDescription, Icon, CardMeta, Container } from "semantic-ui-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast, ToastContainer } from "react-toastify";
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
          <a href="https://github.com/anshikka">
            <h1 className="title">Projects</h1>
            <Icon className="icon" name='github' size='large' />
          </a>
        </div>
        <div className="projects-grid">
          <Grid stackable columns={3}>
            {this.state.repos
              .sort((a, b) => a.updated_at < b.updated_at ? 1 : -1)
              .map((repo) => (
                <Grid.Column>
                  <Card className="repo-card">
                    <CardContent>
                      <CardHeader className="repo-header">{repo.name}</CardHeader>
                      <CardMeta className="updated-at" icon='clock outline'>{"Updated: " + new Date(repo.updated_at).toString()}</CardMeta>

                      <CardDescription className="repo-description">{repo.description}</CardDescription>
                      
                      <CardContent extra className="repo-actions">
                        <Container>
                        <a href={repo.html_url}>
                          <Button basic color='green'>
                            View on GitHub
                          </Button>
                        </a>
                        <CopyToClipboard text={repo.clone_url}>

                          <Button basic color='green'>
                          <Icon name="fork" />
                            Clone
                          </Button>
                          </CopyToClipboard>

  
                          </Container>
                      </CardContent>
                    </CardContent>
                  </Card>

                </Grid.Column>
              ))}
          </Grid>
        </div>
        <ToastContainer position="top-center" hideProgressBar={true} />
      </div>

    );
  }
}

export default Projects;
