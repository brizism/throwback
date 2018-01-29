import React from 'react';

export default class AddAccomplishment extends React.Component {
  handleAddAccomplishment = (e) => {
    e.preventDefault();
    const accomplishment = e.target.elements.accomplishment.value.trim();
    
    if(accomplishment){
      this.props.handleAddAccomplishment(accomplishment)
    }
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleAddAccomplishment} >
          <input type="text" name="accomplishment" />
          <button>Add Accomplishment</button>
        </form>
      </div>
    )
  }
}