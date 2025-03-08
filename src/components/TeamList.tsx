// Importing React library to use JSX syntax and React features
import React from 'react';

// Importing the TeamCard component, which is used to display each team's information
import TeamCard from './TeamCard'; // Ensure the import path is correct

// Defining the structure of the team object (type Team)
interface Team {
  school: string;  // Name of the school
  name: string;    // Name of the mascot
  city: string;    // City where the school is located
  state: string;   // State where the school is located
}

// Defining the structure of the props that TeamList will receive
interface TeamListProps {
  teams: Team[];   // An array of Team objects
}

// TeamList is a functional component that takes in an array of teams and maps them to TeamCard components
const TeamList: React.FC<TeamListProps> = ({ teams }) => {
  return (
    // The div that holds all the team cards
    <div className="team-list">
      {/* Mapping over the 'teams' array and rendering a TeamCard for each team */}
      {teams.map((team, index) => (
        // For each team, create a TeamCard and pass the team's details as props
        <TeamCard
          key={index}  // Using index as the key for each card (ideal to use a unique ID, but index works here)
          school={team.school}  // Passing school name to the TeamCard
          mascot={team.name}    // Passing mascot name to the TeamCard
          city={team.city}      // Passing city to the TeamCard
          state={team.state}    // Passing state to the TeamCard
        />
      ))}
    </div>
  );
};

// Exporting TeamList so it can be used in other parts of the app
export default TeamList;



