import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchList, fetchDetail } from '../services/dogsAPI';

const BreedContext = createContext();

export const BreedProvider = ({ children }) => {
  const [breeds, setBreeds] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [breedDetail, setBreedDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchList()
      .then(apiBreeds => setBreeds(apiBreeds))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setFilteredBreeds(breeds.slice(0, 12));
  }, [breeds]);

  useEffect(() => {
    const searchResults = breeds.filter(breed => breed.includes(searchText));
    setLoading(true);
    setFilteredBreeds(searchResults.slice(0, 12));
    setLoading(false);
  }, [searchText]);

  // useEffect(() => {
  //   fetchDetail()
  //     .then(apiBreeds => setBreedDetail(apiBreeds));
  // }, []);

  const handleChange = ({ target }) => {
    setSearchText(target.value);
  };

  const handleDetail = (breeds) => {
    setLoading(true);
    fetchDetail(breeds)
      .then(apiBreeds => setBreedDetail(apiBreeds))
      .finally(() => setLoading(false));
  };

  return (
    <BreedContext.Provider value={{ breeds, filteredBreeds, searchText, breedDetail, handleChange, handleDetail, loading }}>
      {children}
    </BreedContext.Provider>
  );
};

BreedProvider.propTypes = {
  children: PropTypes.node
};

export const useBreeds = () =>{
  const { breeds } = useContext(BreedContext);
  return breeds;
};

export const useFilteredBreeds = () =>{
  const { filteredBreeds } = useContext(BreedContext);
  return filteredBreeds;
};

export const useSearchText = () =>{
  const { searchText } = useContext(BreedContext);
  return searchText;
};

export const useBreedDetail = () =>{
  const { breedDetail } = useContext(BreedContext);
  return breedDetail;
};

export const useHandleChange = () =>{
  const { handleChange } = useContext(BreedContext);
  return handleChange;
};

export const useHandleDetail = () =>{
  const { handleDetail } = useContext(BreedContext);
  return handleDetail;
};

export const useLoading = () =>{
  const { loading } = useContext(BreedContext);
  return loading;
};

export default BreedContext;
