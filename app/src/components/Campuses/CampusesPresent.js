import React from 'react';
import { NavLink } from 'react-router-dom'
import '../../css/Campuses.css';

function CampusesAbsent(props){
  return (
    <div className="campuses-container">
      <div className="campuses-header">
        <h3>Campuses</h3>
        <NavLink to="/Campuses/NewCampusForm"><button>Add Campus</button></NavLink>
      </div>
      <div className="campuscard-container">
        {props.getCampuses()}
      </div>
    </div>
  );
}

export default CampusesAbsent;
