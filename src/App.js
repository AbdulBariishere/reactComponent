
import "./App.css";
import Counters from "./components/Counters";
import Navbar from "./components/navbar";
import React, { Component } from "react";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  
  };
 
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDelete = counterId => {
    console.log("delete event triggered", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  handleReset = () => {
    console.log("reset event triggered");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
render(){
  return (
    <React.Fragment>
      <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main className="container">
        <Counters
         counters={this.state.counters}
         onReset={this.handleReset}
         onIncrement={this.handleIncrement}
         onDelete={this.handleDelete}
        />
      </main>
    </React.Fragment>
  );
}
}
export default App;


