import React from 'react';
import '../../css/Campus.css';

function CampusName(props){
  //const image = this.props.name;
  const name = props.name;
  return (
    <h1>{name}</h1>
  );
}

export default CampusName;
