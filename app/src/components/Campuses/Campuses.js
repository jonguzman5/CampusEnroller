import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/Campuses.css'
import CampusCard from './CampusCard'

class Campuses extends Component {
  constructor(props){
    super(props)
  }

  addCampus = () => {
    console.log('clicked');
  }

  render(){
    return (
      <div className="campuses-container">
        <div className="campuses-header">
          <h3>All Campuses</h3>
          <NavLink to="/Campuses/NewCampusForm"><button>Add Campus</button></NavLink>
        </div>
        <div className="campuscard-container">
          <CampusCard/>
          <CampusCard/>
          <CampusCard/>
          <CampusCard/>
          <CampusCard/>
          <CampusCard/>
          <CampusCard/>
          <CampusCard/>
        </div>
      </div>
    );
  }
}

export default Campuses;
