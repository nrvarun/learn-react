import React from 'react';
import propTypes from 'prop-types';

var Avatar = function(props){
    return(
        <img className="avatar" src={props.url} alt="avatar" />
    )
}

Avatar.propTypes = {
    url: propTypes.string.isRequired
}

export default Avatar;