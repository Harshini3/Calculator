import React, { Component } from 'react';
import './App.css';
import Keypad from './components/Keypad';

class App extends Component {
  constructor(props)
  {
    super();
    this.state = {
      result:''
    }
  
  }
  buttonPressed = buttonName =>
  {
    switch(buttonName)
    {
    case "posneg":
      {
        if(this.state.result>0)
        {
          return this.setState({
            result:'-'+this.state.result
          })
        }
        else if(this.state.result<0){
          return this.setState({
            result:eval(this.state.result.slice(1))
          })
        }
      }
      case "C":
        {
        return this.Cancel();
        }
        case "=":
          {
          return this.calculation();
          }
          break;
        case "CL" :
          {
            return this.Clear();
          }
          break;
          default:
             return  this.setState({
                result:this.state.result+buttonName})    
      }
  };

  Clear = () =>
  {
    this.setState({
      result:this.state.result.slice(0,-1)
    })
  }
 Cancel=() =>
 {
   this.setState({
     result:''
   })
 }
  calculation=() =>
  {
   try {
    this.setState({
      result:eval(this.state.result) /** eval funtion evaluates the added numbers */
    })
     
   } catch (error) {
    this.setState({
      result:'error' 
    })
     
   }
  }
  
  render() {

    return (
      <div className="main">
        <center>
        <h1>ReactJs Calculator</h1>
        </center>
        
        <Keypad buttonPressed={this.buttonPressed} res={this.state.result}/>
<p>Done by Harshini N Murthi</p>
      </div>
    
    );
  }
}

export default App;
