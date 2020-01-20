import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../../css/Students.css';
import CampusName from '../Campus/CampusName';

class StudentCard extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log(this.props.id)
    this.props.changeSingleInfo(this.props.id, this.props.name, this.props.email, this.props.imageurl, this.props.gpa)
    this.props.changeIsSingle();
  }

  render = () => {
    return (
      <div className="studentcard">
        <img src={this.props.imageurl}></img>
        <a onClick={this.handleClick}><h4>{this.props.name}</h4></a>
        <a><h4>{CampusName}</h4></a>
      </div>
    );
  }
}

export default StudentCard;
