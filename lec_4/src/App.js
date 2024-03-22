import React from 'react'
import './App.css';

class App extends React.Component
{
  constructor()
  {
      super();
      console.log("Constructor");
      this.state = {
          count : 0
      }
  }
  componentDidUpdate(preProps, preState, snapShots)
  {
      if(preState.count === this.state.count)
      {
        alert("Both Value Are Same",preState.count)
      }
  }
  render()
  {
      console.log("render");

      return(
          <div className='App'>
              <h1>Count : {this.state.count}</h1>
              <button onClick={()=>this.setState({count:1})}>Click</button>
          </div>
      )
  }
}

export default App;
