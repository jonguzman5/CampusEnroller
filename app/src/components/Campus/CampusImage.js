import React from 'react';
import '../../css/Campus.css';

function CampusImage(props){
  //const image = this.props.image;
  const image = props.imageUrl;
  return (
    <img src={image}/>
  );
}

export default CampusImage;
