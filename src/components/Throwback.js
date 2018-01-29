import React from 'react';
import AccomplishmentList from './AccomplishmentList';

export default class Throwback extends React.Component {
  render(){
    return (
      <div>
        <h1>Welcome to Throwback</h1>
        <AccomplishmentList />
      </div>
    )
  }
}