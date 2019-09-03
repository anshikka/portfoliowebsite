import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import WorkDescription from './WorkExperience/WorkDescription'

class WorkExperience extends Component {
    render () {
        return this.props.work.map((job) => 
            <Card style={workExperienceStyle}>
                <Card.Content style={cardStyle}>
                    <Card.Header>{job.positionName}</Card.Header>
                    <Card.Meta>{job.companyName}</Card.Meta>
                    <Card.Description>
                        <ul>
                            <WorkDescription workItems={job.workDescription}/>
                        </ul>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

const workExperienceStyle = {
    float: 'left',
    margin: '2vh 1vw auto 1vw',
    backgroundolor: 'rgb(17, 57, 81)' 
}

const cardStyle = {
    minHeight: '45vh'
}

export default WorkExperience;
