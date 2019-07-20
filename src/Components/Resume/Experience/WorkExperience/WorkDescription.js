import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WorkDescription extends Component {
    render () {
        return this.props.workItems.map((item) =>
            <li role="listitem" class="">{item}</li>
        );
    }
}

export default WorkDescription;