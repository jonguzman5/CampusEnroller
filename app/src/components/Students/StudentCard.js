import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import StudentImage from '../Student/StudentImage';
import '../../css/Students.css'

function StudentCard(){
  //const image = this.props.image;
  const image = "https://3.bp.blogspot.com/-3vLsuHApBVE/V-KWrzRyhdI/AAAAAAAAC8s/dPkukqRowAQfGx8aCvU2LlsyWIoNJyAvQCEw/s640/harvard%2Buniversity%2BHD%2Bwallpaper%2B1.jpg"//placeholder
  //const name = this.props.name;
  const name = "Student Name";
  //const campusName = this.props.campusName;
  const campusName = "Campus Name";

  return (
    <div className="studentcard">
      <StudentImage/>
      <a><h4>{name}</h4></a>
      <a><h4>{campusName}</h4></a>
    </div>
  );
}

export default StudentCard;
