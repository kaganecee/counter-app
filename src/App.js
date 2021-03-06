import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters';

class App extends Component {
  state = { 
    counters:[
        {id:1,value:4},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0}
    ]
 };

  constructor(props) {
    super(props);
    this.state = this.props.something;
    
  };

  ComponentDidMount() {
    // You can Ajax Call w/Mount
    
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters]; //clone counters object
    const index = counters.indexOf(counter);
    counters[index] = {...counter };
    counters[index].value++;
    this.setState({counters});
};
  handleDelete = counterId => { //arrow function
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
};
  handleReset = () => { 
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({counters});
};
  render() { 
    return ( 
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value>0).length}/>
      <main className="container">
        <Counters 
        counters={this.state.counters}
        onReset={this.handleReset} 
        onIncrement={this.handleIncrement} 
        onDelete={this.handleDelete}/>
      </main>
      </React.Fragment>
     );
  }
}
 
export default App;
