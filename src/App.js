import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [sign, setsign] = useState("");
  let [temp, settemp] = useState("");
  let [fval, fsetval] = useState("");
  let [del, setdel] = useState("");

  let Ans = (a) => {
    settemp(temp + a);
  }

  let fdata = (s) => {
    setsign(s);
    fsetval(temp)
    settemp('')
  }

  let ldata = () => {
    let temp1 = 0;
    try {
      if (sign == '+') {
        temp1 = String(parseInt(fval) + parseInt(temp));
        settemp(temp1)
      }
      if (sign == '-') {
        temp1 = String(parseInt(fval) - parseInt(temp));
        settemp(temp1)
      }
      if (sign == '*') {
        temp1 = String(parseInt(fval) * parseInt(temp));
        settemp(temp1)
      }
      if (sign == '/') {
        temp1 = String(parseInt(fval) / parseInt(temp));
        if(temp == 0 ){
          throw("can't divide by zero")
        }
        else{
          settemp(temp1)
        }
      }
      if (sign == "%") {
        temp1 = String(parseInt(fval) % parseInt(temp));
        settemp(temp1)
      }
    }
    catch(z){
      settemp(z)
    }
  }

  const clr = (s) => {
    if (s == 'c') {
      settemp("");
    }
  }

  const clearScreen = () => {
    settemp(temp.slice(0, -1))
  }

  return (
    <div class="calculator">
      <table>
        <input type="text" name="" placeholder="calculations" class="text-box" value={temp}></input><br></br><br></br>
      </table>

      <table>

        <tr>
          <td><input type="button" value="7" class="btn" onClick={() => Ans(7)}></input></td>
          <td><input type="button" value="8" class="btn" onClick={() => Ans(8)}></input></td>
          <td><input type="button" value="9" class="btn" onClick={() => Ans(9)}></input></td>
          <td><input type="button" value="C" class="btn clear" onClick={clearScreen}></input></td>
        </tr>

        <tr>
          <td><input type="button" value="4" class="btn" onClick={() => Ans(4)}></input></td>
          <td><input type="button" value="5" class="btn" onClick={() => Ans(5)}></input></td>
          <td><input type="button" value="6" class="btn" onClick={() => Ans(6)}></input></td>
          <td><input type="button" value="/" class="btn operator" onClick={() => fdata('/')}></input></td>
        </tr>

        <tr>
          <td><input type="button" value="1" class="btn" onClick={() => Ans(1)}></input></td>
          <td><input type="button" value="2" class="btn" onClick={() => Ans(2)}></input></td>
          <td><input type="button" value="3" class="btn" onClick={() => Ans(3)}></input></td>
          <td><input type="button" value="*" class="btn operator" onClick={() => fdata('*')}></input></td>
        </tr>

        <tr>
          <td><input type="button" value="0" class="btn" onClick={() => Ans(0)}></input></td>
          <td><input type="button" value="." class="btn" onClick={() => Ans('.')}></input></td>
          <td><input type="button" value="=" class="btn equal" onClick={() => ldata()}></input></td>
          <td><input type="button" value="+" class="btn operator" onClick={() => fdata('+')}></input></td>
        </tr>

        <tr>
          <td><input type="button" value="00" class="btn" onClick={() => Ans('00')}></input></td>
          <td><input type="button" value="%" class="btn operator" onClick={() => fdata('%')}></input></td>
          <td><input type="button" value="-" class="btn operator" onClick={() => fdata('-')}></input></td>
          <td><input type="button" value="CLR" class="btn operator" onClick={() => clr("c")}></input></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
