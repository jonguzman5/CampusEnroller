import React from 'react';
import { NavLink } from 'react-router-dom'
import StudentImage from './StudentImage';
import StudentName from './StudentName';
import StudentDesc from './StudentDesc';
import '../../css/Students.css';

function CampusPresent(props){
  return (
      <div className="container">
        <div className="box box1">
          <div className="item item1">
            <StudentImage imageurl={props.imageurl}/>
          </div>
          <div className="item item2">
            <StudentName name={props.name}/>
            <StudentDesc gpa={props.gpa}/>
            <div className="buttons">
              <button onClick={props.handleEditClick}>Edit</button>
              <button onClick={props.handleDeleteClick}>Delete</button>
            </div>
          </div>
        </div>
        <p>This student is registered to a campus.</p>
        {/*STUDENT'S CURR CAMPUS*/}
        {/*DROPDOWN TO CHANGE CAMPUS*/}
      </div>
  );
}

export default CampusPresent;
