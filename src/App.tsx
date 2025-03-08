import React, { useEffect, useState } from 'react';
import './App.css';
import TeamCard from './components/TeamCard';
import TeamList from './components/TeamList';
import Heading from './components/Heading';

import teamsData from './CollegeBasketballTeams.json';  // Importing the JSON file

// Defining the type of team data for TypeScript
type Team = {
  school: string;  // Use 'school' for the team name
  name: string;    // Use 'name' for the mascot name
  city: string;
  state: string;
};

function App() {
  const [teams, setTeams] = useState<Team[]>([]); // Use Team type for state

  useEffect(() => {
    // Access the 'teams' array from the JSON and set the state
    setTeams(teamsData.teams);
  }, []);

  return (
    <div className="App">
      <Heading />
      <TeamList teams={teams} />
    </div>
  );
}

export default App;
