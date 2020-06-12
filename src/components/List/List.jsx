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

{/* <div>
  <input type="radio" id="huey" name="drone" value="huey"
         checked>
  <label for="huey">Huey</label>
</div>

<div>
  <input type="radio" id="dewey" name="drone" value="dewey">
  <label for="dewey">Dewey</label>
</div>

<div>
  <input type="radio" id="louie" name="drone" value="louie">
  <label for="louie">Louie</label>
</div> */}

{/* <label htmlFor={breed}>{breed}</label> */}
