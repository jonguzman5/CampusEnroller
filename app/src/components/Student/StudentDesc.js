import React from 'react';
import '../../css/Student.css';

function StudentDesc(props){
  //const desc = this.props.desc;
  const gpa = "GPA: " + (props.gpa);
  return (
    <p>{gpa}</p>
  );
}

export default StudentDesc;
