import React, { useState, useEffect } from 'react';
import Details from '../../components/Details/Details';
import { fetchDetail } from '../../services/dogsAPI';
import { useParams } from 'react-router-dom';

const BreedDetail = () => {
  const [breed, setBreed] = useState({});
  let { breedName } = useParams();

  useEffect(() => {
    fetchDetail(breedName)
      .then(breed => setBreed(breed));
  }, []);

  return (
    <>
      <Details {...breed} />
    </>
  );
};

export default BreedDetail;
