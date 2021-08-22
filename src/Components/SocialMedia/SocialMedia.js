import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import './SocialMedia.css';

class SocialMedia extends Component {
    socialMedia = [
        {iconName: 'facebook f', link: 'https://www.facebook.com/ansh.sikka'},
        {iconName: 'linkedin', link: 'https://www.linkedin.com/in/ansh-sikka-42576068/'},
        {iconName: 'github', link: 'https://github.com/anshikka'},
        {iconName: 'medium m', link: 'https://medium.com/@sikka008'},
        {iconName: 'spotify', link: 'https://open.spotify.com/user/anshikka?si=YQDzoPUJSrWZSVdiqs9zww'}
    ]
    render () {
        return this.socialMedia.map((network) =>
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