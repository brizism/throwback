import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class AccomplishmentForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      error: undefined
    }
  };

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