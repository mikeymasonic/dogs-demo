import React from 'react';
import { Link } from 'react-router-dom';
import { useSearchText, useHandleChange } from '../../hooks/breedProvider';
import styles from './Header.css';

const Header = () => {

  const searchText = useSearchText();
  const handleChange = useHandleChange();
  
  return (
    <section className={styles.Header}>
      <Link to="/" ><h1>Dogs!</h1></Link>
      <input type="text" placeholder="Search" value={searchText} onChange={handleChange} />
    </section>
  );
};

export default Header;
