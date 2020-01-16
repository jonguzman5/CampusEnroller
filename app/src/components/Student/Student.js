
import React, {Component} from 'react';
import '../../css/Student.css';
import StudentImage from './StudentImage';
import StudentName from './StudentName';
import StudentDesc from './StudentDesc';
import SelectCampus from './SelectCampus';
import AddToCampus from './AddToCampus';

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
            </div>
          </div>
          <div className="box box2">
            <SelectCampus/>
            <AddToCampus/>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;

