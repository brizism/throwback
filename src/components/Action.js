import React from 'react';

const Action = (props) => (
  <div>
    <button onClick={props.handlePick} disabled={!props.hasAccomplishments}>Throwback</button>
  </div>
)

export default Action;