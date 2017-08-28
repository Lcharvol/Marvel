import React from 'react';
import PropTypes from 'prop-types';

import './CharacterView.css';

const CharacterView = ({ toggleCharacter }) => (
    <div className="characterview_container">
        <div className="characterview_inner">
            <i className="fa fa-times close_button" aria-hidden="true" onClick={() => toggleCharacter()}></i>
        </div>
    </div>
);

CharacterView.propTypes = {
    toggleCharacter: PropTypes.func.isRequired,
}

export default CharacterView;