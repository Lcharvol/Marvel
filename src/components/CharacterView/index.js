import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'ramda';

import './CharacterView.css';

const CharacterView = ({ character, toggleCharacter }) => {
    if (!character[0])
        return <div />
    return(
        <div className="characterview_container">
            <div className="characterview_inner">
                <i className="fa fa-times close_button" aria-hidden="true" onClick={() => toggleCharacter()}></i>
                <div className="characterview_header">
                    <div className="characterview_avatar_container">
                        <img className="characterview_avatar" alt="avatar" src ={`${character[0].thumbnail.path}.${character[0].thumbnail.extension}`} />
                    </div>
                    <img className="characterview_header_background" alt="avatar" src ={`${character[0].thumbnail.path}.${character[0].thumbnail.extension}`} />
                </div>
                <div className="character_info">
                  <h2 className="name" >{character[0].name}</h2>
                </div>
                <div className="character_container_main">
                  <div className="comics_container">
                      <h1>Comics</h1>
                      {map(comic => (
                          <p key={comic.name} className="comicname">{comic.name}</p>
                      ),character[0].comics.items)
                      }
                  </div>
                </div>
            </div>
        </div>
    );
};

CharacterView.propTypes = {
    character: PropTypes.array.isRequired,
    toggleCharacter: PropTypes.func.isRequired,
}

export default CharacterView;