import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../../css/Campuses.css'

class CampusCard extends Component {
  constructor(props){
    super(props)
  }

  numStudents = () => {
    return "num";
  }

  deleteCampus = () => {
    axios.delete(`http://localhost:3003/campuses/delete/${this.props.id}`)
      .then(res => {
        console.log(res.data);
      })
  }

  render = () => {
    return (
      <div className="campuscard">
        <img src={this.props.imageUrl}></img>
        <a><h4>{this.props.name}</h4></a>
        <p>{this.numStudents() + " Students"}</p>
        <div className="buttons">
          <NavLink 
            to={{
              pathname: "/Campuses/EditCampusForm/",
              props: {
                id: this.props.id
              }
            }}
            ><button>Edit</button></NavLink>
          <button onClick={this.deleteCampus}>Delete</button>
        </div>
      </div>
    );
  }
}


export default CampusCard;
