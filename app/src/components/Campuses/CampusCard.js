import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/Campuses.css'

function CampusCard(){
  //const image = this.props.image;
  const image = "https://3.bp.blogspot.com/-3vLsuHApBVE/V-KWrzRyhdI/AAAAAAAAC8s/dPkukqRowAQfGx8aCvU2LlsyWIoNJyAvQCEw/s640/harvard%2Buniversity%2BHD%2Bwallpaper%2B1.jpg"//placeholder
  //const image = this.props.name;
  const name = "Campus Name";
  //const num = this.props.num;
  const num = "NUM";

  return (
    <div className="campuscard">
      <img src={image}></img>
      <NavLink to="/Campus"><h4>{name}</h4></NavLink>
      <p>{num} Students</p>
      <div className="buttons">
        <NavLink to="/Campuses/EditCampusForm"><button>Edit</button></NavLink>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default CampusCard;
