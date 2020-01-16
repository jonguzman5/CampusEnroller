import React from 'react';
import '../../css/Campus.css';

function CampusName(){
  //const image = this.props.name;
  const name = "{{CAMPUS.NAME}}";
  return (
    <h1>{name}</h1>
  );
}

export default CampusName;
