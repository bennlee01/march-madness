// Importing React library to use JSX syntax and React features
import React, { useEffect, useState } from 'react';
// Importing the CSS file for styling the app
import './App.css';
// Importing components used in the app
import TeamCard from './components/TeamCard';
import TeamList from './components/TeamList';
import Heading from './components/Heading';

// Importing the JSON file that contains basketball team data
import teamsData from './CollegeBasketballTeams.json';  // Importing the JSON file

// Defining the structure of the team data (type Team)
type Team = {
  school: string;  // The school name (team name)
  name: string;    // The mascot name
  city: string;    // City where the team is located
  state: string;   // State where the team is located
};

function App() {
  // Defining a state variable 'teams' to hold the team data and a function 'setTeams' to update the state
  const [teams, setTeams] = useState<Team[]>([]); // Use Team type for state

  // useEffect hook is used to fetch and set the teams data when the component mounts
  useEffect(() => {
    // Accessing the 'teams' array from the imported JSON and setting it to the state
    setTeams(teamsData.teams);  // This will update the state with the data from the JSON file
  }, []);  // Empty dependency array means this effect runs only once when the component mounts

  return (
    // Main App container
    <div className="App">
      {/* Rendering the Heading component at the top of the page */}
      <Heading />
      {/* Rendering the TeamList component and passing the 'teams' data as props */}
      <TeamList teams={teams} />
    </div>
  );
}

// Exporting the App component so it can be used in other parts of the application (like in index.tsx)
export default App;

