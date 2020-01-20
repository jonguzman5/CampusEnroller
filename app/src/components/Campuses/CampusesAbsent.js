import React from 'react';
import { NavLink } from 'react-router-dom'
import '../../css/Campuses.css';

function CampusesAbsent(){
  return (
    <div className="campuses-container">
      <div className="campuses-header">
        <h3>Campuses</h3>
        <NavLink to="/Campuses/NewCampusForm"><button>Add Campus</button></NavLink>
      </div>
      <p>There are no campuses registered in the database</p>
    </div>
  );
}

export default CampusesAbsent;
