import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import Journey from '../journey/Journey';

export default function Header(props) {
    const { title,onBack } = props;

    return (
        <div className="header">
            <div class="header-back" onClick={onBack}>
                <svg width="42" height="42">
                    <polyline points="25,13 16,21 25,29" stroke="#fff" strokeWidth="2" fill="none"/>
                </svg>
            </div>
            <div class="header-title">{title}</div>
        </div>
    )
}
Header.propTypes = {
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}