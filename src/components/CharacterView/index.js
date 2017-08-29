import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { loadCharacter } from '../../actions/loadCharacter';
import { connect } from 'react-redux';
import { map } from 'ramda';
import Header from '../Header';
import './CharacterView.css';

class CharacterView extends Component {
    componentWillMount() {
        const { loadCharacter } = this.props;
        loadCharacter(this.props.location.pathname);
     }

     componentWillUnmount() {
        const { loadCharacter } = this.props;
        loadCharacter();
     }

    render() {
        const { character, sucess } = this.props;
        if (sucess === false) {
            return (
            <div className="characterview">
                <Header />
                <div className="characternotfound_container">
                    <i className="fa fa-exclamation-triangle warning_icon" aria-hidden="true"></i>
                    <h2 className="characternotfound_title">Character not found!</h2>
                    <Link to="/courses">
                        <i className="fa fa-arrow-left back_icon_notfound" aria-hidden="true"></i>
                    </Link>
                </div>
            </div>
            )
        }
        if (!character[0]) {
            return (
            <div className="characterview">
                <Header />
            </div>
            )
        }
        return(
            <div className="characterview">
                <Header />
                <div className="characterview_container">
                    <div className="characterview_inner">
                        <div className="characterview_header">
                            <Link to="/courses">
                                <i className="fa fa-arrow-left back_icon" aria-hidden="true"></i>
                            </Link>
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
                            <div className="comic_title">
                                <span className="pt-icon-standard pt-icon-book icon_comics" />
                                <h2>Comics</h2>
                            </div>
                            {map(comic => (
                                <p key={comic.name} className="comicname">{comic.name}</p>
                            ),character[0].comics.items)
                            }
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

CharacterView.propTypes = {
    character: PropTypes.array.isRequired,
    sucess: PropTypes.bool.isRequired,
}

const actions = { loadCharacter };

const mapStateToProps = state => ({
  character: state.character,
  sucess: state.sucess,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CharacterView);