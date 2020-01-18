import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import '../../css/Student.css';
import StudentImage from './StudentImage';
import StudentName from './StudentName';
import StudentDesc from './StudentDesc';

class Student extends Component {
  render(){
    //const prop = this.props.thing
    return (
      <div>
        <div className="container">
          <div className="box box1">
            <div className="item item1">
              <StudentImage/>
            </div>
            <div className="item item2">
              <StudentName/>
              <StudentDesc/>
              <div className="buttons">
                <NavLink to="/Student/EditStudentForm"><button>Edit</button></NavLink>
                <button>Delete</button>
              </div>
            </div>
          </div>
          <div className="box box3">
            <div className="item item3">
              <select>
                <option value="">Select campus...</option>
                <option value="">Campus 1</option>
                <option value="">Campus 2</option>
              </select>
              <NavLink to="/Campus"><button>Add to Campus</button></NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;

