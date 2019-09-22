import React, { Component } from 'react';

class Today extends Component {
    constructor() {
        super();
        this.state = { today: new Date()};
    }
  
    render() { 
        return ( 
            <div>
                <h3>  {this.state.today.toLocaleDateString()}</h3>
                <h4> {this.state.today.toLocaleTimeString()}</h4>
            </div>
            
         );
    }
}
 
export default Today ;
