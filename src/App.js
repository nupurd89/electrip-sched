import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exercise-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router >
      <div className = "container" >
        <Navbar />
        <Route path = "/electrip-sched/" exact component = {ExerciseList} />
        <Route path = "/electrip-sched/edit/:id" exact component = {EditExercise} />
        <Route path = "/electrip-sched/create" exact component = {CreateExercise} />
        <Route path = "/electrip-sched/user" exact component = {CreateUser} />
      </div>
    </Router>
  );
}

export default App;
