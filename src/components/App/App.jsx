import React from 'react';
import BreedList from '../../container/BreedList/BreedList';
import Header from '../Header/Header';
import BreedDetail from '../../container/BreedDetail/BreedDetail';
import { BreedProvider } from '../../hooks/breedProvider';

export default function App() {
  return (
    <BreedProvider>
      <Header />
      <BreedList />
      <BreedDetail />
    </BreedProvider>
  );
}
