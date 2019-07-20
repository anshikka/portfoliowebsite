import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import './SocialMedia.css';

class SocialMedia extends Component {
    render () {
        return this.props.networks.map((network) =>
            <a className="social-media-icon" href={network.link}>
                <Icon name={network.iconName} size='big'/>
            </a>
            
        );
    }
}


//PropTypes
SocialMedia.propTypes = {
    networks: PropTypes.array.isRequired
}

export default SocialMedia;