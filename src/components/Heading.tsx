// Importing React library to use JSX syntax and React features
import React from 'react';

// Defining the Heading component using TypeScript (React.FC represents a functional component)
const Heading: React.FC = () => {
  return (
    // This is the header section of the page
    <header>
      {/* Displaying the main title for the website */}
      <h1>March Madness NCAA Basketball Teams</h1>
    </header>
  );
};

// Exporting the Heading component to be used in other parts of the application
export default Heading;


