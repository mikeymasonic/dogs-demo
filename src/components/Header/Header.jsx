import React from 'react';
import { Link } from 'react-router-dom';
import { useSearchText, useHandleChange } from '../../hooks/breedProvider';

const Header = () => {

  const searchText = useSearchText();
  const handleChange = useHandleChange();
  
  return (
    <>
      <h1>Dogs!</h1>
      <Link to="/" >Home</Link>
      <input type="text" placeholder="Search" value={searchText} onChange={handleChange} />
    </>
  );
};

export default Header;
