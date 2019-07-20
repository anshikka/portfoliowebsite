import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react'
import WorkDescription from './WorkExperience/WorkDescription'

class WorkExperience extends Component {
    render () {
        return this.props.work.map((job) => 
            <div class="column">
                <Card>
                <Image src={job.companyLogo} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{job.positionName}</Card.Header>
                <Card.Meta>
                    <span className='date'>{job.date}</span>
                </Card.Meta>
                <Card.Description>
                    <ul role="list" class="ui list">
                        <WorkDescription workItems={job.workDescription} />
                    </ul>
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    {job.companyName}
                </Card.Content>
            </Card>
            </div>
        );
    }
}

export default WorkExperience;
