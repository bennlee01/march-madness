import React from 'react';
import TeamCard from './TeamCard'; // Ensure the import path is correct

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

interface TeamListProps {
  teams: Team[];
}

const TeamList: React.FC<TeamListProps> = ({ teams }) => {
  return (
    <div className="team-list">
      {teams.map((team, index) => (
        <TeamCard
          key={index}
          school={team.school}
          mascot={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </div>
  );
};

export default TeamList;



