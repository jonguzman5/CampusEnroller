import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../../css/Students.css';
import CampusName from '../Campus/CampusName';

class StudentCard extends Component {
  constructor(props) {
    super(props);
  }

  numStudents = () => {
    return "num";
  }

  deleteCampus = () => {
    axios.delete(`http://localhost:3003/students/delete/${this.props.id}`)
      .then(res => {
        console.log(res.data);
      })
  }

  handleClick = () => {
    console.log(this.props.id)
    this.props.changeEditInfo(this.props.id, this.props.name, this.props.email, this.props.gpa)
    this.props.changeEdit()
  }

  render = () => {
    return (
      <div className="studentcard">
        <img src={this.props.imageurl}></img>
        <a><h4>{this.props.name}</h4></a>
        <a><h4>{CampusName}</h4></a>
      </div>
    );
  }
}

export default StudentCard;
