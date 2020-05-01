import React,{Component}from 'react'
import './Keypad.css'


class Keypad extends Component
{
  render()
  {
      var styles={
          width: '180px'
      }
      var styles1={
          width:'110px'
      }
      var styles2={
          width:'83px'
      }
      
  const buttonPressed = (e) =>
  {
  this.props.buttonPressed(e.target.value);
  }
 
    return (
        <div className="divmain">
            <div className="dis">
   <input type="text" id="input" value={this.props.res}/>
            </div>
             <table>
                 <tr className="first">
                    <button style={styles2} value='C' onClick={buttonPressed}>C<br/>Cancel</button>
                    <button style={styles1}  id='1' onClick={buttonPressed} value='posneg'>+/-<br/>Positive/Negative</button>
                        <button style={styles2} value='CL'onClick={buttonPressed}>X<br/>Clear</button>
                     <button style={styles2} onClick={buttonPressed} value='/'>/<br/>Divide</button>
                     </tr>
                    <tr>
                     <button value='7' onClick={buttonPressed}>7</button>
                     <button value='8'onClick={buttonPressed}>8</button>
                     <button value='9' onClick={buttonPressed}>9</button>
                     <button value='*' onClick={buttonPressed}>X</button>
                     </tr>
                     <tr>
                     <button value='4' onClick={buttonPressed}>4</button>
                     <button value='5' onClick={buttonPressed}>5</button>
                     <button value='6' onClick={buttonPressed}>6</button>
                     <button value='-' onClick={buttonPressed}>-</button>
                     </tr>
                     <tr>
                     <button value='1' onClick={buttonPressed}>1</button>
                     <button value='2'onClick={buttonPressed} >2</button>
                     <button value='3' onClick={buttonPressed}>3</button>
                     <button value='+'onClick={buttonPressed}>+</button>
                     </tr>
                     <tr>
                     <button style={styles} value='0' onClick={buttonPressed}>0</button>
                     <button value='.' onClick={buttonPressed}>.</button>
                     <button value='='onClick={buttonPressed}>=</button>
                     </tr>
                     
                 </table>
           
        </div>
    );

  }


}

export default Keypad;