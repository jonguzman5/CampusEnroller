import React, { Component } from 'react';
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
      <a><h4>{name}</h4></a>
      <p>{num} Students</p>
      <div className="buttons">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default CampusCard;
