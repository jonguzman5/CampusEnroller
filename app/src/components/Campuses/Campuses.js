import React, { Component } from 'react'
import '../../css/Campuses.css'
import CampusCard from './CampusCard'

class Campuses extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="campuses-container">
        <div className="campuses-header">
          <h3>All Campuses</h3>
          <button>Add Campus</button>
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
