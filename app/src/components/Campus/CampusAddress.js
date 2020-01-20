import React from 'react';
import '../../css/Campus.css';

function CampusAddress(props){
  //const address = this.props.address;
  const address = props.address;
  return (
    <p>{address}</p>
  );
}

export default CampusAddress;
