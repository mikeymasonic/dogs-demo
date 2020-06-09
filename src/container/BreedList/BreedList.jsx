import React, { useState, useEffect } from 'react';
import List from '../../components/List/List';
import { fetchList } from '../../services/dogsAPI';

const BreedList = () => {
  const [breeds, setBreeds] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchList()
      .then(apiBreeds => setBreeds(apiBreeds));
  }, []);

  useEffect(() => {
    setFilteredBreeds(breeds.slice(0, 12));
  }, [breeds]);

  useEffect(() => {
    const searchResults = breeds.filter(breed => breed.includes(searchText));
    setFilteredBreeds(searchResults.slice(0, 12));
  }, [searchText]);

  const handleChange = ({ target }) => {
    setSearchText(target.value);
  };

  const breedNodes = filteredBreeds.map(breed => {
    return <List key={breed} breed={breed} />;
  });
  
  return (
    <>
      <input type="text" placeholder="Search" value={searchText} onChange={handleChange} />
      {breedNodes}
    </>
  );
};

export default BreedList;
