// Add counter component for counter button in notes for project assessment

import React, { Component } from 'react';
class Counter extends Component {
   constructor() {
       super ();
       this.state = {
           count: 0
        }
   }

   handleClick = (event) => {
       event.preventDefault();
       this.setState({
           count: this.state.count +1
       })
       
   }
    render() { 
        return ( 
            <div>
                <button onClick = {this.handleClick} name="counter" value={this.state.count}>Counter {this.state.count}</button>
            </div>
         );
    }
}
 
export default Counter;