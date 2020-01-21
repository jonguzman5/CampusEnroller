import React from 'react';
import { NavLink } from 'react-router-dom'
import StudentCard from '../Students/StudentCard';
import '../../css/Campuses.css';

function StudentsPresent(props){
  return (
    <div className="editcampusform-container">
      <form onSubmit={props.handleSubmit}>
        <h1>Edit Campus Form</h1>
        <label>Campus Name <input name="name" type='text' placeholder={props.name} onChange={e => props.change(e)}/></label>
        <label>Campus Location <input name="address" type='text' placeholder={props.address} onChange={e => props.change(e)}/></label>
        <label>Campus Image URL <input name="imageurl" type='text' placeholder={props.imageurl} onChange={e => props.change(e)}/></label>
        <label>Campus Description <input name="description" type='text' placeholder={props.description} onChange={e => props.change(e)}/></label>
        <input className="hide" name="id" value={props.id} readOnly></input>
        <input type='submit' value="Save Changes"/> {/*ADD REDIRECT TO /CAMPUSES*/}
      </form>
      <h1>Students on Campus</h1>
      <div className="box box3">
        <div className="item item3">
          <select >
            <option>Student 1</option>
            <option>Student 2</option>
          </select>
          <NavLink to="/"><button>Add to Campus</button></NavLink>{/*remove navlink*/}
        </div>
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
  );
}

export default StudentsPresent;
