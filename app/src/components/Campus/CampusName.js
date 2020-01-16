import React from 'react';

function CampusName(){
  //const image = this.props.name;
  const name = "{{CAMPUS.NAME}}";
  return (
    <h1>{name}</h1>
  );
}

export default CampusName;
