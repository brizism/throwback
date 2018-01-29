import React from 'react';
import Accomplishment from './Accomplishment';

const AccomplishmentList = (props) => (
  <div>
    <button
      onClick={props.handleDeleteAccomplishments}
    >
    Remove All
    </button>
    {props.accomplishments.length === 0 && <p>Please add an accomplishment to get started!</p>}
    {
      props.accomplishments.map((el, i) => (
        <Accomplishment key={el}
        accompText={el}
        count={i + 1}
        />
      ))
    }
  </div>
)

export default AccomplishmentList;