import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Details.css';

const Details = ({ breed }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (    
    <>
      <div className={styles.imageGrid}>
        <img 
          src={breed}
          alt={breed}
          onLoad={()=> setImageLoaded(true)} />
        {!imageLoaded && (
          <h2>loading image...</h2>
        )}
      </div>
    </>

  );
  
};

Details.propTypes = {
  breed: PropTypes.string
};

export default Details;
