import React, { Component } from "react";
import Counter from "./counterComponent";
class Counters extends Component {
  
  render() {
    const {onReset,onIncrement,onDelete} = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary sm">
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            selected ={counter.selected}
            onIncrement={onIncrement}
            onDelete={onDelete}
            value={counter.value}
            counter={counter}
            
          />
        ))}
      </div>
    );
  }
}
export default Counters;
