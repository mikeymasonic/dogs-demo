import React from 'react';
import PropTypes from 'prop-types';
import { useHandleDetail } from '../../hooks/breedProvider';
import styles from './List.css';

const List = ({ breed }) => {
  const handleDetail = useHandleDetail();

  return (
    <section className={styles.List}>
      <input
        type="radio" 
        value={breed} 
        name="dogs" 
        id={breed} 
        onClick={() => handleDetail(breed)} />
      <label 
        htmlFor={breed}>
        {breed}
      </label>
    </section>
  );
};

List.propTypes = {
  breed: PropTypes.string
};

export default List;
