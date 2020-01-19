import React from 'react';
import { NavLink } from 'react-router-dom'
import '../../css/Students.css';

function StudentsPresent(props){
  return (
    <div className="students-container">
      <div className="students-header">
        <h3>All Students</h3>
        <NavLink to="/Students/NewStudentForm"><button>Add Student</button></NavLink>
      </div>
      <div className="studentcard-container">
        {props.getStudents()}
      </div>
    </div>
  )
}

export default StudentsPresent;
