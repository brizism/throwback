import React from 'react';

export default class AddAccomplishment extends React.Component {
  state = {
    error: undefined
  }
  handleAddAccomplishment = (e) => {
    e.preventDefault();
    const accomplishment = e.target.elements.accomplishment.value.trim();
    const error = this.props.handleAddAccomplishment(accomplishment);

    this.setState(() => ({ error }))
    
    if(!error){
      e.target.elements.accomplishment.value = '';
    }
  }

  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddAccomplishment} >
          <input type="text" name="accomplishment" />
          <button>Add Accomplishment</button>
        </form>
      </div>
    )
  }
}