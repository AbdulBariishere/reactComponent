import React, { Component } from "react";
class Counter extends Component {
 
  render() {
    let classes = this.getbadgeclasses();
    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button
           onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary sm"
        >
         Get Items
        </button>
        <button
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
          className="btn btn-danger sm m-2"
        >
          Delete
        </button>
        {/*  {this.renderTags()} */}
      </div>
    );
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "ZERO" : value;
  }
  getbadgeclasses() {
    let classes = "badge m-4  badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  /*    renderTags(){
            if(this.state.tags.length === 0)
            return <p>please enter the tags inside the list</p>;
            else
            return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        }
    */
}
export default Counter;
