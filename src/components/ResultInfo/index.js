import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'ramda';
import './ResultInfo.css';

const ResultInfo = ({ resultInfo }) => {
  if (isEmpty(resultInfo))
    return <div />
  return (
    <div className="resultinfo_container">
      <p className="characters_found">{resultInfo.total} characters found</p>
    </div>
  );
};

ResultInfo.propTypes = {
  resultInfo: PropTypes.object.isRequired,
}

export default ResultInfo;