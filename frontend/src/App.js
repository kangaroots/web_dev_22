// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import { GiHeartInside } from "react-icons/gi"

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';

// Define the function that renders the content in routes using State.
function App() {

  // define a new state variable, exercise, to share between two of its child nodes. The update function is setExercise.
  const [exercise, setExercise] = useState();

  return (
    <div className='App'>
      <Router>

          <header className='App-header'>
            <GiHeartInside className='App-logo'/>
            <h1>Joyful Movement</h1>
            <p>No bad workouts.</p>
          </header>

          <Navigation />

          <main>
            <Route path="/" exact>
              <HomePage setExercise={setExercise} />
            </Route>

            <Route path="/add-exercise">
              <AddExercisePage />
            </Route>
            
            <Route path="/edit-exercise">
              <EditExercisePage exerciseToEdit={exercise} />
            </Route>
          </main>

          <footer>
            <p>&copy; 2022 Joanna Kang</p>
          </footer>

      </Router>
    </div>
  );
}

export default App;