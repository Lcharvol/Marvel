import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'ramda';
import './ResultInfo.css';

const ResultInfo = ({ resultInfo }) => {
  if (isEmpty(resultInfo))
    return <div />
  return (
    <div className="resultinfo_container">
      <div className="resultinfo_inner">
        <i className="fa fa-info-circle info_icon" aria-hidden="true"></i>
        <p className="characters_found">{resultInfo.total} characters found</p>
      </div>
    </div>
  );
};

ResultInfo.propTypes = {
  resultInfo: PropTypes.object.isRequired,
}

export default ResultInfo;