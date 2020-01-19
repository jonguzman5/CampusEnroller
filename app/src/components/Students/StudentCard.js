import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import StudentImage from '../Student/StudentImage';
import '../../css/Students.css'

class StudentCard extends Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    const image = this.props.imageUrl;
    const name = this.props.name;
    const campusName = "Campus Name";

    return (
      <div className="studentcard">
      <StudentImage imageUrl={image}/>
      <NavLink to="/Student"><h4>{name}</h4></NavLink>
      <NavLink to="/Campus"><h4>{campusName}</h4></NavLink>
      </div>
    );
  }
}

export default StudentCard;
