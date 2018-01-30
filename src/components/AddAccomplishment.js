import React from 'react';
import AccomplishmentForm from './AccomplishmentForm';

const AddAccomplishment = (props) => (
  <div>
    <AccomplishmentForm handleAddAccomplishment={props.handleAddAccomplishment}

    />
  </div>
   
)

export default AddAccomplishment;