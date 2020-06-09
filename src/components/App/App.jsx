import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import BreedList from '../../container/BreedList/BreedList';
import Header from '../Header/Header';
import BreedDetail from '../../container/BreedDetail/BreedDetail';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={BreedList} />
        <Route exact path="/detail/:breedName?" component={BreedDetail} />
      </Switch>
    </Router>
  );
}
