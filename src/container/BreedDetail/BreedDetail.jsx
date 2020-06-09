import React, { useState, useEffect } from 'react';
import Details from '../../components/Details/Details';
import { fetchDetail } from '../../services/dogsAPI';
import { useParams } from 'react-router-dom';

const BreedDetail = () => {
  const [breed, setBreed] = useState([]);
  let { breedName } = useParams();

  useEffect(() => {
    fetchDetail(breedName)
      .then(apiBreeds => setBreed(apiBreeds));
  }, []);

  const breedListNodes = breed.map(breeds => {
    return <Details key={breeds} breed={breeds} />;
  });

  return (
    <>
      {breedListNodes}
    </>
  );
};

export default BreedDetail;
