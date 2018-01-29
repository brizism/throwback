import React from 'react';
import Action from './Action';
import AddAccomplishment from './AddAccomplishment';
import AccomplishmentList from './AccomplishmentList';

export default class Throwback extends React.Component {
  state = {
    accomplishments: ['hi', 'hello', 'help Me'],
    selectedAccomplishment: undefined
  }

  handleDeleteAccomplishments = () => {
    this.setState(() => ({ accomplishments: [] }));
  }

  handleDeleteAccomplishment = (accomplishment) => {
    this.setState((prevState) => ({
      accomplishments: prevState.accomplishments.filter(el => accomplishment !== el)
     }))
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.accomplishments.length);
    const accomplishment = this.state.accomplishments[randomNum];
    this.setState(() => ({ selectedAccomplishment: accomplishment }));
    alert(accomplishment)
  }

  handleAddAccomplishment = (accomplishment) => {
    this.setState((prevState) => ({ accomplishments: prevState.accomplishments.concat([accomplishment]) }))
  }

  componentDidMount(){
    console.log('componentDidMount')
  }















  render(){
    return (
      <div>
        <h1>Welcome to Throwback</h1>
        <Action
          hasAccomplishments={this.state.accomplishments.length > 0} 
          handlePick={this.handlePick}
          />
        <AccomplishmentList
          accomplishments={this.state.accomplishments}
          handleDeleteAccomplishment={this.handleDeleteAccomplishment}
          handleDeleteAccomplishments={this.handleDeleteAccomplishments}
        
        />
        <AddAccomplishment  
          handleAddAccomplishment={this.handleAddAccomplishment}
        />
      </div>
    )
  }
}