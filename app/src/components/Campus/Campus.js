import React, {Component} from 'react';
import '../../css/Campus.css';
import CampusImage from './CampusImage';
import CampusAddress from './CampusAddress';
import CampusName from './CampusName';
import CampusDesc from './CampusDesc';
import StudentImage from '../Student/StudentImage';
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
      </div>
    );
  }
}

export default Campus;
