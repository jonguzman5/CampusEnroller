import React from 'react';
import '../../css/Student.css';
import CampusName from '../Campus/CampusName';

function SelectCampus(){
  return (
    <select>
      <option value="">Select campus...</option>
      <option value="">Campus 1</option>
      <option value="">Campus 2</option>
    </select>
  );
}

export default SelectCampus;
