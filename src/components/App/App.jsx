import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BreedList from '../../container/BreedList/BreedList';
import Header from '../Header/Header';
import BreedDetail from '../../container/BreedDetail/BreedDetail';
import { BreedProvider } from '../../hooks/breedProvider';

export default function App() {
  return (
    <Router>
      <BreedProvider>
        <Header />
        <BreedList />
        <BreedDetail />
      </BreedProvider>
    </Router>
  );
}
