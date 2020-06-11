import React from 'react';
import Details from '../../components/Details/Details';
import { useBreedDetail, useLoading } from '../../hooks/breedProvider';

const BreedDetail = () => {
  const breed = useBreedDetail();
  // const loading = useLoading();
  const breedListNodes = breed.map(breeds => {
    return <Details key={breeds} breed={breeds} />;
  });

  // if(loading) return (
  //   <section>
  //     <h2>loading...</h2>
  //   </section>
  // );

  return (
    <>
      {breedListNodes}
    </>
  );
};

export default BreedDetail;
