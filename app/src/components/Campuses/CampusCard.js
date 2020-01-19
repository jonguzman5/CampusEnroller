import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/Campuses.css'

function CampusCard(props){
  
  const name = props.name;
  const image = props.imageUrl;
  const num = "NUM"
  // const num = props.students.length;

  return (
    <div className="campuscard">
      <img src={image}></img>
      <a><h4>{name}</h4></a>
      <p>{num} Students</p>
      <div className="buttons">
        <NavLink to="/Campuses/EditCampusForm"><button>Edit</button></NavLink>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default CampusCard;
