import React from 'react';
import '../../css/Campus.css';

function CampusDesc(props){
  //const desc = this.props.desc;
  let desc = props.description;

  if(!desc || desc.length === 0){
    desc = "---"
  }

  return (
    <p>{desc}</p>
  );
}

export default CampusDesc;
