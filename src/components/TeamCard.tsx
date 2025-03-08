// Importing React library to use JSX syntax and React features
import React from 'react';

// Defining the type for the props that the TeamCard component will receive
// TeamCardProps will define the structure of the data passed to the component
interface TeamCardProps {
  school: string;  // Name of the school
  mascot: string;  // Name of the mascot
  city: string;    // City where the school is located
  state: string;   // State where the school is located
}

// Defining the TeamCard component that takes in props of type TeamCardProps
const TeamCard: React.FC<TeamCardProps> = ({ school, mascot, city, state }) => {
  return (
    // The main div containing the team card content
    <div className="team-card">
      {/* Displaying the school name */}
      <h3>{school}</h3>  {/* School Name */}
      
      {/* Displaying the mascot name */}
      <p>Mascot: {mascot}</p>  {/* Mascot Name */}
      
      {/* Displaying the location (city and state) */}
      <p>Location: {city}, {state}</p>  {/* City, State */}
    </div>
  );
};

// Exporting the TeamCard component so it can be used in other parts of the app
export default TeamCard;



