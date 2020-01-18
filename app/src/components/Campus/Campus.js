import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/Campus.css';
import CampusImage from './CampusImage';
import CampusAddress from './CampusAddress';
import CampusName from './CampusName';
import CampusDesc from './CampusDesc';
import StudentCard from '../Students/StudentCard';
//import Student from '../Student/Student';

class Campus extends Component {
  render(){
    //const prop = this.props.thing
    return (
      <div>
        <div className="container">
          <div className="box box1">
            <div className="item item1">
              <CampusImage/>
              <CampusAddress/>
            </div>
            <div className="item item2">
              <CampusName/>
              <CampusDesc/>
            </div>
          </div>
          <div className="box box2">
            <h3>Students on campus</h3>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Campus;
