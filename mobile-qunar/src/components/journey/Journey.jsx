import React from 'react';
import PropTypes from 'prop-types';
import './Journey.css';

export default function Journey(props) {
    const { from, to } = props;

    return (
        <div> 城市 </div>
    )
}
Journey.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired
}