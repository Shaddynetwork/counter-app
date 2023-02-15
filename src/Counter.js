import React, { Component } from 'react'

class Counter extends Component {
constructor(props){
    super(props)
    this.state = {
       count: 0
    };
}

reset = () => {
    this.setState({ count: 0 });
    document.getElementById("increment-button").classList.remove("clicked");
    document.getElementById("decrement-button").classList.remove("clicked");

  }

increment = () => {

    this.setState({
        count: this.state.count + 5
    });

};

decrement=()=> {
    const newCount = this.state.count - 5;

    if (newCount >= 0) { // make sure the counter doesn't go below 0!
      this.setState({ count: newCount });  
    }    
  }



  render() {
    return (

      <div className ="card-container">

        <div className = "count">
            <h1 className = "count-heading">Simple counter App</h1>
            <p className = "count-display">Counter - {this.state.count}</p>


            <div className = "count-buttons">

              <button  className = "button-1" onClick={this.reset}>Reset</button>


              <button className = "button-2" onClick={this.increment}>Increment</button>

              <button className = "button-3" onClick={this.decrement}>Decrement</button>
            </div>

        </div>

      </div>
    );
  }
}

export default Counter