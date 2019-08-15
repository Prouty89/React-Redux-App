import React from 'react';

const Data = props => {
  return (
    <div>
    {console.log(props)}
      <h4>City: {props.location.City}</h4>
      <p>State: {props.location.State}</p>
      <p>District: {props.location.District}</p>
    </div>
  );
};

export default Data;
