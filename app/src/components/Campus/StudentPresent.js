import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import CampusImage from './CampusImage';
import CampusAddress from './CampusAddress';
import CampusName from './CampusName';
import CampusDesc from './CampusDesc';
import StudentCard from '../Students/StudentCard';
import '../../css/Campuses.css';

class StudentPresent extends Component{
  
  constructor(props){
    super(props)
  }

  getStudentCardInfo = () => {
    
    let key = 0;
    let singleStudentData = {};

    return this.props.studentData.map( (info) => {
      singleStudentData = this.props.studentData[key]
      console.log(singleStudentData);
      ++key;
      return (
        <StudentCard
          key={key}
          id={singleStudentData.id}
          name={singleStudentData.firstname + " " + singleStudentData.lastname}
          email={singleStudentData.email}
          imageurl={singleStudentData.imageurl}
          gpa={singleStudentData.gpa}
          changeSingleInfo={this.changeSingleInfo}
          changeIsSingle={this.changeIsSingle}
        />          
      );
    });
  }

  render = () => {
    return (
      <div className="container">
        <div className="box box1">
          <div className="item item1">
            <CampusImage
              imageUrl={this.props.imageUrl}
            />
            <CampusAddress
              address={this.props.address}
            />
          </div>
          <div className="item item2">
            <CampusName name={this.props.name}/>
            <CampusDesc description={this.props.description}/>

            <div className="buttons">
              <button onClick={this.props.handleEditClick}>Edit</button>
              <button onClick={this.props.handleDeleteClick}>Delete</button>
            </div>
          </div>
        </div>
        <div className="box box2">
          <h3>Students on campus</h3>
          <NavLink to="/Students/NewStudentForm"><button>Add Student</button></NavLink>
        </div>
        <div className="studentcard-container">
          {this.getStudentCardInfo()}
        </div>
      </div>
  );
  }
  
}

export default StudentPresent;
