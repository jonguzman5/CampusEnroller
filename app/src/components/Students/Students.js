import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/Students.css';
import StudentImage from '../Student/StudentImage';
import CampusCard from '../Campuses/CampusCard'
//import Student from '../Student/Student';

class Campus extends Component {
  render(){
    //const prop = this.props.thing
    return (
      <div className="campuses-container">
        <div className="campuses-header">
          <h3>All Students</h3>
          <NavLink to="/Students/NewStudentForm"><button>Add Student</button></NavLink>
        </div>
        <div className="box box2">
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
          <StudentImage/>
        </div>
      </div>
    );
  }
}

export default Campus;
