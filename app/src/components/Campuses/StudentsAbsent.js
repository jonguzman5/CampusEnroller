import React from 'react';
import '../../css/Campuses.css';

function StudentsAbsent(props){
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
      <div className="editcampusform-state">
        <p>Students on Campus</p>
        <select>
          <option>Student 1</option>
          <option>Student 2</option>
        </select>
        <button>Add to Campus</button>
      </div>
      <p>There are no students currently registered to this campus</p>
    </div>
  );
}

export default StudentsAbsent;
