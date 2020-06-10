import React from 'react';
import Details from '../../components/Details/Details';
// import { fetchDetail } from '../../services/dogsAPI';
import { useBreedDetail, useLoading } from '../../hooks/breedProvider';
// import { useParams } from 'react-router-dom';

const BreedDetail = () => {

  const breed = useBreedDetail();
  const loading = useLoading();
  // const [breed, setBreed] = useState([]);
  // let { breedName } = useParams();


  // useEffect(() => {
  //   fetchDetail('boxer')
  //     .then(apiBreeds => setBreed(apiBreeds));
  // }, []);

  const breedListNodes = breed.map(breeds => {
    return <Details key={breeds} breed={breeds} />;
  });

  if(loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  return (
    <>
      {breedListNodes}
    </>
  );
};

export default BreedDetail;
