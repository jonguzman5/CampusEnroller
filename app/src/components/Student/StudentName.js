import React from 'react';
import '../../css/Student.css';

function StudentName(){
  //const image = this.props.name;
  const name = "{{STUDENT.NAME}}";
  return (
    <h1>{name}</h1>
  );
}

export default StudentName;
