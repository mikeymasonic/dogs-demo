import React from 'react';
import Details from '../../components/Details/Details';
import { useBreedDetail, useLoading } from '../../hooks/breedProvider';
import styles from './BreedDetail.css';

const BreedDetail = () => {
  const breed = useBreedDetail();
  const loading = useLoading();
  const breedDetailNodes = breed.map(breeds => {
    return <Details key={breeds} breed={breeds} />;
  });

  if(loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  return (
    <>
      <section className={styles.BreedDetail}>
        {breedDetailNodes}
      </section>
    </>
  );
};

export default BreedDetail;
