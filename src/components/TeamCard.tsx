import React from 'react';

interface TeamCardProps {
  school: string;
  mascot: string;
  city: string;
  state: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ school, mascot, city, state }) => {
  return (
    <div className="team-card">
      <h3>{school}</h3>  {/* School Name */}
      <p>Mascot: {mascot}</p>  {/* Mascot Name */}
      <p>Location: {city}, {state}</p>  {/* City, State */}
    </div>
  );
};

export default TeamCard;


