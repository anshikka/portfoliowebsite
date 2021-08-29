import React, { Component } from "react";
import { Button, Grid, Card, Icon, Label, Header } from "semantic-ui-react";
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
        <Icon className="icon" name='github' size='large'/>
        </a>
      </div>
      <div className="projects-grid">
      <Grid stackable columns={3}>
        {this.state.repos
        .sort((a,b) => a.updated_at < b.updated_at ? 1: -1)
        .map((repo) => (
          <Grid.Column>
            <Card className="repo-card">
              <Card.Content className="repo-header" header={repo.name}>
                <Header>{repo.name}</Header>
                <Label className="updated-at" icon='clock outline' content= {"Updated: " + new Date(repo.updated_at).toString()}/>
              </Card.Content>
              <Card.Content className="repo-description" description={repo.description} />
              <Card.Content className="repo-actions" extra>
                <a href={repo.html_url}>
                  <Button>
                    <Icon name="github"/>
                    View on GitHub
                  </Button>
                </a>
                <CopyToClipboard text={repo.clone_url}>
                  <Button
                    onClick={() => this.confirmCopied(repo.name)}
                  >
                    <Icon name="fork" />
                    Clone
                  </Button>
                </CopyToClipboard>
                
              </Card.Content>
            </Card>
            
          </Grid.Column>
        ))}
      </Grid>
      </div>
      <ToastContainer position="top-center" hideProgressBar={true}/>
      </div>
      
    );
  }
}

export default Projects;
