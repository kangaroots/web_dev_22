import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="../add-exercise">Add Exercise</Link>

        {/* Don't need to have a tab for Edit Exercise */}
        {/* <Link to="../edit-exercise">Edit Exercise</Link> */}
    </nav>
  );
}

export default Navigation;
