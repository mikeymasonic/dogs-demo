import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import BreedList from '../../container/BreedList/BreedList';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BreedList} />
      </Switch>
    </Router>
  );
}
