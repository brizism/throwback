import React from 'react';

const Accomplishment = (props) => (
  <div>
    <p>{props.count}. {props.accompText}</p>
    <button onClick={(e) => {
      props.handleDeleteAccomplishment(props.accompText);
    }} 
    >
    Remove
    </button>
  </div>
)

export default Accomplishment;