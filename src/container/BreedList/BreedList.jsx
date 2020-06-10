import React from 'react';
import List from '../../components/List/List';
// import { fetchList } from '../../services/dogsAPI';
import { useFilteredBreeds, useLoading } from '../../hooks/breedProvider';

const BreedList = () => {

  // const [breeds, setBreeds] = useState([]);
  // const [filteredBreeds, setFilteredBreeds] = useState([]);
  // const [searchText, setSearchText] = useState('');
 

  // useEffect(() => {
  //   fetchList()
  //     .then(apiBreeds => setBreeds(apiBreeds));
  // }, []);

  // useEffect(() => {
  //   setFilteredBreeds(breeds.slice(0, 12));
  // }, [breeds]);

  // useEffect(() => {
  //   const searchResults = breeds.filter(breed => breed.includes(searchText));
  //   setFilteredBreeds(searchResults.slice(0, 12));
  // }, [searchText]);

  // const handleChange = ({ target }) => {
  //   setSearchText(target.value);
  // };
  const filteredBreeds = useFilteredBreeds();

  const breedNodes = filteredBreeds.map(breed => {
    return <List key={breed} breed={breed} />;
  });
  const loading = useLoading();

  if(loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  if(filteredBreeds.length < 1 && !loading) return (
    <section>
      <h2>No breed matches found.</h2>
    </section>
  );

  
  
  return (
    <>
      {breedNodes}
    </>
  );
};

export default BreedList;
