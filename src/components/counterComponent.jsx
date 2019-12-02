import React, { Component } from 'react';

class Counter extends Component {
    state = {
   count :0,
   address : "bhopal",
 
    };
    
    render() { 
       let classes =this.getbadgeclasses();
            return ( 
            <div>
                <span className={classes}>{this.formatCount()}</span>
                <button className="btn btn-secondary sm">Increament</button>
            </div>
         );
    }formatCount(){
        const { count } = this.state;
        const { address} =  this.state;
        return count ===0 ? "ZERO" :address;
        }
        getbadgeclasses()
        {
            let classes ="badge m-2  badge-";
            classes += this.state.count===0 ? "warning" : "primary";
            return classes;

        }
    }
export default Counter;