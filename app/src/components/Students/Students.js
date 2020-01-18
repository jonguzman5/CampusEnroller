import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/Students.css';
import StudentCard from './StudentCard';
//import Student from '../Student/Student';

class Campus extends Component {
  render(){
    //const prop = this.props.thing
    return (
      <div className="students-container">
        <div className="students-header">
          <h3>All Students</h3>
          <NavLink to="/Students/NewStudentForm"><button>Add Student</button></NavLink>
        </div>
        <div className="studentcard-container">
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
          <StudentCard/>
        </div>
      </div>
    );
  }
}

export default Campus;
