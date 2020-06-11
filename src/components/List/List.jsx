import React from 'react';
import PropTypes from 'prop-types';
import { useHandleDetail } from '../../hooks/breedProvider';
import styles from './List.css';

const List = ({ breed }) => {
  const handleDetail = useHandleDetail();

  return (
    <section className={styles.List}>
      <p><button onClick={() => handleDetail(breed)}><h1>{breed}</h1></button></p>
    </section>
  );
};

List.propTypes = {
  breed: PropTypes.string
};

export default List;
