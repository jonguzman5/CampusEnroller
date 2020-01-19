import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/Campuses.css'

class CampusCard extends Component {
  constructor(props){
    super(props)
  }

  

  numStudents = () => {
    return "num";
  }

  render = () => {
    return (
      <div className="campuscard">
        <img src={this.props.imageUrl}></img>
        <a><h4>{this.props.name}</h4></a>
        <p>{this.numStudents() + " Students"}</p>
        <div className="buttons">
          <NavLink to="/Campuses/EditCampusForm"><button>Edit</button></NavLink>
          <button>Delete</button>
        </div>
      </div>
    );
  }
}


export default CampusCard;
