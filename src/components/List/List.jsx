import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { useHandleDetail } from '../../hooks/breedProvider';


const List = ({ breed }) => {
  const handleDetail = useHandleDetail();

  return (
    <section>
      {/* <p><Link to={`detail/${breed}`} >{breed}</Link></p> */}
      <p><button onClick={() => handleDetail(breed)}>{breed}</button></p>
    </section>
  );
};

List.propTypes = {
  breed: PropTypes.string.isRequired,
};

export default List;
