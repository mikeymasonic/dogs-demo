import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const List = ({ breed }) => (
  <section>
    <p><Link to={`detail/${breed}`} >{breed}</Link></p>
  </section>
);

List.propTypes = {
  breed: PropTypes.string,
};

export default List;
