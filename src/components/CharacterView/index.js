import React from 'react';
import PropTypes from 'prop-types';

import './CharacterView.css';

const CharacterView = ({ toggleCharacter }) => (
    <div className="characterview_container" onClick={() => toggleCharacter()}>
        <div className="characterview_inner">
        </div>
    </div>
);

CharacterView.propTypes = {
    toggleCharacter: PropTypes.func.isRequired,
}

export default CharacterView;