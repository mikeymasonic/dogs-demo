import React, { useState, useEffect } from 'react';
import List from '../../components/List/List';
import { fetchList } from '../../services/dogsAPI';

const BreedList = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetchList()
      .then(apiBreeds => setBreeds(apiBreeds));
  }, []);

  const breedNodes = breeds.map(breed => {
    return <List key={breed.name} {...breed} />;
  });
  
  return (
    <>
      {breedNodes}
    </>
  );
};

export default BreedList;
