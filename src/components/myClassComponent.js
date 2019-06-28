import React, { Component } from 'react'

class MyClassComponent extends Component { 

  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }
  
  render() {
    return (
      <div>
        <h5>My Class Component</h5>
        <p>Count: {this.state.count}</p>

        <button onClick={() => this.setState({count: this.state.count + 1})}>Presióname</button>
        <button onClick={() => this.setState({count: 0})}>Reiniciar</button>
      </div>
    )
  }
}

export default MyClassComponent
