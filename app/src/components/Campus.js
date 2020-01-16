import React, {Component} from 'react';
import '../css/Campus.css';
import Nav from './Nav';
import CampusImage from './Campus/CampusImage';
import CampusName from './Campus/CampusName';
import CampusDesc from './Campus/CampusDesc';
import Student from './Student/Student';

class Campus extends Component {
  render(){
    //const prop = this.props.thing
    return (
      <div>
        <Nav/>
        <div className="container">
          <div className="box box1">
            <CampusImage/>
            <CampusName/>
            <CampusDesc/>
          </div>
          <div className="box box2">
            {/*<Student/>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Campus;
