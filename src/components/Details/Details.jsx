import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ image }) => (
  <>
    {image && <img src={image} />}
  </>
);

Details.propTypes = {
  image: PropTypes.string
};

export default Details;
