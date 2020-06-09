import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ breed }) => (
  <>
    {/* {breed && <img src={breed} />} */}
    <img src={breed} />
  </>
);

Details.propTypes = {
  breed: PropTypes.string
};

export default Details;
