import React from 'react';
import { NavLink } from 'react-router-dom'
import CampusImage from './CampusImage';
import CampusAddress from './CampusAddress';
import CampusName from './CampusName';
import CampusDesc from './CampusDesc';
import StudentCard from '../Students/StudentCard';
import '../../css/Campuses.css';

function StudentAbsent(props){
  return (
      <div className="container">
        <div className="box box1">
          <div className="item item1">
            <CampusImage
              imageUrl={props.imageUrl}
            />
            <CampusAddress
              address={props.address}
            />
          </div>
          <div className="item item2">
            <CampusName name={props.name}/>
            <CampusDesc description={props.description}/>

            <div className="buttons">
              <button onClick={props.handleEditClick}>Edit</button>
              <button onClick={props.handleDeleteClick}>Delete</button>
            </div>
          </div>
        </div>
        <div className="box box2">
          <h3>Students on campus</h3>
          <NavLink to="/Students/NewStudentForm"><button>Add Student</button></NavLink>
        </div>
        <p>There are no students currently registered to this campus</p>
      </div>
  );
}

export default StudentAbsent;
